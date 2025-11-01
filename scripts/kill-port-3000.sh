#!/bin/bash

# Kill Port 3000 Script
# This script safely kills any process running on port 3000

PORT=3000

echo "🔍 Checking port $PORT..."

# Find the PID using port 3000
PID=$(lsof -ti:$PORT)

if [ -z "$PID" ]; then
  echo "✅ Port $PORT is already free"
  exit 0
fi

echo "⚠️  Found process $PID using port $PORT"
echo "🔪 Killing process..."

# Try graceful shutdown first (SIGTERM)
kill $PID 2>/dev/null

# Wait up to 3 seconds for graceful shutdown
for i in {1..6}; do
  sleep 0.5
  if ! lsof -ti:$PORT > /dev/null 2>&1; then
    echo "✅ Port $PORT freed successfully"
    exit 0
  fi
done

# If still running, force kill (SIGKILL)
echo "⚡ Force killing stubborn process..."
kill -9 $PID 2>/dev/null

# Verify port is free
sleep 0.5
if lsof -ti:$PORT > /dev/null 2>&1; then
  echo "❌ Failed to free port $PORT"
  exit 1
else
  echo "✅ Port $PORT freed successfully"
  exit 0
fi
