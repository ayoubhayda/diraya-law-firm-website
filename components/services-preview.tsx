"use client";

import { ServiceCard } from "@/components/service-card";
import { SectionBadge } from "@/components/section-badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  Home,
  Briefcase,
  Shield,
  ArrowRight,
  ArrowLeft,
  Scale,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import { getTranslation } from "@/lib/i18n";
import Link from "next/link";
import { motion } from "framer-motion";

export function ServicesPreview() {
  const { locale } = useLocale();
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  const services = [
    {
      icon: Users,
      title: locale === "ar" ? "قانون الأسرة" : "Family Law",
      description:
        locale === "ar"
          ? "استشارات شاملة في قضايا الأسرة والزواج والطلاق وحضانة الأطفال"
          : "Comprehensive consultation on family matters, marriage, divorce, and child custody",
      slug: "family-law",
    },
    {
      icon: Home,
      title: locale === "ar" ? "العقارات" : "Real Estate",
      description:
        locale === "ar"
          ? "خدمات قانونية متكاملة في المعاملات العقارية والاستثمار العقاري"
          : "Complete legal services for real estate transactions and property investment",
      slug: "real-estate",
    },
    {
      icon: Briefcase,
      title: locale === "ar" ? "القانون التجاري" : "Business Law",
      description:
        locale === "ar"
          ? "استشارات قانونية للشركات والعقود التجارية والاستثمار"
          : "Legal consultation for companies, commercial contracts, and investment",
      slug: "business-law",
    },
    {
      icon: Shield,
      title: locale === "ar" ? "الدفاع الجنائي" : "Criminal Defense",
      description:
        locale === "ar"
          ? "تمثيل قانوني قوي في القضايا الجنائية وحماية الحقوق"
          : "Strong legal representation in criminal cases and rights protection",
      slug: "criminal-defense",
    },
  ];

  // Animation variants
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const serviceCardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8,
      },
    },
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionBadge
            text={locale === "ar" ? "خدماتنا" : "Our Services"}
            icon={Scale}
            variant="gold"
            className="mb-4 sm:mb-5"
          />
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif text-balance"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {getTranslation(locale, "servicesTitle")}
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {locale === "ar"
              ? "نقدم مجموعة شاملة من الخدمات القانونية المتخصصة لتلبية احتياجاتكم القانونية المختلفة"
              : "We offer a comprehensive range of specialized legal services to meet your diverse legal needs"}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 mb-10 sm:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={serviceCardVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 17 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={`/services/${service.slug}`}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Mobile CTA Button */}
          <motion.div>
            <Link href="/services">
              <Button
                variant="outline"
                className="group border-accent dark:border-border dark:hover:border-accent text-accent hover:bg-accent hover:text-white bg-transparent transition-all duration-300 cursor-pointer shadow-none sm:hidden"
              >
                {locale === "ar" ? "عرض جميع الخدمات" : "View All Services"}
                <ArrowIcon className="ms-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>

          {/* Desktop CTA Button */}
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 17 },
            }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center"
          >
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-white dark:hover:bg-accent dark:border-border bg-transparent transition-all cursor-pointer hidden sm:flex"
              >
                {locale === "ar" ? "عرض جميع الخدمات" : "View All Services"}
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowIcon className="ml-2 h-5 w-5" />
                </motion.div>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
