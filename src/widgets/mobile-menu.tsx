"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { MENU_DATA } from "@/data/menu.data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useServiceBooking } from "@/components/shared/service-booking-provider";
import { useAppData } from "@/components/shared/data-provider";
import { useContacts } from "@/components/shared/contacts-provider";
import { Phone, X } from "lucide-react";

interface IMobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: IMobileMenuProps) => {
    const { openBooking } = useServiceBooking();
    const { generalService } = useAppData();
    const { contacts } = useContacts();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            <div
                onClick={onClose}
                className={cn(
                    "fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-200 lg:hidden",
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}
            />
            <aside
                className={cn(
                    "fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-white p-6 shadow-xl transform transition-transform duration-200 lg:hidden",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex items-center justify-between mb-8">
                    <span className="text-lg font-bold text-gray-900">Меню</span>
                    <button
                        onClick={onClose}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100"
                        aria-label="Закрыть меню"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <ul className="space-y-1">
                    {MENU_DATA.map((item, index) => (
                        <li key={index}>
                            <Link
                                onClick={onClose}
                                href={item.href}
                                className="block rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-mind-primary"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="mt-8 space-y-3 border-t border-gray-100 pt-6">
                    <a
                        href={`tel:${contacts.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 text-sm font-medium text-gray-700"
                    >
                        <Phone className="h-4 w-4 text-mind-primary" />
                        {contacts.phone}
                    </a>
                    {generalService && (
                        <Button
                            onClick={() => {
                                onClose();
                                openBooking(generalService);
                            }}
                            className="w-full h-11 rounded-xl bg-mind-primary text-white hover:bg-mind-primary-dark"
                        >
                            Записаться
                        </Button>
                    )}
                </div>
            </aside>
        </>
    );
};

export default MobileMenu;
