"use client";

import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ArrowLeft } from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import { useConsultationModal } from "@/hooks/use-consultation-modal";
import { FreeConsultationModelButton } from "./free-consultation-model-button";
import { ConsultationModal } from "./consultation-modal";
import { motion } from "framer-motion";

export function CTASection() {
  const { locale } = useLocale();
  const { isOpen, openModal, closeModal } = useConsultationModal();

  return (
    <section className="relative py-12 md:py-20 bg-[#060a12] text-white overflow-hidden">
      {/* Subtle decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 lg:h-12 bg-gradient-to-b from-transparent via-accent/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-accent text-sm font-medium tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {locale === "ar" ? "تواصل معنا" : "Get In Touch"}
          </motion.p>

          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-serif text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {locale === "ar"
              ? "هل تحتاج إلى استشارة قانونية؟"
              : "Need Legal Consultation?"}
          </motion.h2>

          <motion.p
            className="text-sm md:text-lg text-white/60 mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {locale === "ar"
              ? "تواصل معنا الآن للحصول على استشارة قانونية مهنية ومتخصصة"
              : "Contact us now for professional and specialized legal consultation"}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FreeConsultationModelButton onClick={openModal} />
            <ConsultationModal isOpen={isOpen} onClose={closeModal} />
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:border-accent hover:text-accent bg-transparent hover:bg-transparent cursor-pointer"
            >
              {locale === "ar" ? "اتصل بنا" : "Call Us"}
              <Phone className="ms-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
