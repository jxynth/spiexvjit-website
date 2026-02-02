"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                SPIEXVJIT
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground mb-4">
                            Innovate. Create. Elevate. The official technical club of St. Peter's Institute of Engineering.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/events" className="text-sm text-muted-foreground hover:text-primary transition-colors">Events</Link></li>
                            <li><Link href="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">Team</Link></li>
                            <li><Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
                            <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Mail size={16} />
                                <span>club@spiexvjit.edu</span>
                            </li>
                            <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Phone size={16} />
                                <span>+91 123 456 7890</span>
                            </li>
                            <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                                <MapPin size={16} className="mt-1" />
                                <span>St. Peter's Institute, Engineering Block, Room 101</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Newsletter</h3>
                        <p className="text-sm text-muted-foreground mb-4">Subscribe to our newsletter for latest updates.</p>
                        <form className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            />
                            <button
                                type="submit"
                                className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 border-t border-border/40 pt-8">
                    <p className="text-center text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} SPIEXVJIT Club. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
