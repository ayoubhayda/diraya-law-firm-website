"use client";

import type React from "react";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { BookingModal } from "@/components/booking-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import { motion } from "framer-motion";
import { SectionSeparator } from "@/components/section-separator";

export default function ContactPage() {
  const { locale } = useLocale();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      labelAr: "الهاتف",
      labelEn: "Phone",
      valueAr: "+212 537-123456",
      valueEn: "+212 537-123456",
      href: "tel:+212537123456",
    },
    {
      icon: Mail,
      labelAr: "البريد الإلكتروني",
      labelEn: "Email",
      valueAr: "contact@diraya-law.ma",
      valueEn: "contact@diraya-law.ma",
      href: "mailto:contact@diraya-law.ma",
    },
    {
      icon: MapPin,
      labelAr: "العنوان",
      labelEn: "Address",
      valueAr: "شارع محمد الخامس، حي أكدال، الرباط",
      valueEn: "Mohammed V Avenue, Agdal, Rabat",
    },
    {
      icon: Clock,
      labelAr: "ساعات العمل",
      labelEn: "Office Hours",
      valueAr: "الإثنين - الجمعة: 9:00 ص - 6:00 م",
      valueEn: "Mon - Fri: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero Section — Elegant, minimal, matching main hero */}
        <section className="relative pt-10 pb-2 lg:pt-16 bg-background overflow-hidden">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              {/* Badge pill */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.06] mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-medium text-accent tracking-wide">
                  {locale === "ar" ? "تواصل معنا" : "Get in Touch"}
                </span>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4 md:mb-6 text-balance"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                {locale === "ar" ? "نحن هنا لمساعدتك" : "We're Here to Help"}
              </motion.h1>
              <motion.p
                className="text-base md:text-lg text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {locale === "ar"
                  ? "لا تتردد في التواصل معنا للحصول على استشارة قانونية متخصصة"
                  : "Don't hesitate to reach out for specialized legal consultation"}
              </motion.p>

              {/* Decorative divider */}
              <motion.div
                className="flex items-center justify-center gap-3 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/30" />
                <div className="w-1.5 h-1.5 rotate-45 bg-accent/40" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/30" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content — Split Layout */}
        <section className="py-12 md:py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
              {/* Left Column — Contact Info */}
              <motion.div
                className="lg:col-span-5"
                initial={{ opacity: 0, x: locale === "ar" ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Section Header */}
                <div className="mb-8 md:mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-px bg-accent" />
                    <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">
                      {locale === "ar" ? "تواصل معنا" : "Contact"}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-3">
                    {locale === "ar"
                      ? "معلومات التواصل"
                      : "Contact Information"}
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-sm">
                    {locale === "ar"
                      ? "يسعدنا تلقي استفساراتكم والرد عليها في أقرب وقت ممكن."
                      : "We're happy to receive your inquiries and respond as soon as possible."}
                  </p>
                </div>

                {/* Contact Items — Mobile: elegant stacked cards */}
                <div className="flex flex-col gap-3 md:hidden">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      className="group flex items-center gap-4 p-4 rounded-md border border-border/60 bg-card hover:border-accent/20 transition-all duration-300"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.06 }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                        <item.icon className="w-4 h-4 text-accent" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] text-muted-foreground/70 uppercase tracking-wider mb-0.5">
                          {locale === "ar" ? item.labelAr : item.labelEn}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-foreground rtl:text-end font-medium text-sm hover:text-accent transition-colors truncate block"
                            dir="ltr"
                          >
                            {locale === "ar" ? item.valueAr : item.valueEn}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium text-sm truncate">
                            {locale === "ar" ? item.valueAr : item.valueEn}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Contact Items — Desktop/Tablet: clean list with dividers */}
                <div className="hidden md:block">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                    >
                      <div className="group flex items-center gap-5 py-5 cursor-default">
                        <div className="flex-shrink-0 w-12 h-12 rounded-md bg-accent/5 border border-accent/10 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/20 transition-all duration-300">
                          <item.icon className="w-5 h-5 text-accent" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[11px] text-muted-foreground/60 uppercase tracking-[0.15em] mb-1">
                            {locale === "ar" ? item.labelAr : item.labelEn}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-foreground font-medium text-[15px] hover:text-accent transition-colors duration-200"
                              dir="ltr"
                            >
                              {locale === "ar" ? item.valueAr : item.valueEn}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium text-[15px]">
                              {locale === "ar" ? item.valueAr : item.valueEn}
                            </p>
                          )}
                        </div>
                      </div>
                      {index < contactInfo.length - 1 && (
                        <div className="h-px bg-border/50" />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Booking CTA */}
                <motion.div
                  className="mt-6.5 sm:mt-8 pt-6.5 border-t border-border/50"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                    <p className="text-sm text-muted-foreground flex-1 sm:hidden">
                      {locale === "ar"
                        ? "هل تفضل حجز موعد مباشر؟"
                        : "Prefer to book an appointment directly?"}
                    </p>
                    <Button
                      variant="outline"
                      size="lg"
                      className="group relative w-full border-accent/25 hover:border-accent/60 hover:bg-accent/5 text-foreground transition-all duration-300 h-11 px-6 shadow-none"
                      onClick={() => setIsBookingModalOpen(true)}
                    >
                      <span className="text-sm font-medium">
                        {locale === "ar"
                          ? "احجز استشارة"
                          : "Book a Consultation"}
                      </span>
                      <ArrowUpRight className="w-4 h-4 ltr:ml-2 rtl:mr-2 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </Button>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column — Form */}
              <motion.div
                className="lg:col-span-7"
                initial={{ opacity: 0, x: locale === "ar" ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="bg-card border border-border/60 rounded-md p-6 sm:p-8 md:p-10 lg:p-12">
                  {isSubmitted ? (
                    <motion.div
                      className="flex flex-col items-center justify-center py-16 md:py-20 text-center"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="w-16 h-16 rounded-md bg-success/10 border border-success/20 flex items-center justify-center mb-6">
                        <CheckCircle className="w-7 h-7 text-success" />
                      </div>
                      <h3 className="text-2xl font-bold font-serif text-foreground mb-2">
                        {locale === "ar"
                          ? "تم إرسال رسالتك بنجاح"
                          : "Message Sent Successfully"}
                      </h3>
                      <p className="text-muted-foreground text-sm max-w-xs">
                        {locale === "ar"
                          ? "سنتواصل معك في أقرب وقت ممكن"
                          : "We'll get back to you as soon as possible"}
                      </p>
                    </motion.div>
                  ) : (
                    <>
                      {/* Form Header */}
                      <div className="mb-8 md:mb-10">
                        <h3 className="text-xl md:text-2xl font-bold font-serif text-foreground mb-2">
                          {locale === "ar"
                            ? "أرسل لنا رسالة"
                            : "Send Us a Message"}
                        </h3>
                        <p className="text-sm text-muted-foreground/80">
                          {locale === "ar"
                            ? "املأ النموذج أدناه وسنتواصل معك قريباً"
                            : "Fill in the form below and we'll reach out soon"}
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name & Email Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                          <div className="space-y-2.5">
                            <label
                              htmlFor="name"
                              className="text-[13px] font-medium text-foreground/80 tracking-wide"
                            >
                              {locale === "ar" ? "الاسم الكامل" : "Full Name"}{" "}
                              <span className="text-accent/70">*</span>
                            </label>
                            <Input
                              id="name"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder={
                                locale === "ar"
                                  ? "أدخل اسمك الكامل"
                                  : "Enter your full name"
                              }
                              className="bg-background/50 border-border/40 focus:border-accent/40 focus:bg-background h-12 rounded-md transition-all duration-200"
                            />
                          </div>
                          <div className="space-y-2.5">
                            <label
                              htmlFor="email"
                              className="text-[13px] font-medium text-foreground/80 tracking-wide"
                            >
                              {locale === "ar" ? "البريد الإلكتروني" : "Email"}{" "}
                              <span className="text-accent/70">*</span>
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder={
                                locale === "ar"
                                  ? "example@email.com"
                                  : "example@email.com"
                              }
                              dir="ltr"
                              className="bg-background/50 border-border/40 rtl:text-end focus:border-accent/40 focus:bg-background h-12 rounded-md transition-all duration-200"
                            />
                          </div>
                        </div>

                        {/* Phone & Subject Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                          <div className="space-y-2.5">
                            <label
                              htmlFor="phone"
                              className="text-[13px] font-medium text-foreground/80 tracking-wide"
                            >
                              {locale === "ar" ? "رقم الهاتف" : "Phone Number"}
                            </label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder={
                                locale === "ar"
                                  ? "+212 6XX-XXXXXX"
                                  : "+212 6XX-XXXXXX"
                              }
                              dir="ltr"
                              className="bg-background/50 border-border/40 rtl:text-end focus:border-accent/40 focus:bg-background h-12 rounded-md transition-all duration-200"
                            />
                          </div>
                          <div className="space-y-2.5">
                            <label
                              htmlFor="subject"
                              className="text-[13px] font-medium text-foreground/80 tracking-wide"
                            >
                              {locale === "ar" ? "الموضوع" : "Subject"}{" "}
                              <span className="text-accent/70">*</span>
                            </label>
                            <Input
                              id="subject"
                              name="subject"
                              required
                              value={formData.subject}
                              onChange={handleInputChange}
                              placeholder={
                                locale === "ar"
                                  ? "موضوع الرسالة"
                                  : "Message subject"
                              }
                              className="bg-background/50 border-border/40 focus:border-accent/40 focus:bg-background h-12 rounded-md transition-all duration-200"
                            />
                          </div>
                        </div>

                        {/* Message */}
                        <div className="space-y-2.5">
                          <label
                            htmlFor="message"
                            className="text-[13px] font-medium text-foreground/80 tracking-wide"
                          >
                            {locale === "ar" ? "الرسالة" : "Message"}{" "}
                            <span className="text-accent/70">*</span>
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder={
                              locale === "ar"
                                ? "اكتب رسالتك هنا..."
                                : "Write your message here..."
                            }
                            rows={5}
                            className="bg-background/50 border-border/40 focus:border-accent/40 focus:bg-background rounded-md resize-none transition-all duration-200"
                          />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full h-12 bg-accent hover:bg-accent/90 text-white rounded-md text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-accent/15"
                          >
                            {isSubmitting ? (
                              <span className="flex items-center gap-2.5">
                                <svg
                                  className="animate-spin h-4 w-4"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    fill="none"
                                  />
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  />
                                </svg>
                                {locale === "ar"
                                  ? "جاري الإرسال..."
                                  : "Sending..."}
                              </span>
                            ) : (
                              <span className="flex items-center gap-2.5">
                                <Send className="w-4 h-4" />
                                {locale === "ar"
                                  ? "إرسال الرسالة"
                                  : "Send Message"}
                              </span>
                            )}
                          </Button>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map / Location Section — Minimal */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <motion.div
              className="text-center max-w-xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-3">
                {locale === "ar" ? "موقعنا" : "Our Location"}
              </h2>
              <p className="text-muted-foreground">
                {locale === "ar"
                  ? "نرحب بزيارتكم في مكتبنا بالرباط"
                  : "We welcome your visit at our Rabat office"}
              </p>
            </motion.div>

            <motion.div
              className="rounded-md overflow-hidden border border-border h-[350px] md:h-[450px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.7652894186!2d-6.8498!3d33.9916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c7953be1c45%3A0x3c45e2db63e2e2ba!2sAgdal%2C%20Rabat!5e0!3m2!1sen!2sma!4v1706500000000!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={
                  locale === "ar"
                    ? "موقع مكتب دراية للمحاماة"
                    : "Diraya Law Office Location"
                }
              />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}
