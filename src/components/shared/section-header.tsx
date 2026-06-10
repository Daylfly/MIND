import React from "react";
import { cn } from "@/lib/utils";
import { MindBadge } from "./mind-badge";

interface SectionHeaderProps {
    badge?: string;
    title: React.ReactNode;
    description?: string;
    className?: string;
    align?: "left" | "center";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    badge,
    title,
    description,
    className,
    align = "center",
}) => {
    const isCenter = align === "center";

    return (
        <div
            className={cn(
                "mb-10 sm:mb-12 md:mb-16",
                isCenter ? "text-center" : "text-left",
                className
            )}
        >
            {badge && (
                <div className={cn("mb-4", isCenter && "flex justify-center")}>
                    <MindBadge>{badge}</MindBadge>
                </div>
            )}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                {title}
            </h2>
            {description && (
                <p
                    className={cn(
                        "mt-3 text-mind-muted text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl",
                        isCenter && "mx-auto"
                    )}
                >
                    {description}
                </p>
            )}
        </div>
    );
};
