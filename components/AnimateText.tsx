"use client";
import { motion } from "framer-motion";
import { useSplash } from "@/context/SplashContext";

interface AnimateTextProps {
    line1: string;
    line2: string;
}

const letterVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: (i: number) => ({
        opacity: 1,
        y: [200, -15, 10, 0],
        transition: {
            duration: 1.2,
            delay: i * 0.03,
            ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
        },
    }),
};

const dotVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: (totalChars: number) => ({
        opacity: 1,
        y: [-100, 0, -15, 0, -10, 0],
        transition: {
            duration: 0.8,
            delay: totalChars * 0.03 + 0.2,
            ease: "easeIn" as const,
        },
    }),
};

const AnimateText = ({ line1, line2 }: AnimateTextProps) => {
    const { splashDone } = useSplash();

    const line1Chars = line1.split("");
    const line2Chars = line2.split("");
    const totalChars = line1Chars.length + line2Chars.length;

    // Check if line2 ends with a period so we can animate the dot separately
    const endsWithDot = line2.endsWith(".");
    const line2CharsToAnimate = endsWithDot
        ? line2.slice(0, -1).split("")
        : line2Chars;

    return (
        <motion.h1
            className="tracking-[-1.8] px-6 sm:px-0 md:tracking-[-2.6] w-full text-[26px] sm:text-[30px] text-[#111827] md:text-[36px] lg:text-[48px] xl:text-[56px] font-[800] sm:leading-[40px] lg:leading-[60px] xl:leading-[80px] mb-4 lg:max-w-[700px] xl:max-w-[850px] mx-auto"
            initial="hidden"
            animate={splashDone ? "visible" : "hidden"}
        >
            {/* Line 1 */}
            {line1.split(" ").map((word, wIndex) => (
                <span key={`l1-w-${wIndex}`} className="inline-block whitespace-nowrap mr-[0.25em]">
                    {word.split("").map((char, cIndex) => {
                        // Calculate global index relative to all previous characters in the line
                        // We need a stable counter. 
                        // To avoid complex counting during render, let's just use the index variants can be simpler?
                        // Actually, the original used specific indices for stagger. 
                        // Let's keep the stagger logic simple or recalculate it.
                        return (
                            <motion.span
                                key={`l1-w${wIndex}-c${cIndex}`}
                                variants={letterVariants}
                                custom={line1.split(" ").slice(0, wIndex).join("").length + cIndex + wIndex} // Approximate index: previous chars + current word chars + spaces (wIndex)
                                style={{ display: "inline-block" }}
                            >
                                {char}
                            </motion.span>
                        );
                    })}
                </span>
            ))}

            <br />

            {/* Line 2 */}
            {line2.split(" ").map((word, wIndex) => {
                // Check for dot at the very end of the last word of line 2
                let wordChars = word.split("");
                let hasDot = false;
                if (wIndex === line2.split(" ").length - 1 && endsWithDot) {
                    wordChars = word.slice(0, -1).split("");
                    hasDot = true;
                }

                return (
                    <span key={`l2-w-${wIndex}`} className="inline-block whitespace-nowrap mr-[0.25em]">
                        {wordChars.map((char, cIndex) => {
                            const previousCharsCount = line1.length + line2.split(" ").slice(0, wIndex).join("").length + wIndex;
                            return (
                                <motion.span
                                    key={`l2-w${wIndex}-c${cIndex}`}
                                    variants={letterVariants}
                                    custom={previousCharsCount + cIndex}
                                    style={{ display: "inline-block" }}
                                >
                                    {char}
                                </motion.span>
                            );
                        })}
                        {hasDot && (
                            <motion.span
                                custom={totalChars}
                                variants={dotVariants}
                                style={{ display: "inline-block" }}
                            >
                                .
                            </motion.span>
                        )}
                    </span>
                )
            })}
        </motion.h1>
    );
};

export default AnimateText;

