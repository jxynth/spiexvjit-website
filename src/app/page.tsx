import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Stats from "@/components/home/Stats";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import Achievements from "@/components/home/Achievements";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <Stats />
            <About />
            <UpcomingEvents />
            <Achievements />
        </div>
    );
}
