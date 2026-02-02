"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
    {
        id: 1,
        title: "Hack The Future",
        category: "Hackathon",
        year: "2024",
        image: "linear-gradient(to bottom right, #2563eb, #9333ea)", // Placeholder gradient
        description: "Our annual flagship hackathon with 500+ participants."
    },
    {
        id: 2,
        title: "AI & ML Workshop",
        category: "Workshop",
        year: "2024",
        image: "linear-gradient(to bottom right, #059669, #10b981)",
        description: "Hands-on session on Neural Networks and Deep Learning."
    },
    {
        id: 3,
        title: "Campus Connect App",
        category: "Open Source",
        year: "2023",
        image: "linear-gradient(to bottom right, #db2777, #be185d)",
        description: "A mobile app connecting students with campus resources."
    },
    {
        id: 4,
        title: "Tech Summit '23",
        category: "Event",
        year: "2023",
        image: "linear-gradient(to bottom right, #ea580c, #f97316)",
        description: "A gathering of industry leaders and student innovators."
    }
];

export default function Showcase() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-background">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-10 left-10 z-10 md:left-20 md:top-20">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                        Selected Works
                    </h2>
                </div>

                <motion.div style={{ x }} className="flex gap-10 pl-10 md:gap-20 md:pl-20">
                    {/* Introductory Block */}
                    <div className="flex h-[60vh] w-[30vw] min-w-[300px] flex-col justify-center gap-6">
                        <h3 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl">
                            We Turn <br />
                            <span className="text-muted-foreground">Ideas Into</span> <br />
                            Reality
                        </h3>
                        <p className="max-w-md text-lg text-muted-foreground">
                            Explore our latest projects, events, and open-source contributions.
                            We push the boundaries of what's possible.
                        </p>
                    </div>

                    {/* Project Cards */}
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative h-[60vh] w-[40vw] min-w-[400px] overflow-hidden rounded-2xl bg-muted/20 border border-white/10 transition-colors hover:bg-muted/30"
                        >
                            <div
                                className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105"
                                style={{ background: project.image }}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/20" />

                            <div className="relative z-10 flex h-full flex-col justify-between p-8 text-white">
                                <div className="flex justify-between items-start">
                                    <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs backdrop-blur-sm">
                                        {project.year}
                                    </span>
                                    <Button size="icon" variant="ghost" className="rounded-full bg-white/10 hover:bg-white/20 text-white">
                                        <ArrowUpRight className="h-5 w-5" />
                                    </Button>
                                </div>

                                <div>
                                    <h4 className="text-sm font-medium uppercase tracking-wider opacity-80 mb-2">{project.category}</h4>
                                    <h3 className="text-3xl font-bold md:text-4xl">{project.title}</h3>
                                    <p className="mt-4 max-w-sm text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-gray-200">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* End Card */}
                    <div className="flex h-[60vh] w-[30vw] min-w-[300px] items-center justify-center">
                        <div className="text-center">
                            <h3 className="mb-6 text-3xl font-bold">Want to see more?</h3>
                            <Link href="/projects">
                                <Button size="lg" className="rounded-full">
                                    View All Projects
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
