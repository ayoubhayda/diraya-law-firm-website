"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionBadge } from "@/components/section-badge";
import {
  ArrowRight,
  ArrowLeft,
  Award,
  Users,
  CheckCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import Link from "next/link";
import { motion } from "framer-motion";

export function AboutPreview() {
  const { locale } = useLocale();
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  const achievements = [
    {
      icon: Award,
      title: locale === "ar" ? "جوائز مهنية" : "Professional Awards",
      description: locale === "ar" ? "محلياً ودولياً" : "Local & global",
    },
    {
      icon: Users,
      title: locale === "ar" ? "عملاء راضون" : "Satisfied Clients",
      description: locale === "ar" ? "+500 عميل" : "500+ clients",
    },
    {
      icon: Clock,
      title: locale === "ar" ? "خبرة واسعة" : "Extensive Experience",
      description: locale === "ar" ? "15+ سنة" : "15+ years",
    },
  ];

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

  const achievementVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const valueVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const floatingCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.8,
      },
    },
  };

  const mobileStatsVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout - Completely redesigned minimal centered design */}
        <motion.div
          className="lg:hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Mobile Image - Compact with floating badge */}
          <motion.div className="relative mb-10" variants={imageVariants}>
            <div className="relative mx-auto max-w-sm">
              <motion.div
                className="relative overflow-hidden rounded-2xl "
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src="/professional-lawyer-portrait.webp"
                  alt="Professional Lawyer"
                  className="w-full h-[350px] object-cover object-top rounded-2xl border border-white dark:border-black"
                />
                {/* Elegant gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              </motion.div>

              {/* Floating Experience Badge - Mobile */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2"
                variants={mobileStatsVariants}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <div className="flex items-center gap-2 bg-background/95 backdrop-blur-sm border border-accent/20 rounded-full px-5 py-2.5">
                  <span className="text-accent font-bold text-lg">15+</span>
                  <span className="text-muted-foreground text-sm font-medium">
                    {locale === "ar" ? "سنوات خبرة" : "Years Experience"}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile Content - Centered and minimal */}
          <div className="text-center space-y-5">
            {/* Title */}
            <motion.h2
              className="text-2xl font-bold text-foreground font-serif"
              variants={itemVariants}
            >
              {locale === "ar" ? "عن المحامي" : "About the Office"}
            </motion.h2>

            {/* Description - Concise for mobile */}
            <motion.p
              className="text-muted-foreground text-base leading-relaxed max-w-xs mx-auto"
              variants={itemVariants}
            >
              {locale === "ar"
                ? "خبرة 15+ عاماً في تقديم خدمات قانونية متميزة بنزاهة ومهنية عالية"
                : "15+ years of delivering exceptional legal services with integrity and professionalism"}
            </motion.p>

            {/* Achievements - Mobile: Minimal horizontal pills */}
            <motion.div
              className="flex justify-center gap-2 flex-wrap max-w-xs mx-auto"
              variants={containerVariants}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-1.5 bg-accent/5 border border-accent/10 rounded-full px-3 py-1.5"
                  variants={mobileStatsVariants}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <achievement.icon className="h-3.5 w-3.5 text-accent" />
                  <span className="text-foreground text-xs font-medium">
                    {achievement.description}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Core Values - Mobile: Elegant cards */}
            <motion.div className="space-y-4 pt-4" variants={itemVariants}>
              <h3 className="text-lg font-semibold text-foreground font-serif">
                {locale === "ar" ? "قيمنا الأساسية" : "Our Core Values"}
              </h3>
              <div className="flex flex-col gap-3 max-w-sm mx-auto">
                {[
                  locale === "ar"
                    ? "النزاهة والشفافية في جميع التعاملات"
                    : "Integrity and transparency in all dealings",
                  locale === "ar"
                    ? "التفاني في خدمة العملاء وحماية حقوقهم"
                    : "Dedication to client service and rights protection",
                  locale === "ar"
                    ? "الخبرة المهنية والتطوير المستمر"
                    : "Professional expertise and continuous development",
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 bg-accent/5 border border-accent/10 rounded-xl px-4 py-3 text-start"
                    variants={valueVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/20">
                        <CheckCircle className="h-3.5 w-3.5 text-accent" />
                      </div>
                    </div>
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button - Mobile: Centered */}

            <motion.div className="pt-4" variants={itemVariants}>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="group border-accent dark:border-border dark:hover:border-accent text-accent hover:bg-accent hover:text-white bg-transparent transition-all duration-300 cursor-pointer shadow-none"
                >
                  {locale === "ar" ? "اعرف المزيد عنا" : "Learn More About Us"}
                  <ArrowIcon className="ms-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Desktop Layout - Original design preserved */}
        <motion.div
          className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Content Side */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            <motion.div
              className="space-y-4 sm:space-y-6"
              variants={itemVariants}
            >
              {/* Section Badge - Desktop */}
              <SectionBadge
                text={locale === "ar" ? "من نحن" : "About Us"}
                icon={Sparkles}
                variant="gold"
                className="mb-2"
              />
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-serif leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {locale === "ar" ? "عن المحامي" : "About the Office"}
              </motion.h2>
              <motion.p
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                {locale === "ar"
                  ? "بخبرة تزيد عن 15 عاماً في الممارسة القانونية، نقدم خدمات قانونية متميزة تتسم بالنزاهة والمهنية العالية. نحن ملتزمون بحماية حقوق عملائنا وتحقيق أفضل النتائج في جميع القضايا."
                  : "With over 15 years of legal practice experience, we provide exceptional legal services characterized by integrity and high professionalism. We are committed to protecting our clients' rights and achieving the best results in all cases."}
              </motion.p>
            </motion.div>

            {/* Achievements - Desktop */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={achievementVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400, damping: 17 },
                  }}
                >
                  <motion.div
                    className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10"
                    whileHover={{ backgroundColor: "rgba(var(--accent), 0.2)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <achievement.icon className="h-6 w-6 text-accent" />
                    </motion.div>
                  </motion.div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Values */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.h3
                className="text-xl sm:text-2xl font-semibold text-foreground"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {locale === "ar" ? "قيمنا الأساسية" : "Our Core Values"}
              </motion.h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  locale === "ar"
                    ? "النزاهة والشفافية في جميع التعاملات"
                    : "Integrity and transparency in all dealings",
                  locale === "ar"
                    ? "التفاني في خدمة العملاء وحماية حقوقهم"
                    : "Dedication to client service and rights protection",
                  locale === "ar"
                    ? "الخبرة المهنية والتطوير المستمر"
                    : "Professional expertise and continuous development",
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 sm:gap-4 group"
                    variants={valueVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      x: 5,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      },
                    }}
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CheckCircle className="h-5 w-5 text-accent group-hover:scale-110 transition-transform duration-300" />
                      </motion.div>
                    </div>
                    <span className="text-muted-foreground text-base sm:text-lg leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      {value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="pt-2 sm:pt-4"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 17 },
              }}
            >
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="group border-accent dark:border-border dark:hover:border-accent text-accent hover:bg-accent hover:text-white bg-transparent px-6 sm:px-8 py-3 text-base sm:text-lg font-medium transition-all duration-300 cursor-pointer"
                >
                  {locale === "ar" ? "اعرف المزيد عنا" : "Learn More About Us"}
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowIcon className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Image Side */}
          <motion.div
            className="relative order-first lg:order-last"
            variants={imageVariants}
          >
            <div className="relative group">
              {/* Main Image Container */}
              <motion.div
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent/5 to-accent/10 p-2"
                whileHover={{
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/professional-lawyer-portrait.webp"
                    alt="Professional Lawyer"
                    className="w-full h-[500px] sm:h-[600px] lg:h-[700px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>

              {/* Floating Achievement Card - Enhanced */}
              <motion.div
                className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 lg:-bottom-12 lg:-right-12"
                variants={floatingCardVariants}
                whileHover={{
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
              >
                <Card className="bg-background/95 backdrop-blur-md border border-accent/20 hover:border-accent/30 transition-all duration-300 group/card">
                  <CardContent className="px-6 py-y sm:px-8 sm:py-3 text-center relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent mb-2 group-hover/card:scale-110 transition-transform duration-300">
                        15+
                      </div>
                      <div className="text-muted-foreground font-medium text-xs sm:text-sm">
                        {locale === "ar" ? "سنوات خبرة" : "Years Experience"}
                      </div>
                      {/* Decorative element */}
                      <motion.div
                        className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-accent/20 group-hover/card:bg-accent/30 transition-colors duration-300"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      ></motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
