"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import { getTranslation } from "@/lib/i18n";
import { ServiceConsultationModal } from "./service-consultation-modal";
import { useState } from "react";
import { motion } from "framer-motion";

export function HeroSection() {
  const { locale } = useLocale();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  // Stats data for cleaner code
  const statsData = [
    {
      value: "10+",
      labelAr: "سنوات خبرة",
      labelEn: "Years Experience",
      delay: 0.8,
    },
    {
      value: "120+",
      labelAr: "عميل راضي",
      labelEn: "Happy Clients",
      delay: 0.9,
    },
    {
      value: "95%",
      labelAr: "معدل النجاح",
      labelEn: "Success Rate",
      delay: 1.0,
    },
    {
      value: "24/7",
      labelAr: "دعم متاح",
      labelEn: "Support Available",
      delay: 1.1,
    },
  ];

  return (
    <section className="relative h-[calc(100vh-64px)] lg:h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src="/elegant-law-office.webp"
          alt="Law Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 md:mb-6 font-serif text-balance"
            variants={titleVariants}
          >
            {locale === "ar" ? (
              <>
                <motion.span
                  className="block text-white mb-2 md:mb-3"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  استشارات قانونية
                </motion.span>
                <motion.span
                  className="block text-accent"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                  متخصصة
                </motion.span>
              </>
            ) : (
              <>
                <motion.span
                  className="block text-white mb-2 md:mb-3"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  Expert Legal
                </motion.span>
                <motion.span
                  className="block text-accent"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                  Consultation
                </motion.span>
              </>
            )}
          </motion.h1>

          {/* hero subtitle */}
          <motion.p
            className="text-white/90 mb-6 md:mb-8 leading-relaxed text-pretty max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {/* Mobile: Short subtitle */}
            <span className="block md:hidden text-base">
              {locale === "ar"
                ? "نحمي حقوقكم بنزاهة وتفان"
                : "Protecting your rights with integrity"}
            </span>
            {/* Desktop: Full subtitle */}
            <span className="hidden md:block text-lg md:text-2xl">
              {locale === "ar"
                ? "خدمات قانونية مهنية بنزاهة وتفان لحماية حقوقكم وتحقيق العدالة"
                : "Professional legal services with integrity and dedication to protect your rights and achieve justice"}
            </span>
          </motion.p>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col items-center gap-6 mb-8 md:mb-12"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                onClick={() => setIsConsultationOpen(true)}
                className="bg-accent/10 backdrop-blur-sm border border-accent/20 text-accent hover:bg-accent/20 hover:border-accent/30 text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 w-full sm:w-auto max-w-xs"
              >
                {getTranslation(locale, "getConsultation")}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <MessageCircle className="ms-2 h-4 w-4 sm:h-5 sm:w-5" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Section - Mobile: Minimal horizontal badges, Desktop: Floating Cards */}

          {/* Mobile Stats - Minimal Horizontal Scroll */}
          <motion.div
            className="md:hidden flex justify-center gap-3 flex-wrap max-w-sm mx-auto"
            variants={statsContainerVariants}
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-3.5 py-1.5"
                variants={statsVariants}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: stat.delay, duration: 0.4 }}
              >
                <span className="text-accent font-semibold text-sm tracking-tight">
                  {stat.value}
                </span>
                <span className="text-white/80 text-xs">
                  {locale === "ar" ? stat.labelAr : stat.labelEn}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Desktop Stats - Floating Cards Grid */}
          <motion.div
            className="hidden md:grid md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto px-4"
            variants={statsContainerVariants}
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={statsVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <motion.div
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-2 font-serif"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: stat.delay,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-white text-sm font-medium leading-tight">
                    {locale === "ar" ? stat.labelAr : stat.labelEn}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      <ServiceConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        serviceName={""}
      />
    </section>
  );
}
