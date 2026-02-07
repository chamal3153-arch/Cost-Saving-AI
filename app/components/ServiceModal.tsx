"use client";

import { useEffect } from "react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  category: string;
  benefits?: string[];
  features?: string[];
  useCases?: string[];
}

export default function ServiceModal({
  isOpen,
  onClose,
  title,
  description,
  category,
  benefits = [],
  features = [],
  useCases = [],
}: ServiceModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              {category}
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {description}
          </p>

          {features.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Key Features</h4>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {benefits.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Benefits</h4>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {useCases.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Use Cases</h4>
              <ul className="space-y-2">
                {useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <span className="text-gray-700">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Ready to get started? Let's discuss your needs.
          </p>
          <a
            href="https://calendly.com/chamal-3153/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
