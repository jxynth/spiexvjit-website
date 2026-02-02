"use client";

import { Users, Calendar, Trophy, Rocket } from "lucide-react";

const stats = [
    { label: "Active Members", value: "500+", icon: Users },
    { label: "Events Conducted", value: "30+", icon: Calendar },
    { label: "Projects Built", value: "25+", icon: Rocket },
    { label: "Awards Won", value: "15", icon: Trophy },
];

export default function Stats() {
    return (
        <section className="py-12 border-y border-white/5 bg-transparent relative z-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="flex flex-col items-center text-center space-y-2 group hover:scale-105 transition-transform cursor-default">
                                <div className="p-3 bg-primary/10 rounded-full border border-primary/20 shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all">
                                    <Icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-4xl font-bold tracking-tighter text-white">{stat.value}</h3>
                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
