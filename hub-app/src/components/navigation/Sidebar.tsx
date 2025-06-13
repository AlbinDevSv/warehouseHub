"use client";

import { AIR, BOAT, ROAD } from "@/const/tabs";
import Link from "next/link";
import { Boxes, Home } from "lucide-react";
import Dropdown from "./Dropdown";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();
    const href = "tabs/LoadingMeter/";
    const isActive = pathname === href;

    return (
        <aside className="w-64 bg-[#009ee3] h-full p-4 text-white shadow-lg flex flex-col justify-between">
            {/* Toppen: Logo & Navigering */}
            <div>
                <h2 className="text-2xl font-bold tracking-wide mb-6">Menu</h2>

                <nav className="space-y-2 flex flex-col">
                    <Dropdown items={ROAD} label="Road" icon="truck" />
                    <Dropdown items={AIR} label="Air" icon="plane" />
                    <Dropdown items={BOAT} label="Boat" icon="boat" />
                    {/* Example static link */}
                    <Link
                        href={href}
                        className={`flex items-center gap-3 px-4 py-2 rounded-md transition-all ${
                            isActive
                                ? "bg-white text-[#009ee3] font-semibold shadow-inner"
                                : "hover:bg-[#0083bf]/80"
                        }`}>
                        {/* Replace renderIcon with a static icon or remove */}
                        <Boxes size={18} />
                        <span className="material-icons">flm</span>
                    </Link>
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
