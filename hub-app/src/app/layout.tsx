import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/navigation/Sidebar";
import Navbar from "@/components/navigation/Navbar";

export const metadata: Metadata = {
    title: "Warehouse Hub",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="sv">
            <body>
                {/* Navbar */}
                <Navbar />
                <section className="flex h-screen">
                    <div className="w-fit">
                        <Sidebar />
                    </div>
                    <div className="flex-1">
                        {/* Main */}
                        {children}
                    </div>
                </section>
            </body>
        </html>
    );
}
