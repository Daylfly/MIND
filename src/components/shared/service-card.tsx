"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useServiceBooking } from "./service-booking-provider";
import type { MindServiceDetail } from "@/types/service-detail.interface";

interface ServiceCardProps {
    service: MindServiceDetail;
    className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, className }) => {
    const { openBooking } = useServiceBooking();
    const Icon = service.icon;

    return (
        <div
            className={cn(
                "flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md",
                className
            )}
        >
            <div
                className={cn(
                    "mb-4 flex h-11 w-11 items-center justify-center rounded-xl",
                    service.iconBg
                )}
            >
                <Icon className={cn("h-5 w-5", service.iconColor)} />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">{service.title}</h3>
            <p className="mb-6 flex-1 text-sm leading-relaxed text-mind-muted">
                {service.description}
            </p>
            <Button
                onClick={() => openBooking(service)}
                className="h-11 w-full rounded-xl bg-mind-primary cursor-pointer text-white hover:bg-mind-primary-dark"
            >
                Записаться
            </Button>
        </div>
    );
};
