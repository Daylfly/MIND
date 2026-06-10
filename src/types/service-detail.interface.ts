import type { LucideIcon } from "lucide-react";

export interface MindServiceDetail {
    id: string;
    icon: LucideIcon;
    iconColor: string;
    iconBg: string;
    title: string;
    description: string;
    fullDescription: string;
    price: number;
    specialists: string[];
    schedule: {
        hours: string;
        note: string;
    };
    image?: string;
}
