"use client";
import React from "react";
import Image from "next/image";
import { HiOutlineDocumentText } from "react-icons/hi";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

// Import images
import First from '@/public/about/first.png'
import Second from '@/public/about/sec.png'
import Third from '@/public/about/third.png'
import One from '@/public/about/one.png'
import Two from '@/public/about/two.png'
import Three from '@/public/about/three.png'
import Four from '@/public/about/four.png'
import Five from '@/public/about/five.png'
import Six from '@/public/about/six.png'
import Seven from '@/public/about/seven.png'
import Eight from '@/public/about/eight.png'
import Nine from '@/public/about/nine.png'
import Ten from '@/public/about/ten.png'
import Eleven from '@/public/about/eleven.png'
import Twelve from '@/public/about/twelve.png'
import Thirteen from '@/public/about/thirteen.png'
import Fourteen from '@/public/about/fourteen.png'
import Fifteen from '@/public/about/fifteen.png'

export default function About() {
    // Hero cards data with different heights
    const heroCards = [
        {
            image: First,
            title: "Design Foundations",
            description: "My journey started with curiosity, collaboration, and learning through real problems.",
            height: "h-[280px] md:h-[431px]"
        },
        {
            image: Second,
            title: "Designing with Structure",
            description: "That smile you make when chaos turns into structure and the design finally breathes.",
            height: "h-[240px] md:h-[365px]"
        },
        {
            image: Third,
            title: "MPhil at Cambridge",
            description: "Two lenses - Where academic insight and design thinking come together to solve problems and shape future possibilities.",
            height: "h-[320px] md:h-[557px]"
        }
    ];

    // Sample nature photos - replace with actual images
    // Nature photos from local assets
    // Nature photos from local assets
    const naturePhotos = [
        One,
        Two,
        Three,
        Four,
        Five,
        Six,
        Seven,
        Eight,
        Nine,
        Ten,
        Eleven,
        Twelve,
        Thirteen,
        Fourteen,
        Fifteen,
    ];

    const snapshots = [
        "/snapshots/DigiSpray.png",
        "/snapshots/Filmland.png",
        "/snapshots/Gmf.png",
        "/snapshots/KaiFinance.png",
        "/snapshots/Pryme.png",
        "/snapshots/Sqwads.png",
        "/snapshots/Surba.png",
        "/snapshots/Timzoid.png",
        "/snapshots/Timzoid2.png",
        "/snapshots/Titelo.png",
        "/snapshots/WESONLINE_1.png",
        "/snapshots/WHATSAPP_1.png",
    ];

    // Infinite Scroll & Drag Logic
    const containerRef = React.useRef<HTMLDivElement>(null);
    const contentRef = React.useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const [isDragging, setIsDragging] = React.useState(false);
    const [contentWidth, setContentWidth] = React.useState(0);

    // Measure content width for seamless looping
    const updateWidth = React.useCallback(() => {
        if (contentRef.current) {
            // Measure the total width of the moving container
            // Since it contains two identical sets, half of this is our loop point
            const totalWidth = contentRef.current.scrollWidth;
            if (totalWidth > 0) {
                setContentWidth(totalWidth / 2);
            }
        }
    }, []);

    React.useEffect(() => {
        // Initial update
        updateWidth();

        // Robust sizing using ResizeObserver on the CONTENT, not the container
        // This triggers when images load and expand the flex container
        const observer = new ResizeObserver(() => {
            updateWidth();
        });

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        window.addEventListener('resize', updateWidth);
        // Fallback: check multiple times during initial load
        const timer = setInterval(updateWidth, 1000);

        return () => {
            window.removeEventListener('resize', updateWidth);
            observer.disconnect();
            clearInterval(timer);
        };
    }, [updateWidth]);

    // Animation Loop
    useAnimationFrame((time, delta) => {
        // Pause auto-scroll while user is dragging
        if (isDragging || contentWidth === 0) return;

        // Speed: ~50px/sec (0.05px/ms)
        const speed = 0.05;
        let moveBy = -speed * delta;

        let newX = x.get() + moveBy;

        // Seamless Loop Logic:
        // If we've scrolled past the first set (negative x), wrap back to 0
        if (newX <= -contentWidth) {
            newX += contentWidth; // Jump back to start position (invisible change)
        }

        x.set(newX);
    });

    // Manual Drag Logic
    const handlePan = (e: any, info: any) => {
        let newX = x.get() + info.delta.x;

        // Maintain loop boundary during drag
        if (contentWidth > 0) {
            if (newX <= -contentWidth) newX += contentWidth;
            if (newX > 0) newX -= contentWidth;
        }

        x.set(newX);
    };



    return (
        <main className="bg-[#F4F3FF] min-h-screen">
            {/* Hero Section */}
            <div className="pt-[8rem] pb-12 px-6 md:px-26 lg:px-42">
                <div className="max-w-[1440px] mx-auto">
                    {/* Header Section */}
                    <section className="animate-[fade-in-up_0.8s_ease-out_forwards] relative z-30">
                        <span className="block text-[#26262699] text-[28px] md:text-[36px] xl:text-[60px] font-[200] tracking-[-2]">
                            Hello there!
                        </span>
                        <h1 className="text-[#262626] text-[30px] md:text-[40px] xl:text-[60px] font-bold leading-tight mb-2 tracking-[-2]">
                            I'm Yusuf Olowode
                        </h1>

                        <div className="max-w-3xl text-[#4B5563] text-[12px] md:text-[14px] xl:text-[18px] leading-relaxed mb-5">
                            <p className="">
                                I'm a Product Designer who enjoys turning complex ideas into clear, usable systems. <br className="hidden md:block" />
                                I design thoughtful digital products grounded in research, structure, and empathy.
                            </p>

                        </div>

                        <a
                            href="https://docs.google.com/document/d/1vG37WOFFClvHkH9Yn27wtLCMRpXs7apaaPT9dxMvxIY/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 md:gap-3 bg-[#111827] text-white px-3 md:px-6 py-3 rounded-[4px] text-[12px] md:text-[14px] xl:text-[18px] font-medium hover:bg-gray-800 transition-colors relative z-[50] pointer-events-auto cursor-pointer"
                        >
                            Download Resume <HiOutlineDocumentText className="text-lg" />
                        </a>
                    </section>

                    {/* Three Image Cards */}
                    <section className="mt-10 md:-mt-14 flex flex-col md:flex-row md:items-end gap-4 mb-12 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards] opacity-0 relative z-10">
                        {heroCards.map((card, index) => (
                            <div key={index} className={`relative ${card.height} w-full md:flex-1 rounded-[4px] overflow-hidden group`}>
                                <div className="absolute inset-0 bg-gray-300">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                {/* First card has text at top with dark overlay, others at bottom */}
                                <div className={`absolute inset-0 ${index === 0
                                    ? 'bg-gradient-to-b from-black/100 via-black/40 to-transparent'
                                    : 'bg-gradient-to-t from-black/100 via-black/30 to-transparent'
                                    } flex flex-col ${index === 0 ? 'justify-start' : 'justify-end'} p-4 md:p-6`}>
                                    <h3 className="text-white text-base font-bold mb-2">{card.title}</h3>
                                    <p className="text-gray-300 text-xs leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </div>

            {/* Dark Banner */}
            <div className="bg-[#111827] py-8 md:py-12 mb-12">
                <div className="max-w-[1440px] mx-auto px-6 md:px-26 lg:px-42">
                    <h2 className="text-white text-[20px] md:text-[28px] font-light text-center tracking-wide">
                        MAKE YOURSELF AT HOME AND EXPLORE MY GALLERY...
                    </h2>
                </div>
            </div>

            {/* Work Snapshots Section */}
            <div className="px-6 md:px-26 lg:px-42 mb-16">
                <div className="max-w-[1440px] mx-auto">
                    <h3 className="text-[#0a2540] text-[18px] md:text-[22px] font-normal mb-6 font-[600]">
                        Selected snapshots from my work
                    </h3>
                    {/* Infinite Scroll Container */}
                    <div className="flex overflow-hidden w-full relative cursor-grab active:cursor-grabbing" ref={containerRef}>
                        <motion.div
                            ref={contentRef}
                            className="flex"
                            style={{ x }}
                            onPanStart={() => setIsDragging(true)}
                            onPanEnd={() => setIsDragging(false)}
                            onPan={handlePan}
                        >
                            {/* First Set */}
                            <div className="flex gap-7 pr-7 min-w-max">
                                {snapshots.map((src, index) => (
                                    <div key={`set1-${index}`} className="relative h-[200px] md:h-[280px] flex-shrink-0 rounded-[8px] overflow-hidden select-none">
                                        <Image
                                            src={src}
                                            alt={`Work sample ${index + 1}`}
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: 'auto', height: '100%' }}
                                            className="object-contain pointer-events-none" // prevent image drag ghosting
                                            onLoad={updateWidth}
                                            priority={index < 4}
                                        />
                                    </div>
                                ))}
                            </div>
                            {/* Second Set (Duplicate) */}
                            <div className="flex gap-7 pr-7 min-w-max">
                                {snapshots.map((src, index) => (
                                    <div key={`set2-${index}`} className="relative h-[200px] md:h-[280px] flex-shrink-0 rounded-[8px] overflow-hidden select-none">
                                        <Image
                                            src={src}
                                            alt={`Work sample ${index + 1}`}
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: 'auto', height: '100%' }}
                                            className="object-contain pointer-events-none"
                                            onLoad={updateWidth}
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Nature & Photography Section */}
            <div className="px-6 md:px-26 lg:px-42 pb-16">
                <div className="max-w-[1440px] mx-auto">
                    <h3 className="text-[#0a2540] text-[22px] md:text-[24px] font-normal mb-2 font-[600]">
                        Nature & Photography
                    </h3>
                    <p className="text-[#4B5563] text-[14px] md:text-[16px] mb-6">
                        I take nature photos for fun. It helps me slow down and observe details.
                    </p>

                    {/* Photo Grid */}
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-5">
                        {naturePhotos.map((photo, index) => (
                            <div
                                key={index}
                                className="relative aspect-square rounded-[3.6px] overflow-hidden hover:scale-105 transition-transform duration-300"
                            >
                                <Image
                                    src={photo}
                                    alt={`Nature photo ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};