"use client";
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaBehanceSquare } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
    return (
        <footer id="contact" className="w-full bg-[#0F172A] text-white">
            <div className="flex flex-col items-center justify-center py-14 md:py-20 text-center">
                {/* Heading */}
                <h2 className="md:tracking-[-1.2] tracking-[-0.6] text-center text-[18px] md:text-[27px] xl:text-[37px] font-[600] mb-8">
                    Let's turn ideas into clear, <br className="sm:hidden" /> meaningful experiences
                </h2>

                {/* Get in touch Button */}
                <Link
                    href="mailto:yusufolowode12@gmail.com"
                    className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-[8px] text-[14px] md:text-[16px] font-light hover:bg-white hover:text-[#0F172A] transition-all duration-300 mb-12"
                >
                    Get in touch <IoArrowForwardOutline />
                </Link>

                {/* Social Icons */}
                <div className="flex items-center gap-4 mb-16">
                    <Link href="mailto:yusufolowode12@gmail.com" className="w-10 h-10 flex items-center justify-center border rounded-[6px] text-white border-[#374564] transition-all">
                        <IoMdMail size={18} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/yusuf-olowode" className="w-10 h-10 flex items-center justify-center border rounded-[6px] text-white border-[#374564] transition-all">
                        <FaLinkedin size={18} />
                    </Link>
                    <Link href="https://www.behance.net/yusufolowode" className="w-10 h-10 flex items-center justify-center border rounded-[6px] text-white border-[#374564] transition-all">
                        <FaBehanceSquare size={18} />
                    </Link>
                    <Link href="https://x.com/yusuf_olowode" className="w-10 h-10 flex items-center justify-center border rounded-[6px] text-white border-[#374564] transition-all">
                        <BsTwitterX size={18} />
                    </Link>
                </div>

                {/* Divider Line */}
                <div className="w-full max-w-5xl h-[1px] bg-white/10 mb-8"></div>

                {/* Copyright */}
                <p className="text-[#94A3B8] text-[13px] md:text-[14px] font-light">
                    Copyright © 2026 Yusuf Olowode
                </p>
            </div>
        </footer>
    );
};

export default Footer;
