"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, MessageCircle, Scale } from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import { getTranslation } from "@/lib/i18n";
import { ConsultationModal } from "./consultation-modal";
import { useState } from "react";
import { motion } from "framer-motion";

export function MainHeroSection() {
  const { locale } = useLocale();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  const statsData = [
    {
      value: "10+",
      labelAr: "سنوات خبرة",
      labelEn: "Years Experience",
    },
    {
      value: "120+",
      labelAr: "عميل راضي",
      labelEn: "Happy Clients",
    },
    {
      value: "95%",
      labelAr: "معدل النجاح",
      labelEn: "Success Rate",
    },
  ];

  return (
    <section
      className="relative bg-background overflow-hidden"
      style={{ clipPath: "inset(0)" }}
    >
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-right decorative accent — subtle gold gradient */}
        <div className="absolute -top-32 ltr:-right-32 rtl:-left-32 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] rounded-full bg-accent/[0.04] blur-3xl" />
        {/* Bottom-left subtle glow */}
        <div className="absolute -bottom-40 ltr:-left-40 rtl:-right-40 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] rounded-full bg-accent/[0.03] blur-3xl" />
        {/* Fine grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] lg:h-[calc(100vh-72px)] py-10 sm:py-16 md:py-20">
          <motion.div
            className="w-full max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Small badge */}
            <motion.div
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-accent/20 bg-accent/[0.06] mb-6 sm:mb-8 md:mb-10"
              variants={itemVariants}
            >
              <Scale className="w-3.5 h-3.5 text-accent" />
              <span className="text-[10px] sm:text-xs font-medium text-accent tracking-wide">
                {locale === "ar"
                  ? "مكتب محاماة واستشارات قانونية"
                  : "Law & Legal Consulting Firm"}
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-5 md:mb-6 font-serif leading-[1.15]"
              variants={itemVariants}
            >
              {locale === "ar" ? (
                <>
                  استشارات قانونية <span className="text-accent">متخصصة</span>
                </>
              ) : (
                <>
                  Expert Legal <span className="text-accent">Consultation</span>
                </>
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-muted-foreground/80 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed text-pretty"
              variants={itemVariants}
            >
              {locale === "ar"
                ? "خدمات قانونية مهنية بنزاهة وتفان لحماية حقوقكم وتحقيق العدالة"
                : "Professional legal services with integrity and dedication to protect your rights and achieve justice"}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 mb-10 sm:mb-16 md:mb-20"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  onClick={() => setIsConsultationOpen(true)}
                  className="bg-accent text-white hover:bg-accent/90 text-sm sm:text-base px-7 sm:px-8 py-3 rounded-full transition-all duration-300 shadow-none cursor-pointer"
                >
                  {getTranslation(locale, "getConsultation")}
                  <MessageCircle className="ms-2 h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => (window.location.href = "/services")}
                  className="border-border/60 text-foreground hover:border-accent/40 dark:hover:text-white hover:bg-accent/[0.04] dark:hover:bg-accent/7 text-sm sm:text-base px-7 sm:px-8 py-3 rounded-full transition-all duration-300 shadow-none cursor-pointer"
                >
                  {locale === "ar" ? "خدماتنا" : "Our Services"}
                  <ArrowIcon className="ms-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats row — minimal & elegant */}
            <motion.div
              className="flex items-center justify-center"
              variants={itemVariants}
            >
              {statsData.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.12 }}
                >
                  <div className="flex flex-col items-center text-center px-4 sm:px-8 md:px-10">
                    <span className="text-xl sm:text-3xl md:text-4xl font-bold text-foreground font-serif leading-none">
                      {stat.value}
                    </span>
                    <span className="text-[9px] sm:text-xs text-muted-foreground/60 font-medium mt-1 sm:mt-1.5 tracking-wide uppercase">
                      {locale === "ar" ? stat.labelAr : stat.labelEn}
                    </span>
                  </div>
                  {index < statsData.length - 1 && (
                    <div className="w-px h-8 sm:h-10 bg-border/50" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient transition into dark PracticeAreasBar */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-neutral-900/5 pointer-events-none" />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </section>
  );
}
