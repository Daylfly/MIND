import React from "react";
import { cn } from "@/lib/utils";

interface MindBadgeProps {
    className?: string;
    children: React.ReactNode;
}

export const MindBadge: React.FC<MindBadgeProps> = ({ className, children }) => {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full bg-mind-mint px-4 py-1.5 text-sm font-medium text-mind-teal",
                className
            )}
        >
            {children}
        </span>
    );
};
