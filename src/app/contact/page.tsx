import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">Get in Touch</h2>
                    <p className="text-muted-foreground">
                        Have questions or want to collaborate? Reach out to us!
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Mail className="text-primary h-5 w-5" />
                            <span>club@spiexvjit.edu</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="text-primary h-5 w-5" />
                            <span>+91 123 456 7890</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <MapPin className="text-primary h-5 w-5 mt-1" />
                            <span>St. Peter's Institute of Engineering, Hyderabad</span>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm">
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <input id="name" type="text" className="w-full rounded-md border border-input bg-background p-2 text-sm" placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <input id="email" type="email" className="w-full rounded-md border border-input bg-background p-2 text-sm" placeholder="Your email" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <textarea id="message" className="w-full rounded-md border border-input bg-background p-2 text-sm min-h-[100px]" placeholder="How can we help?" />
                        </div>
                        <Button className="w-full">Send Message</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
