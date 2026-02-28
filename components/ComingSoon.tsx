"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ComingSoonProps {
    isOpen: boolean;
    onClose: () => void;
    liveLink?: string;
}

const ComingSoon = ({ isOpen, onClose, liveLink }: ComingSoonProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 md:px-12 md:py-10 text-center z-10"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex justify-center mb-6">
                            <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Top Bar */}
                                <rect x="16" y="8" width="32" height="4" rx="2" fill="#374151" />
                                {/* Bottom Bar */}
                                <rect x="16" y="52" width="32" height="4" rx="2" fill="#374151" />
                                {/* Glass Outline */}
                                <path d="M20 12L20 16C20 22 24 28 32 32C40 28 44 22 44 16V12" stroke="#374151" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M44 52V48C44 42 40 36 32 32C24 36 20 42 20 48V52" stroke="#374151" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                {/* Teal Sand Top */}
                                <path d="M24 16H40L32 28L24 16Z" fill="#2DD4BF" opacity="0.9" />
                                {/* Teal Sand Bottom */}
                                <path d="M24 48H40L32 36L24 48Z" fill="#2DD4BF" opacity="0.9" />
                            </svg>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                            Case Studies in Progress
                        </h2>

                        <p className="text-[#6B7280] text-sm md:text-[15px] leading-relaxed mb-8">
                            I'm currently refining in-depth case studies that break down my
                            design thinking, decisions, and impact. While they're being
                            finalized, you can explore live projects to see the work in action.
                        </p>

                        {liveLink ? (
                            <a
                                href={liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-[#1F1F1F] text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-black transition-colors"
                            >
                                View live project
                            </a>
                        ) : (
                            <button
                                onClick={onClose}
                                className="inline-block bg-[#1F1F1F] text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-black transition-colors"
                            >
                                Close
                            </button>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default ComingSoon;