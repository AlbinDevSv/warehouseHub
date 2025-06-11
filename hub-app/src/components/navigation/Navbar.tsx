// app/navbar/Navbar.tsx
"use client";

export default function Navbar() {
    return (
        <header className="w-full h-16 bg-white border-b px-6 flex items-center justify-between shadow-sm">
            <div className="text-xl font-bold text-blue-600">📦 Lagerhub</div>
            <div className="flex items-center space-x-4">
                {/* Här kan du lägga till fler ikoner eller funktioner */}
                <span className="text-gray-600">Användare</span>
                <div className="w-8 h-8 rounded-full bg-gray-300" />
            </div>
        </header>
    );
}
