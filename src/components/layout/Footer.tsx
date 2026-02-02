"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-background pt-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col gap-6">
                        <h4 className="text-lg font-bold tracking-tight">Main</h4>
                        <nav className="flex flex-col gap-4 text-sm text-muted-foreground">
                            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                            <Link href="/events" className="hover:text-primary transition-colors">Events</Link>
                            <Link href="/team" className="hover:text-primary transition-colors">Team</Link>
                            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                        </nav>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-lg font-bold tracking-tight">Socials</h4>
                        <nav className="flex flex-col gap-4 text-sm text-muted-foreground">
                            <Link href="#" className="hover:text-primary transition-colors">Twitter</Link>
                            <Link href="#" className="hover:text-primary transition-colors">Instagram</Link>
                            <Link href="#" className="hover:text-primary transition-colors">LinkedIn</Link>
                            <Link href="#" className="hover:text-primary transition-colors">GitHub</Link>
                        </nav>
                    </div>

                    <div className="md:col-span-2 lg:col-span-2 lg:text-right">
                        <h4 className="text-lg font-bold tracking-tight mb-6">Stay Updated</h4>
                        <p className="max-w-md text-sm text-muted-foreground lg:ml-auto">
                            Join the community of innovators. We are constantly pushing the boundaries of technology.
                        </p>
                    </div>
                </div>

                <div className="mt-20 border-t border-border/40 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <span className="text-xs text-muted-foreground">© 2024 SPIEXVJIT. All rights reserved.</span>
                        <div className="flex gap-4">
                            <span className="text-xs text-muted-foreground">Privacy Policy</span>
                            <span className="text-xs text-muted-foreground">Terms of Service</span>
                        </div>
                    </div>
                </div>

                {/* Massive Footer Text */}
                <div className="w-full overflow-hidden leading-none">
                    <h1 className="text-[12vw] font-black tracking-tighter text-foreground/5 text-center select-none pointer-events-none">
                        SPIEXVJIT
                    </h1>
                </div>
            </div>
        </footer>
    );
}
