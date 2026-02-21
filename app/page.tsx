"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { HeroSection } from "@/components/hero-section";
import { ServicesPreview } from "@/components/services-preview";
import { AboutPreview } from "@/components/about-preview";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { CTASection } from "@/components/cta-section";
import { SectionSeparator } from "@/components/section-separator";
import { SectionBadge } from "@/components/section-badge";
import { useLocale } from "@/hooks/use-locale-context";
import { motion } from "framer-motion";
import { MessageSquareQuote } from "lucide-react";

export default function HomePage() {
  const { locale } = useLocale();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />

        <ServicesPreview />

        {/* Separator: Services -> About */}
        <SectionSeparator variant="default" />

        <AboutPreview />

        {/* Separator: Services -> About */}
        <SectionSeparator variant="default" />

        {/* Testimonials Section with Badge */}
        <section className="py-12 sm:py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-8 sm:mb-10 lg:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Testimonials Badge */}
              <SectionBadge
                text={locale === "ar" ? "آراء العملاء" : "Client Testimonials"}
                icon={MessageSquareQuote}
                variant="gold"
                className="mb-4 sm:mb-5"
              />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 font-serif text-balance">
                {locale === "ar" ? "ماذا يقول عملاؤنا" : "What Our Clients Say"}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
                {locale === "ar"
                  ? "موثوق من قبل المئات من العملاء للتمثيل القانوني المهني"
                  : "Trusted by hundreds of clients for professional legal representation"}
              </p>
            </motion.div>
            <TestimonialCarousel />
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
