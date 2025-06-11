"use client";

import tabs from "@/const/tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Warehouse, Truck, Boxes, Globe } from "lucide-react";

const icons: Record<string, JSX.Element> = {
    Sweden: <Warehouse size={18} />,
    Norway: <Truck size={18} />,
    Greece: <Boxes size={18} />,
    "United Kingdom": <Globe size={18} />,
};

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-[#009ee3] h-full p-4 text-white shadow-lg">
            <h2 className="text-2xl font-bold mb-8 tracking-wide">Lagerhub</h2>
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
        </aside>
    );
}
