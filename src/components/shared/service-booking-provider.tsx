"use client";

import React, { createContext, useCallback, useContext, useState } from "react";
import type { MindServiceDetail } from "@/types/service-detail.interface";
import { ServiceBookingModal } from "./service-booking-modal";

interface ServiceBookingContextValue {
    openBooking: (service: MindServiceDetail) => void;
    closeBooking: () => void;
}

const ServiceBookingContext = createContext<ServiceBookingContextValue | null>(null);

export function useServiceBooking() {
    const ctx = useContext(ServiceBookingContext);
    if (!ctx) {
        throw new Error("useServiceBooking must be used within ServiceBookingProvider");
    }
    return ctx;
}

export function ServiceBookingProvider({ children }: { children: React.ReactNode }) {
    const [service, setService] = useState<MindServiceDetail | null>(null);

    const openBooking = useCallback((s: MindServiceDetail) => setService(s), []);
    const closeBooking = useCallback(() => setService(null), []);

    return (
        <ServiceBookingContext.Provider value={{ openBooking, closeBooking }}>
            {children}
            <ServiceBookingModal service={service} onClose={closeBooking} />
        </ServiceBookingContext.Provider>
    );
}
