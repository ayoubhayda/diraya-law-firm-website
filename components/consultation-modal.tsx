"use client";

import type React from "react";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLocale } from "@/hooks/use-locale-context";
import { MessageCircle, X, User, CheckCircle } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const { locale } = useLocale();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    legalIssue: "",
    message: "",
  });

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Consultation form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        legalIssue: "",
        message: "",
      });
      onClose();
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid = formData.name && formData.email && formData.phone;

  if (isSubmitted) {
    return (
      <Dialog open={isOpen && !isMobile} onOpenChange={onClose}>
        <DialogContent
          className={`
          [&>button]:hidden
          ${
            isMobile
              ? "fixed bottom-0 left-0 right-0 top-auto translate-x-0 translate-y-0 rounded-t-2xl rounded-b-none border-t data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom max-w-full w-full"
              : "sm:max-w-md"
          }
        `}
        >
          <div className="text-center py-8 px-6">
            <div className="relative mx-auto mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800/30">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-green-500 animate-ping" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {locale === "ar"
                ? "تم إرسال طلبكم بنجاح!"
                : "Request Submitted Successfully!"}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto mb-4">
              {locale === "ar"
                ? "سنتواصل معكم خلال 24 ساعة لتحديد موعد الاستشارة. شكراً لثقتكم في خدماتنا."
                : "We will contact you within 24 hours to schedule your consultation. Thank you for trusting our services."}
            </p>
            <div className="pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground">
                {locale === "ar" ? "رقم المرجع: " : "Reference ID: "}
                <span className="font-mono text-accent">
                  #{Date.now().toString().slice(-6)}
                </span>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen && !isMobile} onOpenChange={onClose}>
      <DialogContent
        className={`
        overflow-hidden p-0 [&>button]:hidden
        ${
          isMobile
            ? "fixed bottom-0 left-0 right-0 top-auto translate-x-0 translate-y-0 rounded-t-2xl rounded-b-none border-t data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom max-w-full w-full max-h-[90vh] overflow-y-auto"
            : "sm:max-w-2xl max-h-[85vh]"
        }
      `}
      >
        {/* Mobile Drawer Handle */}
        {isMobile && (
          <div className="flex justify-center pt-3 pb-2">
            <div className="w-12 h-1 bg-muted-foreground/30 rounded-full" />
          </div>
        )}

        {/* Header Section */}
        <div
          className={`border-b border-border/50 ${isMobile ? "p-4 pb-3" : "p-6 pb-4"}`}
        >
          {isMobile ? (
            /* Minimal Mobile Header */
            <div className="flex items-center justify-between">
              <DialogTitle className="text-lg font-semibold text-foreground">
                {locale === "ar" ? "استشارة مجانية" : "Free Consultation"}
              </DialogTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-7 w-7 rounded-full hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <X className="h-3.5 w-3.5" />
              </Button>
            </div>
          ) : (
            /* Full Desktop Header */
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <MessageCircle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <DialogTitle className="text-xl font-semibold text-foreground">
                    {locale === "ar"
                      ? "احصل على استشارتك المجانية اليوم"
                      : "Get Your Free Consultation Today"}
                  </DialogTitle>
                  <p className="text-sm text-muted-foreground">
                    {locale === "ar"
                      ? "مشورة قانونية خبيرة مصممة لاحتياجاتك"
                      : "Expert legal advice tailored to your needs"}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-8 w-8 rounded-full hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        {/* Form Content */}
        <div className={`flex-1 p-6 ${isMobile ? "overflow-y-auto" : ""}`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <User className="h-4 w-4 text-accent" />
                <h3 className="text-lg font-medium text-foreground">
                  {locale === "ar" ? "معلومات الاتصال" : "Contact Information"}
                </h3>
              </div>

              <div
                className={`grid gap-4 ${isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}
              >
                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    {locale === "ar" ? "الاسم الكامل" : "Full Name"} *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder={
                      locale === "ar"
                        ? "أدخل اسمكم الكامل"
                        : "Enter your full name"
                    }
                    className="h-10 border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all duration-200 text-start rtl:text-right"
                    dir={locale === "ar" ? "rtl" : "ltr"}
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    {locale === "ar" ? "البريد الإلكتروني" : "Email Address"} *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder={
                      locale === "ar"
                        ? "أدخل بريدكم الإلكتروني"
                        : "Enter your email address"
                    }
                    className="h-10 border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all duration-200 text-start rtl:text-right"
                    dir={locale === "ar" ? "rtl" : "ltr"}
                    required
                  />
                </div>
              </div>

              <div
                className={`grid gap-4 ${isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}
              >
                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="phone"
                    className="text-sm font-medium text-foreground"
                  >
                    {locale === "ar" ? "رقم الهاتف" : "Phone Number"} *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder={
                      locale === "ar"
                        ? "أدخل رقم هاتفكم"
                        : "Enter your phone number"
                    }
                    className="h-10 border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all duration-200 text-start rtl:text-right"
                    dir={locale === "ar" ? "rtl" : "ltr"}
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="legalIssue"
                    className="text-sm font-medium text-foreground"
                  >
                    {locale === "ar"
                      ? "نوع القضية القانونية"
                      : "Legal Issue Type"}
                  </Label>
                  <Input
                    id="legalIssue"
                    value={formData.legalIssue}
                    onChange={(e) =>
                      handleInputChange("legalIssue", e.target.value)
                    }
                    placeholder={
                      locale === "ar"
                        ? "مثال: قانون الأسرة، قانون الأعمال"
                        : "e.g., Family Law, Business Law"
                    }
                    className="h-10 border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all duration-200 text-start rtl:text-right"
                    dir={locale === "ar" ? "rtl" : "ltr"}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  {locale === "ar"
                    ? "اوصف مسألتك القانونية"
                    : "Describe Your Legal Matter"}
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder={
                    locale === "ar"
                      ? "يرجى وصف مسألتكم القانونية بالتفصيل..."
                      : "Please describe your legal matter in detail..."
                  }
                  rows={4}
                  className="border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all duration-200 resize-none text-start rtl:text-right"
                  dir={locale === "ar" ? "rtl" : "ltr"}
                />
                <p className="text-xs text-muted-foreground">
                  {locale === "ar"
                    ? "كلما كانت التفاصيل أكثر، كلما استطعنا مساعدتكم بشكل أفضل"
                    : "The more details you provide, the better we can assist you"}
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-border/50">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  type="submit"
                  disabled={!isFormValid}
                  className="flex-1 h-10 bg-accent text-white hover:bg-accent/90 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {locale === "ar"
                    ? "جدولة الاستشارة"
                    : "Schedule Consultation"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="h-10 px-6 border-border/50 hover:border-accent/50 hover:text-white transition-all duration-200"
                >
                  {locale === "ar" ? "إلغاء" : "Cancel"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
