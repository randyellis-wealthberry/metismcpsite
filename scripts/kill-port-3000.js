#!/usr/bin/env node

/**
 * Kill Port 3000 Script (Cross-Platform)
 * Works on macOS, Linux, and Windows
 */

import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const PORT = 3000;

const isWindows = process.platform === 'win32';

async function killPort() {
  console.log(`🔍 Checking port ${PORT}...`);

  try {
    let pid;

    if (isWindows) {
      // Windows command to find process using port
      const { stdout } = await execAsync(
        `netstat -ano | findstr :${PORT} | findstr LISTENING`
      );

      if (!stdout.trim()) {
        console.log(`✅ Port ${PORT} is already free`);
        return;
      }

      // Extract PID from netstat output (last column)
      const lines = stdout.trim().split('\n');
      pid = lines[0]?.trim().split(/\s+/).pop();
    } else {
      // Unix/macOS command to find process using port
      try {
        const { stdout } = await execAsync(`lsof -ti:${PORT}`);
        pid = stdout.trim();
      } catch (error) {
        console.log(`✅ Port ${PORT} is already free`);
        return;
      }
    }

    if (!pid) {
      console.log(`✅ Port ${PORT} is already free`);
      return;
    }

    console.log(`⚠️  Found process ${pid} using port ${PORT}`);
    console.log(`🔪 Killing process...`);

    // Kill the process
    if (isWindows) {
      await execAsync(`taskkill /PID ${pid} /F`);
    } else {
      // Try graceful shutdown first
      try {
        await execAsync(`kill ${pid}`);

        // Wait for graceful shutdown
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Check if still running
        try {
          await execAsync(`lsof -ti:${PORT}`);
          // Still running, force kill
          console.log(`⚡ Force killing stubborn process...`);
          await execAsync(`kill -9 ${pid}`);
        } catch {
          // Process ended gracefully
        }
      } catch (error) {
        // Already killed or doesn't exist
      }
    }

    // Verify port is free
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      if (isWindows) {
        const { stdout } = await execAsync(
          `netstat -ano | findstr :${PORT} | findstr LISTENING`
        );
        if (stdout.trim()) {
          console.log(`❌ Failed to free port ${PORT}`);
          process.exit(1);
        }
      } else {
        await execAsync(`lsof -ti:${PORT}`);
        console.log(`❌ Failed to free port ${PORT}`);
        process.exit(1);
      }
    } catch {
      console.log(`✅ Port ${PORT} freed successfully`);
    }
  } catch (error) {
    if (error instanceof Error && (error.message.includes('command not found') ||
        error.message.includes('not recognized'))) {
      console.error('❌ Required command not found. Please ensure lsof (Unix) or netstat (Windows) is available.');
      process.exit(1);
    }

    // Port is free (lsof returns error when no process found)
    console.log(`✅ Port ${PORT} is already free`);
  }
}

killPort().catch(error => {
  console.error('❌ Error:', error.message);
  process.exit(1);
});
