import { MindHeroSection } from "@/widgets/mind-hero";
import { MindAboutSection } from "@/widgets/mind-about";
import { MindServicesSection } from "@/widgets/mind-services";
import { MindReviewsSection } from "@/widgets/mind-reviews";
import { MindAccreditationSection } from "@/widgets/mind-accreditation";
import { FooterSection } from "@/widgets/footer";

export default function Home() {
    return (
        <div className="scroll-smooth">
            <MindHeroSection />
            <MindAboutSection />
            <MindServicesSection />
            <div id="doctors">
                <MindReviewsSection />
            </div>
            <MindAccreditationSection />
            <FooterSection />
        </div>
    );
}
