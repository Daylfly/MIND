import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Star, Quote } from "lucide-react";

interface ReviewCardProps {
    doctorName: string;
    doctorRole: string;
    text: string;
    authorName: string;
    doctorAvatarUrl: string;
    rating?: number;
    className?: string;
}

const Stars = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
            <Star
                key={i}
                className={cn(
                    "h-[18px] w-[18px] fill-none text-amber-400",
                    i >= rating && "text-gray-200"
                )}
                strokeWidth={1.5}
            />
        ))}
    </div>
);

export const ReviewCard: React.FC<ReviewCardProps> = ({
    doctorName,
    doctorRole,
    text,
    authorName,
    doctorAvatarUrl,
    rating = 5,
    className,
}) => {
    return (
        <div
            className={cn(
                "relative flex flex-col rounded-2xl border border-gray-100/80 bg-white p-6 shadow-sm",
                className
            )}
        >
            <Quote className="absolute right-5 top-5 h-10 w-10 text-mind-mint fill-mind-mint/40" />

            <div className="mb-4 flex items-center gap-3 pr-10">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                    <Image
                        src={doctorAvatarUrl}
                        alt={doctorName}
                        fill
                        className="object-cover"
                        sizes="56px"
                    />
                </div>
                <div className="min-w-0">
                    <p className="font-bold text-gray-900 leading-snug">{doctorName}</p>
                    <p className="mt-0.5 text-sm font-medium text-mind-teal leading-snug">
                        {doctorRole}
                    </p>
                </div>
            </div>

            <Stars rating={rating} />

            <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">{text}</p>

            <p className="mt-5 text-sm font-bold text-gray-900">— {authorName}</p>
        </div>
    );
};
