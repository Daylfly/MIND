"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "@/components/shared/container";
import NavMenu from "@/widgets/nav-menu";
import MobileMenu from "@/widgets/mobile-menu";
import { MindLogo } from "@/components/shared/mind-logo";
import { BookButton } from "@/components/shared/book-button";
import { useAppData } from "@/components/shared/data-provider";
import { useContacts } from "@/components/shared/contacts-provider";
import { Phone, Menu } from "lucide-react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { generalService } = useAppData();
    const { contacts } = useContacts();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm">
            <Container className="flex h-16 sm:h-[72px] items-center justify-between gap-4">
                <Link href="/" className="shrink-0">
                    <MindLogo />
                </Link>

                <div className="hidden lg:flex items-center gap-8">
                    <NavMenu className="flex items-center gap-8" />
                </div>

                <div className="hidden lg:flex items-center gap-5">
                    <a
                        href={`tel:${contacts.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 text-md font-medium text-gray-700 transition-colors hover:text-mind-primary"
                    >
                        <Phone className="h-4 w-4 text-mind-primary" />
                        {contacts.phone}
                    </a>
                    {generalService && (
                        <BookButton
                            service={generalService}
                            className="h-10 rounded-xl text-md bg-mind-primary px-6 cursor-pointer text-white hover:bg-mind-primary-dark"
                        >
                            Записаться
                        </BookButton>
                    )}
                </div>

                <button
                    onClick={() => setMenuOpen(true)}
                    className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition-colors hover:bg-gray-50"
                    aria-label="Открыть меню"
                >
                    <Menu className="h-5 w-5" />
                </button>

                <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
            </Container>
        </header>
    );
};

export default Header;
