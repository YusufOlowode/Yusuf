"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { SplashLogo } from "./SvgLogo";
import Progress from "./Progress";

interface SplashScreenProps {
    finishLoading: () => void;
}

const SplashScreen = ({ finishLoading }: SplashScreenProps) => {
    useEffect(() => {
        // Prevent scrolling while splash is active
        document.body.style.overflow = "hidden";

        const timeout = setTimeout(() => {
            finishLoading();
        }, 2500); // 2.5 seconds duration

        return () => {
            clearTimeout(timeout);
            // Re-enable scrolling when splash is done
            document.body.style.overflow = "unset";
        };
    }, [finishLoading]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-[#FAFAFF] touch-none overflow-hidden w-full h-full"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1]
                }}
                className="flex flex-col gap-10 items-center w-full max-w-[180px] md:max-w-[300px] px-4"
            >
                <div className="w-full h-auto">
                    <SplashLogo />
                </div>
                <Progress
                    percentage={100}
                    label="Loading..."
                    color="green"
                    animationDuration={2000}
                    barCount={30}
                />
            </motion.div>

        </motion.div>
    );
};

export default SplashScreen;
