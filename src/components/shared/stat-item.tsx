import React from "react";
import { cn } from "@/lib/utils";

interface StatItemProps {
    value: string;
    label: string;
    className?: string;
}

export const StatItem: React.FC<StatItemProps> = ({ value, label, className }) => {
    return (
        <div className={cn("flex items-start gap-3", className)}>
            <div className="w-1 h-full min-h-[48px] rounded-full bg-[#00BBA7] shrink-0" />
            <div>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">{value}</p>
                <p className="text-sm text-mind-muted mt-1 leading-snug">{label}</p>
            </div>
        </div>
    );
};
