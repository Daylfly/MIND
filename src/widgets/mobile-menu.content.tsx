import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MENU_DATA } from "@/data/menu.data";

interface MobileMenuContentProps {
    onClose: () => void;
}

const MobileMenuContent: React.FC<MobileMenuContentProps> = ({ onClose }) => {
    return (
        <div className="absolute top-0 right-0 h-full w-80 max-w-[85%] bg-black shadow-xl p-6 flex flex-col gap-6 overflow-auto">
            <nav className="w-full">
                <ul className="flex flex-col gap-4 list-none">
                    {MENU_DATA.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} onClick={onClose} className="text-base font-medium text-gray-700 hover:text-gray-950 transition-colors">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

        </div>
    );
};

export default MobileMenuContent;


