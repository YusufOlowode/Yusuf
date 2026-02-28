"use client";
import React, { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";
import { AnimatePresence } from "framer-motion";
import { SplashProvider } from "@/context/SplashContext";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Small delay to ensure smooth transition after splash
        if (!isLoading) {
            const timer = setTimeout(() => setShowContent(true), 100);
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <SplashScreen key="splash" finishLoading={() => setIsLoading(false)} />
                )}
            </AnimatePresence>

            <SplashProvider splashDone={showContent}>
                <div
                    className={`transition-opacity duration-700 ${showContent
                        ? "opacity-100 h-auto overflow-visible"
                        : "opacity-0 h-screen overflow-hidden fixed inset-0 pointer-events-none"}`}
                >
                    {children}
                </div>
            </SplashProvider>
        </>
    );
}

