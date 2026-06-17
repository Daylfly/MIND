"use client";

import { cn } from "@/lib/utils";
import Container from "@/components/shared/container";
import { ReviewCard } from "@/components/shared/review-card";
import { useReviews } from "@/components/shared/reviews-provider";
import { REVIEWS_SUBTITLE } from "./mind-reviews.data";

interface MindReviewsProps {
    className?: string;
}

export const SectionUi: React.FC<MindReviewsProps> = ({ className }) => {
    const { reviews, loading } = useReviews();

    return (
        <section
            id="reviews"
            className={cn("py-12 sm:py-16 lg:py-20 bg-mind-reviews-bg", className)}
        >
            <Container>
                <div className="mb-10 sm:mb-12 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-xl">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Наши специалисты и отзывы
                        </h2>
                        <p className="mt-3 text-sm sm:text-base leading-relaxed text-mind-muted">
                            {REVIEWS_SUBTITLE}
                        </p>
                    </div>
                </div>

                {loading ? (
                    <p className="text-center text-mind-muted">Загрузка отзывов…</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                        {reviews.map((review) => (
                            <ReviewCard
                                key={review.id}
                                doctorName={review.doctorName}
                                doctorRole={review.doctorRole}
                                text={review.text}
                                authorName={review.authorName}
                                doctorAvatarUrl={review.doctorAvatarUrl}
                                rating={review.rating}
                            />
                        ))}
                    </div>
                )}
            </Container>
        </section>
    );
};
