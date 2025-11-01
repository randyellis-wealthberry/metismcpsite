"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface BentoItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  feature: {
    title: string;
    description: string;
    icon: LucideIcon;
  } | null;
}

export function BentoItemModal({
  isOpen,
  onClose,
  feature,
}: BentoItemModalProps) {
  // ESC key listener
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Don't render if feature is null
  if (!feature) {
    return null;
  }

  const FeatureIcon = feature.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          data-testid="modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            data-testid="bento-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            className="relative w-full max-w-2xl rounded-2xl bg-white p-8 shadow-2xl dark:bg-gray-900"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              data-testid="modal-close-button"
              onClick={onClose}
              autoFocus
              className="absolute right-4 top-4 rounded-full p-2 text-gray-500 transition-all hover:scale-110 hover:bg-gray-100 hover:text-gray-900 hover:shadow-lg dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Icon Display */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
              <FeatureIcon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            </div>

            {/* Title */}
            <h2
              id="modal-title"
              className="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-white"
            >
              {feature.title}
            </h2>

            {/* Description */}
            <p
              id="modal-description"
              className="text-center text-lg leading-relaxed text-gray-600 dark:text-gray-300"
            >
              {feature.description}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
