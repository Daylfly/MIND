"use client";

import { ContactsProvider } from "./contacts-provider";
import { DataProvider } from "./data-provider";
import { ReviewsProvider } from "./reviews-provider";
import { ServiceBookingProvider } from "./service-booking-provider";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <DataProvider>
            <ReviewsProvider>
                <ContactsProvider>
                    <ServiceBookingProvider>{children}</ServiceBookingProvider>
                </ContactsProvider>
            </ReviewsProvider>
        </DataProvider>
    );
}
