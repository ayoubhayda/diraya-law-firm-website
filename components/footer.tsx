"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import { getTranslation } from "@/lib/i18n";
import Image from "next/image";
import darkLogo from "@/assets/logos/Diraya-Logo-dark.png";
import lightLogo from "@/assets/logos/Diraya-Logo-light.png";
import { motion } from "framer-motion";

export function Footer() {
  const { locale } = useLocale();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: getTranslation(locale, "home"), href: "/" },
    { name: getTranslation(locale, "about"), href: "/about" },
    { name: getTranslation(locale, "services"), href: "/services" },
    { name: getTranslation(locale, "contact"), href: "/contact" },
  ];

  const legalLinks = [
    { name: getTranslation(locale, "privacyPolicy"), href: "/privacy" },
    { name: getTranslation(locale, "termsOfService"), href: "/terms" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Instagram", href: "#", icon: Instagram },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const linkVariants = {
    rest: { x: 0 },
    hover: {
      x: 3,
      transition: {
        duration: 0.2,
      },
    },
  };

  const socialIconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };

  const contactItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <footer className="bg-background border-t border-border text-foreground">
      <motion.div
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Logo and Description */}
          <motion.div
            className="col-span-1 md:col-span-2 text-center md:text-left md:rtl:text-right"
            variants={itemVariants}
          >
            <motion.div
              className="flex items-center justify-center md:justify-start gap-3 rtl:space-x-reverse mb-4 md:mb-6"
              variants={logoVariants}
            >
              {/* Elegant Logo Container */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={lightLogo}
                    alt="Diraya Logo"
                    width={40}
                    height={40}
                    priority
                    className="!w-auto !h-9 sm:!h-10 dark:hidden"
                  />
                  <Image
                    src={darkLogo}
                    alt="Diraya Logo"
                    width={40}
                    height={40}
                    priority
                    className="!w-auto !h-9 sm:!h-10 hidden dark:block"
                  />
                </motion.div>
              </div>

              {/* Logo Text */}
              <div className="hidden md:flex">
                <span
                  className={`text-2xl font-semibold ltr:font-bold leading-tight text-foreground transition-colors duration-300 ${locale === "ar" ? "font-logo-arabic text-[1.7rem]" : "font-serif capitalize "}`}
                >
                  {locale === "ar" ? "دراية" : "Diraya"}
                </span>
              </div>
            </motion.div>

            <motion.p
              className="text-foreground/70 mb-4 md:mb-6 max-w-md mx-auto md:mx-0 leading-relaxed text-sm md:text-base"
              variants={itemVariants}
            >
              {locale === "ar"
                ? "نقدم خدمات قانونية متميزة بخبرة واسعة ونزاهة مهنية عالية. نحن هنا لحماية حقوقكم وتقديم أفضل الاستشارات القانونية."
                : "We provide exceptional legal services with extensive experience and high professional integrity. We are here to protect your rights and provide the best legal consultation."}
            </motion.p>

            {/* Contact Info - Hidden on mobile for minimal design */}
            <motion.div
              className="hidden md:block space-y-2"
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center gap-3 rtl:space-x-reverse"
                variants={contactItemVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="h-4 w-4 text-accent" />
                <span
                  className="text-sm"
                  dir="ltr"
                  style={{ textAlign: locale === "ar" ? "right" : "left" }}
                >
                  +212 537-123456
                </span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 rtl:space-x-reverse"
                variants={contactItemVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">contact@diraya-law.ma</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 rtl:space-x-reverse"
                variants={contactItemVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">
                  {locale === "ar"
                    ? "الرباط، المملكة المغربية"
                    : "Rabat, Morocco"}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Quick Links - Hidden on mobile for minimal design */}
          <motion.div className="hidden md:block" variants={itemVariants}>
            <motion.h3
              className="text-lg font-semibold mb-4"
              variants={itemVariants}
            >
              {locale === "ar" ? "روابط سريعة" : "Quick Links"}
            </motion.h3>
            <motion.ul className="space-y-2" variants={containerVariants}>
              {quickLinks.map((link, index) => (
                <motion.li key={link.name} variants={itemVariants}>
                  <motion.div
                    variants={linkVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <Link
                      href={link.href}
                      className="text-foreground/70 hover:text-accent transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Legal Links & Social - Hidden on mobile for minimal design */}
          <motion.div className="hidden md:block" variants={itemVariants}>
            <motion.h3
              className="text-lg font-semibold mb-4"
              variants={itemVariants}
            >
              {locale === "ar" ? "قانوني" : "Legal"}
            </motion.h3>
            <motion.ul className="space-y-2 mb-6" variants={containerVariants}>
              {legalLinks.map((link) => (
                <motion.li key={link.name} variants={itemVariants}>
                  <motion.div
                    variants={linkVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <Link
                      href={link.href}
                      className="text-foreground/70 hover:text-accent transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>

            {/* Social Media */}
            <motion.div variants={itemVariants}>
              <motion.h4
                className="text-sm font-semibold mb-3"
                variants={itemVariants}
              >
                {locale === "ar" ? "تابعنا" : "Follow Us"}
              </motion.h4>
              <motion.div
                className="flex gap-4 rtl:space-x-reverse"
                variants={containerVariants}
              >
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.div
                      key={social.name}
                      variants={socialIconVariants}
                      initial="rest"
                      whileHover="hover"
                    >
                      <Link
                        href={social.href}
                        className="text-foreground/70 hover:text-accent transition-colors duration-200"
                      >
                        <Icon className="h-5 w-5" />
                        <span className="sr-only">{social.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Mobile-only Social Media - Centered */}
          <motion.div className="md:hidden text-center" variants={itemVariants}>
            <motion.h4
              className="text-sm font-semibold mb-4"
              variants={itemVariants}
            >
              {locale === "ar" ? "تابعنا" : "Follow Us"}
            </motion.h4>
            <motion.div
              className="flex justify-center gap-6"
              variants={containerVariants}
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.div
                    key={social.name}
                    variants={socialIconVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <Link
                      href={social.href}
                      className="text-foreground/70 hover:text-accent transition-colors duration-200"
                    >
                      <Icon className="h-6 w-6" />
                      <span className="sr-only">{social.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border text-foreground/20"
          variants={itemVariants}
        >
          <motion.p
            className="text-center text-foreground/60 text-xs md:text-sm"
            variants={itemVariants}
          >
            © {currentYear} {locale === "ar" ? "دراية" : "DIRAYA"}.{" "}
            {getTranslation(locale, "copyright")}
          </motion.p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
