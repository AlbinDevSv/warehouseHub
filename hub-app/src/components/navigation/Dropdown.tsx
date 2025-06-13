import { Truck, Plane, Ship } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface DropdownItem {
    icon: string;
    label: string;
    href: string;
}

interface IProps {
    items: DropdownItem[];
    label: string;
    icon: "truck" | "plane" | "boat";
}

export default function Dropdown(props: IProps) {
    const pathname = usePathname();
    // Helper to render the correct icon
    const renderIcon = () => {
        switch (props.icon) {
            case "truck":
                return <Truck size={18} />;
            case "plane":
                return <Plane size={18} />;
            case "boat":
                return <Ship size={18} />;
            default:
                return null;
        }
    };

    return (
        <details className="group">
            <summary className="flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer select-none hover:bg-[#0083bf]/80 transition-all group-open:bg-[#0083bf]">
                {renderIcon()}
                <span className="text-sm">{props.label}</span>
                <svg
                    className="ml-auto h-4 w-4 transition-transform group-open:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </summary>
            <div className="ml-6 mt-2 flex flex-col gap-1">
                {props.items.map(({ label, href }) => {
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
                            {renderIcon()}
                            <span className="text-sm">{label}</span>
                        </Link>
                    );
                })}
            </div>
        </details>
    );
}
