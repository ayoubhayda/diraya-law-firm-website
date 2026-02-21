"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";

interface Testimonial {
  id: number;
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  content: string;
  contentAr: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Al-Rashid",
    nameAr: "أحمد الراشد",
    role: "Business Owner",
    roleAr: "صاحب شركة",
    content:
      "Exceptional legal service with great attention to detail. Highly professional and trustworthy.",
    contentAr:
      "خدمة قانونية استثنائية مع اهتمام كبير بالتفاصيل. مهني جداً وجدير بالثقة.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    nameAr: "سارة جونسون",
    role: "Real Estate Investor",
    roleAr: "مستثمرة عقارية",
    content:
      "Outstanding expertise in real estate law. Made the complex process simple and stress-free.",
    contentAr:
      "خبرة متميزة في قانون العقارات. جعل العملية المعقدة بسيطة وخالية من التوتر.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mohammed Al-Fahad",
    nameAr: "محمد الفهد",
    role: "Family Client",
    roleAr: "عميل أسري",
    content:
      "Compassionate and skilled representation during a difficult time. Truly grateful for the support.",
    contentAr: "تمثيل رحيم وماهر خلال وقت صعب. ممتن حقاً للدعم المقدم.",
    rating: 5,
  },
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { locale } = useLocale();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <motion.div
      className="relative max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="bg-card border-border overflow-hidden">
        <CardContent className="p-8 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Stars */}
              <motion.div
                className="flex justify-center mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.2 + i * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <Star className="h-5 w-5 text-accent fill-current" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Testimonial Content */}
              <motion.blockquote
                className="text-lg text-foreground mb-6 leading-relaxed italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                "
                {locale === "ar"
                  ? currentTestimonial.contentAr
                  : currentTestimonial.content}
                "
              </motion.blockquote>

              {/* Author */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <p className="font-semibold text-foreground">
                  {locale === "ar"
                    ? currentTestimonial.nameAr
                    : currentTestimonial.name}
                </p>
                <p className="text-muted-foreground text-sm">
                  {locale === "ar"
                    ? currentTestimonial.roleAr
                    : currentTestimonial.role}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden md:block"
      >
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-105"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden md:block"
      >
        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-105"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </motion.div>

      {/* Dots Indicator */}
      <motion.div
        className="flex justify-center mt-6 space-x-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-accent" : "bg-muted"
            }`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              scale: index === currentIndex ? 1.2 : 1,
            }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
