"use client";

import tabs from "@/const/tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Truck, Boxes, Plane, Home } from "lucide-react";
import { JSX } from "react";

const icons: Record<string, JSX.Element> = {
    Sweden: <Truck size={18} />,
    Norway: <Truck size={18} />,
    Greece: <Truck size={18} />,
    "United Kingdom": <Truck size={18} />,
    Flight: <Plane size={18} />,
};

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-[#009ee3] h-full p-4 text-white shadow-lg flex flex-col justify-between">
            {/* Toppen: Logo & Navigering */}
            <div>
                <h2 className="text-2xl font-bold tracking-wide mb-6">Menu</h2>
                <nav className="space-y-2 flex flex-col">
                    {tabs.map(({ label, href }) => {
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`flex items-center gap-3 px-4 py-2 rounded-md transition-all ${
                                    isActive
                                        ? "bg-white text-[#009ee3] font-semibold shadow-inner"
                                        : "hover:bg-[#0083bf]/80"
                                }`}>
                                {icons[label] ?? <Boxes size={18} />}
                                <span className="text-sm">{label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Botten: Home-länk */}
            <Link
                href="/"
                className="mt-6 flex items-center gap-2 text-white hover:text-gray-200 transition">
                <Home size={20} />
                <span className="text-sm font-medium">Home</span>
            </Link>
        </aside>
    );
}
