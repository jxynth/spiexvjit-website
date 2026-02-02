import { Button } from "@/components/ui/button";

export default function EventsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">Events</h1>
            <div className="grid gap-6">
                <p className="text-muted-foreground">Discover likely workshops, hackathons, and seminars.</p>
                {/* Placeholder content until full implementation */}
                <div className="p-12 border border-dashed rounded-lg flex items-center justify-center bg-muted/20">
                    <span className="text-muted-foreground">Events list coming soon...</span>
                </div>
            </div>
        </div>
    );
}
