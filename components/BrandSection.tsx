// File: @/components/homepage/HeroSection.tsx

"use client";

// Import the Image component from next/image
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
    motion,
    AnimatePresence,
    useAnimation,
    useInView,
} from "framer-motion";

import DigiSpray from "../public/brand/Digispray.png";
import Gmf from "../public/brand/Gmf.png";
import Jointly from "../public/brand/Jointly.png";
import KaiFinance from "../public/brand/Kaifinance.png";
import Pryme from "../public/brand/Pryme.png";
import SQWADS from "../public/brand/Sqwads.png";
import Timzoid from "../public/brand/Timzoid.png";
import Wesonline from "../public/brand/Wesonline.png";



interface BrandSectionProps {
    scrollToSection?: (section: string) => void;
}

export default function BrandSection({ scrollToSection }: BrandSectionProps) {

    // --- Image Logo Data Setup ---
    const brandImages = [DigiSpray, Gmf, Jointly, KaiFinance, Pryme, SQWADS, Timzoid, Wesonline];
    // *** Create a much longer array for robust marquee looping ***
    // Repeat the original set 6 times, similar to the Marquee component example
    const extendedBrandImages = Array(6).fill(brandImages).flat();


    // Scroll animation setup for brand section
    const brandRef = useRef(null);
    const brandInView = useInView(brandRef, { once: true, amount: 0.2 });
    const brandControls = useAnimation();

    useEffect(() => {
        if (brandInView) {
            brandControls.start("visible");
        }
    }, [brandInView, brandControls]);

    const handleScrollToProjects = () => {
        scrollToSection?.("project");
    };

    // Define variants for the static logo container and items (Unchanged)
    const staticContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
        },
    };

    const staticLogoVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const
            }
        },
    };


    return (
        // --- Outer Div (Unchanged) ---
        <div className="space-y-5 px-6 lg:px-[130px] py-10 md:py-16 bg-[#FCFCFF]">
            {/* Title (Unchanged) */}
            <motion.h1
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="tracking-[-1] text-[16px] sm:text-[20px] mb-8 text-[#111827] lg:text-[24px] xl:text-[28px] text-center"
            >
                Selected clients and collaborators
            </motion.h1>

            {/* --- Image Marquee Layout (Always visible and animating) --- */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full overflow-hidden relative
                     [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]
                     [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]"
            >
                {/* Animated container using framer-motion */}
                <motion.div
                    className="flex w-max"
                    animate={{ x: ['0%', '-16.666%'] }}
                    transition={{
                        ease: 'linear',
                        duration: 40, // Slightly slower for a more premium feel on larger screens
                        repeat: Infinity,
                    }}
                >
                    {/* Map over the EXTENDED (6x repeated) image sources */}
                    {extendedBrandImages.map((imageSrc, i) => {
                        // Check if this is the Wesonline image
                        const isWesonline = imageSrc === Wesonline;
                        const imageHeight = isWesonline ? '40px' : '26px';

                        return (
                            <div
                                key={`marquee-img-${i}`}
                                className="flex-shrink-0 xl:px-12 lg:px-10 px-6 flex items-center justify-center h-[50px] md:h-[60px]"
                            >
                                <Image
                                    src={imageSrc}
                                    alt={`Brand logo scroll ${i + 1}`}
                                    height={100}
                                    width={0}
                                    style={{ width: 'auto', height: imageHeight, objectFit: 'contain' }}
                                    className="transition-all opacity-80 hover:opacity-100"
                                />
                            </div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div >

    );
}