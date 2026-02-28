"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
// Assuming FaFigma might be needed based on previous context, keep import if used by Marquee internally
// import { FaFigma } from "react-icons/fa";
import { DiIllustrator } from "react-icons/di";
import Marquee from './Marquee' // Verify path
import { Photoshop, Linear, Framer, Coreldraw, Adobexd, Notion } from "./SvgLogo";
import { FaFigma } from "react-icons/fa6";

export default function PreFooter() {


  const row2 = [
    { text: "Figma", icon: <FaFigma /> },
    { text: "Photoshop", icon: <Photoshop /> },

    { text: "Linear", icon: <Linear /> },
    { text: "Framer", icon: <Framer /> },
    { text: "Coreldraw", icon: <Coreldraw /> },
    { text: "Adobe XD", icon: <Adobexd /> },
    { text: "Notion", icon: <Notion /> },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      className="py-8 md:py-12 px-6 md:px-26 lg:px-42 bg-[#111827]"
    >
      {/* Title section (unchanged) */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="tracking-[-.8] md:tracking-[-2] text-[19px] md:text-[28px] xl:text-[38px] font-[600] w-fit py-2 mb-4 md:mb-8 font-semibold text-white md:mx-auto">
          Tools behind the work
        </h2>
      </motion.div>

      {/* --- Container for Marquees: ADD MASK HERE --- */}
      <motion.div
        className="relative w-full overflow-hidden
                   [mask-image:linear-gradient(to_right,transparent_0%,black_2%,black_98%,transparent_100%)]
                   [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_2%,black_98%,transparent_100%)]"
        // Removed mb-4 md:mb-8 from h2, adjusted padding/margin if needed here or on Marquee items
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.8 }}
      >
        {/* REMOVED the placeholder div: <div className="pointer-events-none ..."></div> */}


        {/* Marquee Row 2 (unchanged) */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Marquee items={row2} speed="slow" direction="left" />
        </motion.div>
      </motion.div>
      {/* --- End of Marquee Container --- */}

    </motion.div>
  );
}