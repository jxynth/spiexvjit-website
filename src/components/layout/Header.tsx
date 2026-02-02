"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [glass, setGlass] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        if (latest > 50) {
            setGlass(true);
        } else {
            setGlass(false);
        }
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                glass ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent border-transparent"
            )}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo directly from masonry style: Simple text */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="group flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-primary transition-all group-hover:scale-125 group-hover:bg-primary/80" />
                            <span className="text-xl font-bold tracking-tighter text-foreground">
                                SPIEX<span className="font-light">VJIT</span>
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="flex items-center space-x-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="group relative rounded-full p-2 transition-colors hover:bg-muted"
                                aria-label="Toggle theme"
                            >
                                {theme === "dark" ? (
                                    <Sun size={18} className="transition-transform group-hover:rotate-90" />
                                ) : (
                                    <Moon size={18} className="transition-transform group-hover:-rotate-12" />
                                )}
                            </button>
                        )}

                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted focus:outline-none"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl"
                >
                    <div className="space-y-1 px-4 pb-6 pt-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block rounded-lg px-3 py-3 text-base font-semibold text-foreground hover:bg-muted"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
}
