import { AnnouncementBar } from "@/components/AnnouncementBar";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { MethodSection } from "@/components/MethodSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
import { ContentSection } from "@/components/ContentSection";
import { BonusSection } from "@/components/BonusSection";
import { OfferSection } from "@/components/OfferSection";
import { MentorSection } from "@/components/MentorSection";
import { FAQSection } from "@/components/FAQSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <HeroSection />
      <StatsSection />
      <MethodSection />
      <SocialProofSection />
      <TargetAudienceSection />
      <ContentSection />
      <BonusSection />
      <OfferSection />
      <MentorSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;
