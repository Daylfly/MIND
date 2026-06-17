"use client";

import { cn } from "@/lib/utils";
import Container from "@/components/shared/container";
import { MindLogo } from "@/components/shared/mind-logo";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { useContacts } from "@/components/shared/contacts-provider";
import { FOOTER_PATIENT_LINKS, footerCopyright } from "./footer";

interface IFooterProps {
    className?: string;
}

export const SectionUi: React.FC<IFooterProps> = ({ className }) => {
    const { contacts } = useContacts();

    return (
        <footer className={cn("w-full bg-mind-footer text-white", className)}>
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-12 sm:py-16">
                    <div className="space-y-4">
                        <MindLogo variant="white" />
                        <p className="text-sm text-white/60 leading-relaxed max-w-xs">
                            Медицинская клиника экспертного класса. Лицензия № ЛО-77-01-012345.
                            Оказание медицинских услуг в соответствии с федеральными стандартами.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4 font-semibold text-white">Пациентам</h4>
                        <ul className="space-y-2.5">
                            {FOOTER_PATIENT_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/60 transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 font-semibold text-white">Контакты</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm text-white/60">
                                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-white/40" />
                                {contacts.address}
                            </li>
                            <li className="flex items-center gap-3 text-sm text-white/60">
                                <Phone className="h-4 w-4 shrink-0 text-white/40" />
                                <a href={`tel:${contacts.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                                    {contacts.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-white/60">
                                <Mail className="h-4 w-4 shrink-0 text-white/40" />
                                <a href={`mailto:${contacts.email}`} className="hover:text-white transition-colors">
                                    {contacts.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 py-6">
                    <p className="text-center text-sm text-white/40">{footerCopyright}</p>
                </div>
            </Container>
        </footer>
    );
};
