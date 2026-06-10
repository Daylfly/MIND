import React from "react";
import { MENU_DATA } from "@/data/menu.data";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface INavMenuProps {
    className?: string;
}

const NavMenu = ({ className }: INavMenuProps) => {
    return (
        <nav className={cn(className)}>
            <ul className="flex items-center gap-8">
                {MENU_DATA.map((item, index) => (
                    <li key={index}>
                        <Link
                            href={item.href}
                            className="text-md font-medium text-gray-600 transition-colors hover:text-mind-primary"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavMenu;
