"use client";

import { useEffect, useState } from "react";
import { User2 } from "lucide-react";

export default function Navbar() {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const date = now.toLocaleDateString("sv-SE", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
            });
            const time = now.toLocaleTimeString("sv-SE", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            });
            setTime(`${date} ${time}`);
        };

        updateClock(); // initial value
        const interval = setInterval(updateClock, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="w-full h-16 bg-white px-6 flex items-center justify-between text-[#009ee3] shadow-md">
            <div className="text-xl font-bold tracking-wide flex items-center gap-2">
                📦 Warehouse Hub
            </div>

            <div className="flex items-center space-x-6">
                <div className="text-sm font-mono">{time}</div>

                <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">Användare</span>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <User2 size={18} className="text-[#009ee3]" />
                    </div>
                </div>
            </div>
        </header>
    );
}
