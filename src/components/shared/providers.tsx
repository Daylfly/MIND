"use client";

import { ServiceBookingProvider } from "./service-booking-provider";

export function Providers({ children }: { children: React.ReactNode }) {
    return <ServiceBookingProvider>{children}</ServiceBookingProvider>;
}
