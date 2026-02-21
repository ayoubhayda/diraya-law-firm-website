"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useLocale } from "@/hooks/use-locale-context"
import { Calendar, Phone, Mail, MessageCircle, CheckCircle, X, User, Clock, FileText, ArrowRight, ArrowLeft } from "lucide-react"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const { locale } = useLocale()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    serviceType: "",
    consultationType: "",
    message: "",
    agreedToTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Booking form submitted:", formData)
    setIsSubmitted(true)

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setIsSubmitted(false)
      setCurrentStep(1)
      setFormData({
        name: "",
        email: "",
        phone: "",
        preferredDate: "",
        preferredTime: "",
        serviceType: "",
        consultationType: "",
        message: "",
        agreedToTerms: false,
      })
      onClose()
    }, 3000)
  }

  const handleNextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const isStep1Valid = formData.name && formData.email && formData.phone && formData.preferredDate
  const isStep2Valid = formData.agreedToTerms

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md [&>button]:hidden">
          <div className="text-center py-8 px-6">
            <div className="relative mx-auto mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800/30">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-green-500 animate-ping" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {locale === "ar" ? "تم حجز الموعد بنجاح!" : "Appointment Booked Successfully!"}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto mb-4">
              {locale === "ar"
                ? "سنتواصل معكم قريباً لتأكيد تفاصيل الموعد. شكراً لثقتكم في خدماتنا."
                : "We will contact you soon to confirm the appointment details. Thank you for trusting our services."}
            </p>
            <div className="pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground">
                {locale === "ar" ? "رقم الحجز: " : "Booking ID: "}
                <span className="font-mono text-accent">#{Date.now().toString().slice(-6)}</span>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-y-auto p-0 [&>button]:hidden">
        {/* Header Section */}
        <div className="border-b border-border/50 p-6 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Calendar className="h-5 w-5 text-accent" />
              </div>
              <div>
                <DialogTitle className="text-xl font-semibold text-foreground">
                  {locale === "ar" ? "حجز موعد استشارة" : "Book Consultation Appointment"}
                </DialogTitle>
                <p className="text-sm text-muted-foreground">
                  {locale === "ar" ? "احجز موعدكم للحصول على استشارة قانونية مهنية" : "Schedule your appointment for professional legal consultation"}
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
        </div>

        {/* Form Content */}
        <div className="flex-1 p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Personal Information & Appointment Date */}
            {currentStep === 1 && (
              <div className="space-y-5">
                {/* Personal Information */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <User className="h-4 w-4 text-accent" />
                    <h3 className="text-lg font-medium text-foreground">
                      {locale === "ar" ? "المعلومات الشخصية" : "Personal Information"}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">
                        {locale === "ar" ? "الاسم الكامل" : "Full Name"} *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder={locale === "ar" ? "أدخل اسمكم الكامل" : "Enter your full name"}
                        className="h-10 border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all duration-200 text-start rtl:text-right"
                        dir={locale === "ar" ? "rtl" : "ltr"}
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">
                        {locale === "ar" ? "البريد الإلكتروني" : "Email Address"} *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder={locale === "ar" ? "أدخل بريدكم الإلكتروني" : "Enter your email address"}
                        className="h-10 border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all duration-200 text-start rtl:text-right"
                        dir={locale === "ar" ? "rtl" : "ltr"}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                      {locale === "ar" ? "رقم الهاتف" : "Phone Number"} *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder={locale === "ar" ? "أدخل رقم هاتفكم" : "Enter your phone number"}
                      className="h-10 border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all duration-200 text-start rtl:text-right"
                      dir={locale === "ar" ? "rtl" : "ltr"}
                      required
                    />
                  </div>
                </div>

                {/* Appointment Date & Time */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-4 w-4 text-accent" />
                    <h3 className="text-lg font-medium text-foreground">
                      {locale === "ar" ? "موعد الاستشارة" : "Appointment Schedule"}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="preferredDate" className="text-sm font-medium text-foreground">
                        {locale === "ar" ? "التاريخ المفضل" : "Preferred Date"} *
                      </Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                        className="h-10 border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all duration-200"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label className="text-sm font-medium text-foreground">
                        {locale === "ar" ? "الوقت المفضل" : "Preferred Time"}
                      </Label>
                      <Select
                        value={formData.preferredTime}
                        onValueChange={(value) => handleInputChange("preferredTime", value)}
                      >
                        <SelectTrigger className={`h-10 border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all duration-200 ${locale === "ar" ? "flex-row-reverse" : ""}`}>
                          <SelectValue placeholder={locale === "ar" ? "اختر الوقت المفضل" : "Select preferred time"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="9:00">9:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="12:00">12:00 PM</SelectItem>
                          <SelectItem value="13:00">1:00 PM</SelectItem>
                          <SelectItem value="14:00">2:00 PM</SelectItem>
                          <SelectItem value="15:00">3:00 PM</SelectItem>
                          <SelectItem value="16:00">4:00 PM</SelectItem>
                          <SelectItem value="17:00">5:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Service Preferences & Additional Details */}
            {currentStep === 2 && (
              <div className="space-y-5">
                {/* Service Preferences */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="h-4 w-4 text-accent" />
                    <h3 className="text-lg font-medium text-foreground">
                      {locale === "ar" ? "تفضيلات الخدمة" : "Service Preferences"}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <Label className="text-sm font-medium text-foreground">
                        {locale === "ar" ? "نوع الخدمة" : "Service Type"}
                      </Label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={(value) => handleInputChange("serviceType", value)}
                      >
                        <SelectTrigger className={`h-10 border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all duration-200 ${locale === "ar" ? "flex-row-reverse" : ""}`}>
                          <SelectValue placeholder={locale === "ar" ? "اختر نوع الخدمة" : "Select service type"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="corporate">
                            {locale === "ar" ? "القانون التجاري" : "Corporate Law"}
                          </SelectItem>
                          <SelectItem value="civil">
                            {locale === "ar" ? "القانون المدني" : "Civil Law"}
                          </SelectItem>
                          <SelectItem value="criminal">
                            {locale === "ar" ? "القانون الجنائي" : "Criminal Law"}
                          </SelectItem>
                          <SelectItem value="family">
                            {locale === "ar" ? "قانون الأسرة" : "Family Law"}
                          </SelectItem>
                          <SelectItem value="real-estate">
                            {locale === "ar" ? "القانون العقاري" : "Real Estate Law"}
                          </SelectItem>
                          <SelectItem value="other">
                            {locale === "ar" ? "أخرى" : "Other"}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label className="text-sm font-medium text-foreground">
                        {locale === "ar" ? "نوع الاستشارة" : "Consultation Type"}
                      </Label>
                      <Select
                        value={formData.consultationType}
                        onValueChange={(value) => handleInputChange("consultationType", value)}
                      >
                        <SelectTrigger className={`h-10 border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all duration-200 ${locale === "ar" ? "flex-row-reverse" : ""}`}>
                          <SelectValue placeholder={locale === "ar" ? "اختر نوع الاستشارة" : "Select consultation type"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="office">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-accent" />
                              {locale === "ar" ? "في المكتب" : "In-Office"}
                            </div>
                          </SelectItem>
                          <SelectItem value="phone">
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 text-accent" />
                              {locale === "ar" ? "عبر الهاتف" : "Phone Call"}
                            </div>
                          </SelectItem>
                          <SelectItem value="video">
                            <div className="flex items-center gap-2">
                              <MessageCircle className="h-4 w-4 text-accent" />
                              {locale === "ar" ? "مكالمة فيديو" : "Video Call"}
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageCircle className="h-4 w-4 text-accent" />
                    <h3 className="text-lg font-medium text-foreground">
                      {locale === "ar" ? "معلومات إضافية" : "Additional Information"}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message" className="text-sm font-medium text-foreground">
                      {locale === "ar" ? "رسالة أو ملاحظات" : "Message or Notes"}
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder={
                        locale === "ar"
                          ? "يرجى إضافة أي ملاحظات أو معلومات إضافية..."
                          : "Please add any notes or additional information..."
                      }
                      rows={3}
                      className="border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all duration-200 resize-none text-start rtl:text-right"
                      dir={locale === "ar" ? "rtl" : "ltr"}
                    />
                  </div>

                  <div className="flex items-start gap-3 rtl:space-x-reverse">
                    <Checkbox
                      id="agreedToTerms"
                      checked={formData.agreedToTerms}
                      onCheckedChange={(checked) => handleInputChange("agreedToTerms", checked as boolean)}
                      className="mt-1 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                      required
                    />
                    <div className="space-y-1">
                      <Label htmlFor="agreedToTerms" className="text-sm font-medium text-foreground cursor-pointer">
                        {locale === "ar"
                          ? "أوافق على شروط الخدمة وسياسة الخصوصية"
                          : "I agree to the terms of service and privacy policy"}{" "}
                        *
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        {locale === "ar" 
                          ? "بياناتكم محمية ومضمونة السرية"
                          : "Your data is protected and confidential"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="pt-4 border-t border-border/50">
              <div className="flex flex-col sm:flex-row gap-3">
                {currentStep === 1 ? (
                  <>
                    <Button
                      type="button"
                      onClick={handleNextStep}
                      disabled={!isStep1Valid}
                      className="flex-1 h-10 bg-accent text-white hover:bg-accent/90 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {locale === "ar" ? "التالي" : "Next Step"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={onClose} 
                      className="h-10 px-6 border-border/50 hover:border-accent/50 hover:bg-accent hover:text-white transition-all duration-200"
                    >
                      {locale === "ar" ? "إلغاء" : "Cancel"}
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      type="submit"
                      disabled={!isStep2Valid}
                      className="flex-1 h-10 bg-accent text-white hover:bg-accent/90 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {locale === "ar" ? "تأكيد حجز الموعد" : "Confirm Appointment"}
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={handlePrevStep}
                      className="h-10 px-6 border-border/50 hover:border-accent/50 hover:bg-accent hover:text-white transition-all duration-200"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      {locale === "ar" ? "السابق" : "Previous"}
                    </Button>
                  </>
                )}
              </div>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
