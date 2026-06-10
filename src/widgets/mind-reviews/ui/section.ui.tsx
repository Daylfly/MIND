import { cn } from "@/lib/utils";
import Container from "@/components/shared/container";
import { ReviewCard } from "@/components/shared/review-card";
import { Button } from "@/components/ui/button";
import { MIND_REVIEWS, REVIEWS_SUBTITLE } from "./mind-reviews.data";

interface MindReviewsProps {
    className?: string;
}

export const SectionUi: React.FC<MindReviewsProps> = ({ className }) => {
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {MIND_REVIEWS.map((review) => (
                        <ReviewCard
                            key={review.doctorName}
                            doctorName={review.doctorName}
                            doctorRole={review.doctorRole}
                            text={review.text}
                            authorName={review.authorName}
                            doctorAvatarUrl={review.doctorAvatarUrl}
                            rating={review.rating}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};
