"use client";

import { CheckCircle2 } from "lucide-react";

export default function About() {
    return (
        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About SPIEXVJIT</h2>
                        <p className="text-muted-foreground text-lg">
                            We are a community of passionate student developers, designers, and innovators.
                            Our mission is to bridge the gap between academic learning and industry requirements
                            through hands-on projects and workshops.
                        </p>
                        <ul className="space-y-4">
                            {["Industry-expert led workshops", "Collaborative projects", "Hackathons & Coding Competitions"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-secondary h-5 w-5" />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative aspect-square lg:aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 border border-border/50">
                        {/* Image Placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-foreground font-bold text-2xl opacity-50">Club Photo Placeholder</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
