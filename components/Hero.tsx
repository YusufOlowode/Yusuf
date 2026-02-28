"use client";
import { HiOutlineArrowRight } from "react-icons/hi";
import Link from "next/link";
import AnimateText from "./AnimateText";

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center mt-[5rem] md:mt-[2rem] lg:mt-[1rem] px-6 md:px-26 lg:px-42 text-center bg-[#F4F3FF] py-32 md:py-40">
            <div className="mx-auto flex flex-col items-center gap-[16px]">
                {/* Badge */}
                <div className="inline-flex items-center px-6 py-2 rounded-[6px] border border-[#E5E7EB] animate-[fade-in-up_0.8s_ease-out_forwards]">
                    <span className="text-[10px] md:text-[16px] font-[400] tracking-[0] text-[#4B5563] uppercase flex items-center gap-2">
                        Product Designer <span className="text-[#9CA3AF] font-[400]">•</span> Brand Designer
                    </span>
                </div>

                {/* Heading */}
                <AnimateText
                    line1="Digital Product Designer"
                    line2="Turning Complexity into Clarity"
                />

                {/* Subtitle */}
                <p className="w-full text-[#4B5563] text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] mx-auto xl:leading-[34px] lg:leading-[28px] md:leading-[24px] sm:leading-[20px] mb-4 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.4s_forwards] lg:max-w-[650px] xl:max-w-[800px]">
                    I help start-ups and businesses design scalable, user-centered products, rooted in research, systems thinking, and clarity.
                </p>

                {/* CTA Button */}
                <Link href="/projects" className="flex items-center text-[12px] md:text-[14px] gap-2 md:px-8 md:py-4 px-6 py-4 bg-[#111827] hover:bg-[#273241] text-white rounded-[4px] font-medium transition-all active:scale-95 group opacity-0 animate-[fade-in_1s_ease-out_0.6s_forwards]">
                    View Selected Work <HiOutlineArrowRight className="font-bold" />
                </Link>
            </div>
        </section>
    );
};

export default Hero;
