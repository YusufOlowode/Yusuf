"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const approaches = [
    {
        id: 1,
        title: "Research",
        description: "I take time to understand the problem by learning from users, studying the space, and asking the right questions.",
        number: "01"
    },
    {
        id: 2,
        title: "Define & Ideate",
        description: "I make sense of what I've learned, define the core problem, and explore ideas that truly make sense for users and the business.",
        number: "02"
    },
    {
        id: 3,
        title: "Design & Prototype",
        description: "I turn ideas into clear, usable designs and interactive prototypes that help everyone see where the product is heading.",
        number: "03"
    },
    {
        id: 4,
        title: "Test & Iterate",
        description: "I test, refine, and improve the design based on feedback until it feels right and works as intended.",
        number: "04"
    },

];

const DesignApproach = () => {
    return (
        <section className="py-12 lg:py-18 px-6 md:px-26 lg:px-42 bg-[#FCFCFF]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-[16px]">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:tracking-[-2.5] tracking-[-1.2] text-[20px] md:text-[30px] xl:text-[40px] font-[700] text-[#111827] leading-tight mb-3"
                    >
                        My Approach to Design
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[#4B5563] xl:text-[16px] font-[400] lg:text-[14px] md:text-[13px] text-[12px]"
                    >
                        I design user-centered digital experiences that balance business goals, functionality, and delight.
                    </motion.p>
                </div>

                {/* Shadcn Carousel */}
                <div className="relative">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: false,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4 md:-ml-8">
                            {approaches.map((item, index) => (
                                <CarouselItem key={item.id} className="pl-4 md:pl-8 basis-[85%] md:basis-[45%] lg:basis-[30%] mt-6">
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="h-full bg-white p-6 rounded-[8px] border border-[#CDCDCD33] relative overflow-hidden group flex flex-col min-h-[180px] transition-all duration-[700ms] ease-out hover:border-[#E6E7FF] hover:shadow-xl hover:shadow-[#E6E7FF]/30"
                                    >
                                        {/* Smooth Gradient Overlay */}
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#FBF8FF_0%,_#E6E7FF_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-[700ms] ease-out pointer-events-none" />

                                        <div className="relative z-10 flex-1">
                                            <h3 className="text-[20px] lg:text-[22px] xl:text-[24px] font-[500] text-[#111827] mb-4">{item.title}</h3>
                                            <p className="text-[#4B5563] text-[11px] lg:text-[13px] xl:text-[15px] leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>

                                        {/* Background Number */}
                                        <p
                                            style={{ transitionDelay: '300ms' }}
                                            className="absolute -bottom-9 right-2 text-[90px] font-medium leading-none bg-linear-to-t from-[#1A1A1A] to-transparent inline-block text-transparent bg-clip-text transition-opacity duration-700 opacity-40 group-hover:opacity-60 select-none pointer-events-none z-10"
                                        >
                                            {item.number}
                                        </p>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Custom Styled Navigation Buttons */}
                        <div className="flex justify-end gap-3 mt-12 md:static md:mt-8">
                            <CarouselPrevious className="static translate-y-0 h-10 w-12 rounded-[4px] bg-[#D1D5DB] text-[#4B5563] border-none hover:bg-[#9CA3AF] hover:text-[#4B5563] disabled:opacity-50 disabled:cursor-not-allowed" />
                            <CarouselNext className="static translate-y-0 h-10 w-12 rounded-[4px] bg-[#111827] text-white border-none hover:bg-black hover:text-white disabled:opacity-50 disabled:cursor-not-allowed" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default DesignApproach;
