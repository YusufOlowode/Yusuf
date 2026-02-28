"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaBehanceSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Logo, DocumentIcon } from "./SvgLogo";
import { motion, useScroll } from "framer-motion";

const navlinks = [
  {
    id: 1,
    text: "Projects",
    link: "/projects",
  },
  {
    id: 2,
    text: "About",
    link: "/about",
  },
  {
    id: 3,
    text: "Contact",
    link: "/#contact",
  },
  {
    id: 4,
    text: "Resume",
    link: "https://docs.google.com/document/d/1vG37WOFFClvHkH9Yn27wtLCMRpXs7apaaPT9dxMvxIY/edit?usp=sharing",
  },
];

export const Sidebar = ({
  isOpen,
  setOpenNav,
  onContactClick,
}: {
  isOpen: boolean;
  setOpenNav: (open: boolean) => void;
  onContactClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
  // Filter out Resume from main links to display it separately
  const mainLinks = navlinks.filter((link) => link.text !== "Resume");
  const resumeLink = navlinks.find((link) => link.text === "Resume");

  return (
    <div
      className={`fixed inset-0 z-[60] bg-[#F8F9FC] transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex flex-col h-full px-6 py-6 md:px-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <div onClick={() => setOpenNav(false)}>
            <Logo className="w-[80px] h-auto" />
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-8 mb-auto">
          {mainLinks.map((item) => (
            <li key={item.id} className="text-[#4B5563]">
              {item.text === "Contact" ? (
                <a
                  onClick={(e) => {
                    onContactClick(e);
                    setOpenNav(false);
                  }}
                  className="text-[32px] sm:text-[40px] font-medium hover:text-[#111827] transition-colors cursor-pointer"
                  href="/#contact"
                >
                  {item.text}
                </a>
              ) : (
                <Link
                  onClick={() => setOpenNav(false)}
                  className="text-[32px] sm:text-[40px] font-medium hover:text-[#111827] transition-colors"
                  href={item.link}
                >
                  {item.text}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Footer Section */}
        <div className="flex flex-col gap-6 mt-10 mb-8">
          {/* Resume Button */}
          {resumeLink && (
            <a
              href="https://docs.google.com/document/d/1vG37WOFFClvHkH9Yn27wtLCMRpXs7apaaPT9dxMvxIY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111827] text-white flex items-center justify-between px-6 py-4 rounded-[4px] w-[196px] hover:bg-opacity-90 transition-opacity relative z-[70] pointer-events-auto cursor-pointer"
            >
              <span className="text-[13px] tracking-[0]">Download Resume</span>
              <DocumentIcon />
            </a>
          )}

          {/* Social Icons */}
          <div className="flex items-center gap-4 mb-16">
            <Link
              href="https://mailto:yusufolowode12@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[32px] h-[32px] flex items-center justify-center border rounded-[4px] text-[#374564] border-[#374564] transition-all"
            >
              <IoMdMail size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/yusuf-olowode"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[32px] h-[32px] flex items-center justify-center border rounded-[4px] text-[#374564] border-[#374564] transition-all"
            >
              <FaLinkedin size={18} />
            </Link>
            <Link
              href="https://www.behance.net/yusufolowode"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[32px] h-[32px] flex items-center justify-center border rounded-[4px] text-[#374564] border-[#374564] transition-all"
            >
              <FaBehanceSquare size={18} />
            </Link>
            <Link
              href="https://x.com/yusuf_olowode"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[32px] h-[32px] flex items-center justify-center border rounded-[4px] text-[#374564] border-[#374564] transition-all"
            >
              <BsTwitterX size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isProjectPage = pathname?.startsWith("/projects/") && pathname !== "/projects";
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
      setOpenNav(false);
    }
  };

  const ToggleMenu = () => {
    setOpenNav(!openNav);
  };

  return (
    <div className="">
      <nav
        className={`z-50 h-[5rem] flex items-center justify-between py-6 px-6 md:px-26 lg:px-42 fixed top-0 w-full transition-all shadow-xs duration-300 ${scrolled || isProjectPage ? "bg-[#fff]" : "bg-[#F4F3FF]"
          }`}
      >
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="w-[80px] h-auto md:w-[100px]" />
          </Link>
        </div>

        {/* Centered Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navlinks.map((item, index) => (
            <li className="relative text-[16px] text-[#4B5563]" key={index}>
              {item.text === "Contact" ? (
                <a
                  onClick={handleContactClick}
                  className={`eachlink text-[#4B5563] transition-colors duration-300 text-[#0a2540] cursor-pointer`}
                  href="/#contact"
                >
                  {item.text}
                </a>
              ) : (
                item.id === 4 ? (
                  <a
                    className={`${item.id === 4 ? "bg-[#1118271A] p-2 rounded-[4px] px-4" : ""} eachlink text-[#4B5563] transition-colors duration-300 ${pathname === item.link ? "text-[#0a2540]" : "text-[#0a2540]"} relative z-[50] pointer-events-auto cursor-pointer`}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.text}
                  </a>
                ) : (
                  <Link
                    className={`${item.id === 4 ? "bg-[#1118271A] p-2 rounded-[4px] px-4" : ""} eachlink text-[#4B5563] transition-colors duration-300 ${pathname === item.link ? "text-[#0a2540]" : "text-[#0a2540]"}`}
                    href={item.link}
                  >
                    {item.text}
                  </Link>
                )
              )}
            </li>
          ))}
        </ul>

        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#A8ABB3] origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      </nav>
      {/* Hamburger Menu */}
      <div
        className={`menu z-[70] fixed top-8 right-[2rem] md:hidden flex flex-col gap-[6px] cursor-pointer transition-all duration-300`}
        onClick={ToggleMenu}
        style={{ zIndex: 70 }}
      >
        <p
          className={`block w-6 h-[2px] bg-[#0a2540] transition-transform duration-500 ${openNav ? "rotate-45 translate-y-[8px] bg-[#0a2540]" : ""}`}
        ></p>
        <p
          className={`block w-6 h-[2px] bg-[#0a2540] transition-transform duration-500 ${openNav ? "opacity-0" : "opacity-100"}`}
        ></p>
        <p
          className={`block w-6 h-[2px] bg-[#0a2540] transition-transform duration-500 ${openNav ? "-rotate-45 -translate-y-[8px] bg-[#0a2540]" : ""}`}
        ></p>
      </div>

      <Sidebar
        isOpen={openNav}
        setOpenNav={setOpenNav}
        onContactClick={handleContactClick}
      />
      <div
        className={`${openNav ? "bg-transparent backdrop-blur-[10px] h-screen w-full fixed top-0 z-40" : "hidden"}`}
        onClick={() => setOpenNav(false)}
      ></div>
    </div>
  );
};

export default Navbar;
