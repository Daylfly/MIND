import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MindLogoProps {
    className?: string;
    variant?: "default" | "white";
}

const LOGO_SRC = "/statics/logo-skin-expert.png";

export const MindLogo: React.FC<MindLogoProps> = ({ className, variant = "default" }) => {
    return (
        <Image
            src={LOGO_SRC}
            alt="SKIN EXPERT"
            width={200}
            height={44}
            className={cn(
                "h-8 w-auto object-contain object-left sm:h-9",
                variant === "white" && "brightness-0 invert",
                className
            )}
            priority
        />
    );
};
