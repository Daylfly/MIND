"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useServiceBooking } from "./service-booking-provider";
import type { MindServiceDetail } from "@/types/service-detail.interface";
import { cn } from "@/lib/utils";

interface BookButtonProps extends React.ComponentProps<typeof Button> {
    service: MindServiceDetail;
    children: React.ReactNode;
}

export function BookButton({ service, children, className, onClick, ...props }: BookButtonProps) {
    const { openBooking } = useServiceBooking();

    return (
        <Button
            className={cn(className)}
            onClick={(e) => {
                onClick?.(e);
                openBooking(service);
            }}
            {...props}
        >
            {children}
        </Button>
    );
}
