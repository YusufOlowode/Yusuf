"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowRight } from "react-icons/hi";
import Eachproject from './Eachproject';
import { useRouter } from 'next/navigation';

const Projects = () => {
    const router = useRouter();
    return (
        <section className="py-12 lg:py-20 px-6 md:px-26 lg:px-42 bg-[#FAFAFA]">
            <div className="mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:tracking-[-2.5] tracking-[-1.2] text-[20px] md:text-[30px] xl:text-[40px] font-[700] text-[#111827] leading-tight max-w-[220px] md:max-w-md"
                    >
                        Selected Work and Case Studies
                    </motion.h2>
                    <motion.button
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        onClick={() => router.push('/projects')}
                        className="group hidden md:flex items-center gap-2 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[13px] font-[600] text-[#111827]"
                    >
                        See more projects <HiOutlineArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.button>
                </div>
                <Eachproject limit={4} />
                <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    onClick={() => router.push('/projects')}
                    className="group md:hidden flex items-center gap-2 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[13px] font-[600] text-[#111827] mt-8 md:mt-0 cursor-pointer"
                >
                    See more projects <HiOutlineArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
            </div>
        </section>
    );
};

export default Projects;
