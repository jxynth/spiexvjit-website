"use client";

import { Trophy } from "lucide-react";

export default function Achievements() {
    return (
        <section className="py-20 lg:py-32 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our Achievements</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex gap-4 p-6 rounded-xl border border-border/50 bg-background hover:border-primary/50 transition-colors">
                            <div className="mt-1">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                    <Trophy size={24} />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">Best Technical Club 2023</h3>
                                <p className="text-sm text-muted-foreground">Awarded by St. Peter&apos;s Institute for outstanding contribution to student development and technical excellence.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
