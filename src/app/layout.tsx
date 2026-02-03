import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/layout/SmoothScroll";

export const metadata: Metadata = {
    title: "SPIEXVJIT Club",
    description: "Official website of SPIEXVJIT Club - Innovate. Create. Elevate.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* 
                  Using runtime font loading instead of next/font/google to ensure 
                  builds work in all environments (including those with restricted network access).
                  Preconnect hints optimize the font loading performance.
                */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link 
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" 
                    rel="stylesheet"
                />
            </head>
            <body className="font-sans selection:bg-yellow-500/30 selection:text-primary">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <SmoothScroll />
                    <CustomCursor />
                    <div className="flex min-h-screen flex-col">
                        <Header />
                        <main className="flex-1 pt-0">{children}</main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
