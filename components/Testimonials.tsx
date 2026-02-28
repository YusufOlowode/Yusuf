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
import Image from 'next/image';
import Ayo from '@/public/brand/ayo.png'
import Mustapha from '@/public/brand/mustapha.png'
import Saad from '@/public/brand/saad.png'
const testimonials = [
    {
        id: 1,
        quote: "\"Wow! This is beautiful.\" Those were the words of a senior colleague after reviewing the first project I and Yusuf worked on. Yusuf understands what the users want and how to achieve what they want. He does research and brings ideas out of the box.",
        quote2: "If you need an experienced product designer who knows his onions, I STRONGLY RECOMMEND YUSUF.",
        name: "Mustapha Tijani",
        role: "Full Stack Developer",
        image: Mustapha
    },
    {
        id: 2,
        quote: "Yusuf is a detail-oriented product designer. He's timely and highly dependable, consistently delivering quality work without compromise.",
        quote2: "Yusuf has a strong grasp of modern design principles and applies them with clear intent, balancing aesthetics, usability, and real user needs. Working with Yusuf made the product better and the design process smoother, and I genuinely value his contribution to the team.",
        name: "Ayomide Olupitan",
        role: "Co-Founder, Loma Bank",
        image: Ayo
    },
    {
        id: 3,
        quote: "I've had the pleasure of working with Yusuf on multiple projects, and he never ceases to amaze me. His ability to translate complex requirements into intuitive designs is unparalleled.",
        quote2: "He is a true professional who is always willing to go the extra mile to ensure the success of the project.",
        name: "Saad Bashar",
        role: "Product Designer",
        image: Saad
    }
];

const Testimonials = () => {
    return (
        <section className="py-12 md:py-20 px-6 md:px-26 lg:px-42 bg-[#FCFCFF]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-4 md:mb-8 flex justify-start md:justify-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:tracking-[-2.5] tracking-[-.8] text-[20px] md:text-[30px] xl:text-[40px] font-[700] text-[#111827] leading-tight text-[#111827] text-center"
                    >
                        From People I&apos;ve Worked With
                    </motion.h2>
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
                            {testimonials.map((item, index) => (
                                <CarouselItem key={item.id} className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/2">
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="h-full bg-white p-3 md:p-6 rounded-[8px] border-[1px] border-[#EFEFEF] flex flex-col justify-between min-h-[300px]"
                                    >
                                        <div>
                                            <p className="text-[#4B5563] leading-relaxed mb-4 text-[12px] md:text-[14px] xl:text-[16px]">
                                                {item.quote}
                                            </p>
                                            {item.quote2 && (
                                                <p className="text-[#4B5563] leading-relaxed text-[12px] md:text-[14px] xl:text-[16px]">
                                                    {item.quote2}
                                                </p>
                                            )}
                                        </div>

                                        <div className="flex items-center md:gap-4 gap-2 mt-2 md:mt-4">
                                            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="text-[#111827] font-bold xl:text-[24px] lg:text-[20px] md:text-[18px] text-[16px] leading-tight">
                                                    {item.name}
                                                </h4>
                                                <p className="text-[#6B7280] xl:text-[16px] lg:text-[14px] md:text-[12px] text-[10px]">
                                                    {item.role}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Custom Styled Navigation Buttons */}
                        <div className="flex justify-end gap-3 mt-12 md:mt-8">
                            <CarouselPrevious className="static translate-y-0 h-10 w-12 rounded-[4px] bg-[#D1D5DB] text-[#4B5563] border-none hover:bg-[#9CA3AF] hover:text-[#4B5563] disabled:opacity-50 disabled:cursor-not-allowed" />
                            <CarouselNext className="static translate-y-0 h-10 w-12 rounded-[4px] bg-[#111827] text-white border-none hover:bg-black hover:text-white disabled:opacity-50 disabled:cursor-not-allowed" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
