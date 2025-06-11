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
                <section className="flex h-[calc(100vh-64px)]">
                    <div className="w-fit">
                        <Sidebar />
                    </div>
                    <div className="flex-1 overflow-auto">
                        {/* Main */}
                        {children}
                    </div>
                </section>
            </body>
        </html>
    );
}
