"use client";

import Link from "next/link";
import { ArrowRight, MapPin, CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
    {
        title: "AI & ML Workshop",
        date: "Mar 15, 2024",
        time: "10:00 AM",
        location: "Main Auditorium",
        category: "Workshop",
    },
    {
        title: "HackTheFuture 2.0",
        date: "Apr 05, 2024",
        time: "9:00 AM",
        location: "Innovation Lab",
        category: "Hackathon",
    },
    {
        title: "Tech Talk: Web3",
        date: "Apr 20, 2024",
        time: "2:00 PM",
        location: "Seminar Hall",
        category: "Seminar",
    },
];

export default function UpcomingEvents() {
    return (
        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upcoming Events</h2>
                        <p className="text-muted-foreground max-w-[600px]">
                            Don't miss out on our upcoming workshops, hackathons, and seminars. Register now to secure your spot!
                        </p>
                    </div>
                    <Link href="/events">
                        <Button variant="outline" className="gap-2">
                            View All Events <ArrowRight size={16} />
                        </Button>
                    </Link>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {events.map((event, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-xl border border-border/50 bg-card transition-all hover:shadow-lg hover:border-primary/50">
                            <div className="aspect-video w-full bg-gradient-to-br from-primary/5 to-secondary/5 p-8 flex items-center justify-center text-muted-foreground">
                                <span className="text-2xl font-bold opacity-20">{event.category}</span>
                            </div>
                            <div className="p-6">
                                <div className="mb-2 flex items-center gap-2">
                                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                                        {event.category}
                                    </span>
                                </div>
                                <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
                                <div className="mb-4 space-y-1 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <CalendarClock size={14} />
                                        <span>{event.date} • {event.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={14} />
                                        <span>{event.location}</span>
                                    </div>
                                </div>
                                <Button className="w-full">Register Now</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
