"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { MindServiceDetail } from "@/types/service-detail.interface";
import { formatPrice } from "@/widgets/mind-services/ui/mind-services.data";
import { Calendar, CheckCircle2, Clock, Users, X } from "lucide-react";

interface ServiceBookingModalProps {
    service: MindServiceDetail | null;
    onClose: () => void;
}

function getMinDate(): string {
    return new Date().toISOString().split("T")[0];
}

function formatDateRu(dateStr: string): string {
    return new Date(`${dateStr}T00:00:00`).toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

export function ServiceBookingModal({ service, onClose }: ServiceBookingModalProps) {
    const [step, setStep] = useState<"details" | "form" | "success">("details");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");

    const isOpen = service !== null;
    const minDate = getMinDate();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            setStep("details");
            setName("");
            setPhone("");
            setDate("");
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen, onClose]);

    if (!service) return null;

    const Icon = service.icon;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim() && phone.trim() && date) setStep("success");
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
        >
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="relative z-10 w-full max-w-lg max-h-[95vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white shadow-2xl">
                {/* Header */}
                <div className="sticky top-0 z-10 bg-white px-6 pt-6 pb-4">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                            <div
                                className={cn(
                                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl",
                                    service.iconBg
                                )}
                            >
                                <Icon className={cn("h-6 w-6", service.iconColor)} />
                            </div>
                            <div>
                                <h2
                                    id="booking-modal-title"
                                    className="text-lg font-bold text-gray-900 leading-snug pr-2"
                                >
                                    {service.title}
                                </h2>
                                <p className="mt-0.5 text-xl font-semibold text-mind-teal">
                                    {formatPrice(service.price)}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600"
                            aria-label="Закрыть"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                <div className="mx-6 border-t border-gray-100" />

                {step === "details" && (
                    <>
                        <div className="px-6 py-5 space-y-4">
                            <div>
                                <h3 className="mb-2 font-semibold text-gray-900">Об услуге</h3>
                                <p className="text-sm leading-relaxed text-mind-muted">
                                    {service.fullDescription}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="rounded-2xl bg-blue-50 p-4">
                                    <div className="mb-3 flex items-center gap-2 text-blue-600">
                                        <Users className="h-4 w-4" />
                                        <span className="text-sm font-semibold">Специалисты</span>
                                    </div>
                                    <ul className="space-y-2">
                                        {service.specialists.map((doc) => (
                                            <li
                                                key={doc}
                                                className="flex items-center gap-2 text-sm text-gray-700"
                                            >
                                                <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-500" />
                                                {doc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="rounded-2xl bg-mind-mint p-4">
                                    <div className="mb-3 flex items-center gap-2 text-mind-teal">
                                        <Clock className="h-4 w-4" />
                                        <span className="text-sm font-semibold">Приём</span>
                                    </div>
                                    <p className="text-sm font-medium text-gray-800">
                                        {service.schedule.hours}
                                    </p>
                                    <p className="mt-1 text-sm text-mind-muted">
                                        {service.schedule.note}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mx-6 border-t border-gray-100" />

                        <div className="px-6 py-5">
                            <Button
                                onClick={() => setStep("form")}
                                className="h-12 w-full rounded-2xl bg-mind-primary text-base text-white shadow-md hover:bg-mind-primary-dark"
                            >
                                <Calendar className="h-5 w-5" />
                                Записаться на услугу
                            </Button>
                        </div>
                    </>
                )}

                {step === "form" && (
                    <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
                        <div>
                            <h3 className="mb-1 font-semibold text-gray-900">Ваши данные</h3>
                            <p className="text-sm text-mind-muted mb-4">
                                Оставьте контакты — мы перезвоним для подтверждения записи.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className="space-y-1.5">
                                <label htmlFor="booking-date" className="text-sm font-medium text-gray-700">
                                    Дата приёма
                                </label>
                                <Input
                                    id="booking-date"
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    min={minDate}
                                    required
                                    className="h-11 rounded-xl"
                                />
                            </div>
                            <Input
                                placeholder="Ваше имя"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="h-11 rounded-xl"
                            />
                            <Input
                                placeholder="+7 (___) ___-__-__"
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                className="h-11 rounded-xl"
                            />
                        </div>

                        <div className="flex gap-3 pt-2">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setStep("details")}
                                className="h-11 flex-1 rounded-xl"
                            >
                                Назад
                            </Button>
                            <Button
                                type="submit"
                                className="h-11 flex-1 rounded-xl bg-mind-primary text-white hover:bg-mind-primary-dark"
                            >
                                Отправить
                            </Button>
                        </div>
                    </form>
                )}

                {step === "success" && (
                    <div className="px-6 py-10 text-center">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-mind-mint">
                            <CheckCircle2 className="h-8 w-8 text-mind-teal" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">Заявка отправлена!</h3>
                        <p className="mb-6 text-sm text-mind-muted">
                            Мы свяжемся с вами для подтверждения записи на{" "}
                            <span className="font-medium text-gray-800">{service.title}</span>
                            {date && (
                                <>
                                    {" "}
                                    на <span className="font-medium text-gray-800">{formatDateRu(date)}</span>
                                </>
                            )}
                            .
                        </p>
                        <Button
                            onClick={onClose}
                            className="h-11 rounded-xl bg-mind-primary px-8 text-white hover:bg-mind-primary-dark"
                        >
                            Закрыть
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
