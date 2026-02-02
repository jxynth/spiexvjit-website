"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

// Magnetic Button Component
const MagneticButton = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const ref = useRef<HTMLButtonElement>(null);
    const x = useRef(0);
    const y = useRef(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.current = (clientX - centerX) * 0.2; // Strength
        y.current = (clientY - centerY) * 0.2;

        if (ref.current) {
            ref.current.style.transform = `translate(${x.current}px, ${y.current}px)`;
        }
    };

    const handleMouseLeave = () => {
        x.current = 0;
        y.current = 0;
        if (ref.current) {
            ref.current.style.transform = "translate(0px, 0px)";
        }
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={className}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
            {children}
        </motion.button>
    );
};

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    const stagger = {
        hidden: { opacity: 0, y: 100 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        }),
    };

    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 pt-20">
            {/* Minimal Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

            {/* Parallax Content Container */}
            <motion.div style={{ y }} className="relative z-10 flex flex-col items-center text-center">

                {/* Badge */}
                <motion.div
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                    className="mb-8 overflow-hidden"
                >
                    <span className="inline-block rounded-full border border-primary/10 bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary/80">
                        The Official Tech Club
                    </span>
                </motion.div>

                {/* Main Title - Split for impact */}
                <div className="relative mb-6 flex flex-col items-center text-center font-bold leading-[0.9] tracking-tighter text-foreground">
                    <motion.h1 custom={1} initial="hidden" animate="visible" variants={stagger} className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem]">
                        INNOVATE
                    </motion.h1>
                    <motion.h1 custom={2} initial="hidden" animate="visible" variants={stagger} className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] text-muted-foreground/30">
                        CREATE
                    </motion.h1>
                    <motion.h1 custom={3} initial="hidden" animate="visible" variants={stagger} className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem]">
                        ELEVATE
                    </motion.h1>
                </div>

                {/* Subtitle */}
                <motion.p
                    custom={4}
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                    className="mb-10 max-w-xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl"
                >
                    We build the future through code, community, and collaboration.
                    Join the premier technical society at <strong className="text-foreground font-medium">VJIT</strong>.
                </motion.p>

                {/* Actions */}
                <motion.div
                    custom={5}
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                    className="flex flex-col gap-6 sm:flex-row"
                >
                    <Link href="/contact">
                        <MagneticButton className="group relative flex h-14 w-44 items-center justify-center overflow-hidden rounded-full bg-primary text-primary-foreground transition-all hover:bg-primary/90">
                            <span className="relative z-10 font-medium">Join Club</span>
                            <motion.div
                                initial={{ scale: 0 }}
                                whileHover={{ scale: 1 }}
                                className="absolute h-full w-full rounded-full bg-white/20"
                            />
                        </MagneticButton>
                    </Link>

                    <Link href="/projects">
                        <MagneticButton className="group flex h-14 w-44 items-center justify-center gap-2 rounded-full border border-input bg-background font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
                            <span>Our Work</span>
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </MagneticButton>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="h-10 w-[1px] animate-pulse bg-gradient-to-b from-transparent via-foreground/30 to-transparent"></div>
            </motion.div>
        </section>
    );
}
