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
import { MessageCircle, Phone, Mail, Calendar, CheckCircle, X, User, Clock, FileText, Shield, ArrowRight, ArrowLeft } from "lucide-react"

interface ServiceConsultationModalProps {
  isOpen: boolean
  onClose: () => void
  serviceName: string
}

export function ServiceConsultationModal({ isOpen, onClose, serviceName }: ServiceConsultationModalProps) {
  const { locale } = useLocale()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredContact: "",
    urgency: "",
    caseDescription: "",
    hasDocuments: false,
    agreedToTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Service consultation form submitted:", { ...formData, service: serviceName })
    setIsSubmitted(true)

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setIsSubmitted(false)
      setCurrentStep(1)
      setFormData({
        name: "",
        email: "",
        phone: "",
        preferredContact: "",
        urgency: "",
        caseDescription: "",
        hasDocuments: false,
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

  const isStep1Valid = formData.name && formData.email && formData.phone
  const isStep2Valid = formData.caseDescription && formData.agreedToTerms

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md [&>button]:hidden" >
          <div className="text-center py-8 px-6">
            <div className="relative mx-auto mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800/30">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-green-500 animate-ping" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {locale === "ar" ? "تم إرسال طلبكم بنجاح!" : "Request Submitted Successfully!"}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto mb-4">
              {locale === "ar"
                ? "سنتواصل معكم خلال 24 ساعة لتحديد موعد الاستشارة. شكراً لثقتكم في خدماتنا."
                : "We will contact you within 24 hours to schedule your consultation. Thank you for trusting our services."}
            </p>
            <div className="pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground">
                {locale === "ar" ? "رقم المرجع: " : "Reference ID: "}
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
                <MessageCircle className="h-5 w-5 text-accent" />
              </div>
              <div>
                <DialogTitle className="text-xl font-semibold text-foreground">
                  {locale === "ar" ? "طلب استشارة قانونية" : "Legal Consultation Request"}
                </DialogTitle>
                <p className="text-sm text-muted-foreground">
                  {locale === "ar" ? "احصل على استشارة مجانية من خبرائنا" : "Get a free consultation from our experts"}
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
            {/* Step 1: Personal Information & Contact Preferences */}
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

                {/* Consultation Preferences */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-4 w-4 text-accent" />
                    <h3 className="text-lg font-medium text-foreground">
                      {locale === "ar" ? "تفضيلات الاستشارة" : "Consultation Preferences"}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <Label className="text-sm font-medium text-foreground">
                        {locale === "ar" ? "طريقة التواصل المفضلة" : "Preferred Contact Method"}
                      </Label>
                      <Select
                        value={formData.preferredContact}
                        onValueChange={(value) => handleInputChange("preferredContact", value)}
                      >
                        <SelectTrigger className={`h-10 border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all duration-200 ${locale === "ar" ? "flex-row-reverse" : ""}`}>
                          <SelectValue placeholder={locale === "ar" ? "اختر طريقة التواصل" : "Select contact method"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="phone">
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 text-accent" />
                              {locale === "ar" ? "مكالمة هاتفية" : "Phone Call"}
                            </div>
                          </SelectItem>
                          <SelectItem value="email">
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4 text-accent" />
                              {locale === "ar" ? "بريد إلكتروني" : "Email"}
                            </div>
                          </SelectItem>
                          <SelectItem value="whatsapp">
                            <div className="flex items-center gap-2">
                              <MessageCircle className="h-4 w-4 text-accent" />
                              {locale === "ar" ? "واتساب" : "WhatsApp"}
                            </div>
                          </SelectItem>
                          <SelectItem value="office">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-accent" />
                              {locale === "ar" ? "زيارة المكتب" : "Office Visit"}
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label className="text-sm font-medium text-foreground">
                        {locale === "ar" ? "مستوى الأولوية" : "Urgency Level"}
                      </Label>
                      <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                        <SelectTrigger className={`h-10 border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all duration-200 ${locale === "ar" ? "flex-row-reverse" : ""}`}>
                          <SelectValue placeholder={locale === "ar" ? "اختر مستوى الأولوية" : "Select urgency level"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-green-500" />
                              {locale === "ar" ? "عادي - خلال أسبوع" : "Normal - Within a week"}
                            </div>
                          </SelectItem>
                          <SelectItem value="medium">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-yellow-500" />
                              {locale === "ar" ? "متوسط - خلال 3 أيام" : "Medium - Within 3 days"}
                            </div>
                          </SelectItem>
                          <SelectItem value="high">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-orange-500" />
                              {locale === "ar" ? "عاجل - خلال 24 ساعة" : "Urgent - Within 24 hours"}
                            </div>
                          </SelectItem>
                          <SelectItem value="critical">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-red-500" />
                              {locale === "ar" ? "طارئ - فوري" : "Critical - Immediate"}
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Case Details & Additional Options */}
            {currentStep === 2 && (
              <div className="space-y-5">
                {/* Case Description */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="h-4 w-4 text-accent" />
                    <h3 className="text-lg font-medium text-foreground">
                      {locale === "ar" ? "تفاصيل القضية" : "Case Details"}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="caseDescription" className="text-sm font-medium text-foreground">
                      {locale === "ar" ? "وصف القضية أو الاستشارة المطلوبة" : "Case Description or Required Consultation"} *
                    </Label>
                    <Textarea
                      id="caseDescription"
                      value={formData.caseDescription}
                      onChange={(e) => handleInputChange("caseDescription", e.target.value)}
                      placeholder={
                        locale === "ar"
                          ? "يرجى وصف قضيتكم أو الاستشارة المطلوبة بالتفصيل..."
                          : "Please describe your case or required consultation in detail..."
                      }
                      rows={4}
                      className="border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all duration-200 resize-none text-start rtl:text-right"
                      dir={locale === "ar" ? "rtl" : "ltr"}
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      {locale === "ar" 
                        ? "كلما كانت التفاصيل أكثر، كلما استطعنا مساعدتكم بشكل أفضل"
                        : "The more details you provide, the better we can assist you"}
                    </p>
                  </div>
                </div>

                {/* Additional Options */}
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 rtl:space-x-reverse">
                      <Checkbox
                        id="hasDocuments"
                        checked={formData.hasDocuments}
                        onCheckedChange={(checked) => handleInputChange("hasDocuments", checked as boolean)}
                        className="mt-1 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                      />
                      <div className="space-y-1">
                        <Label htmlFor="hasDocuments" className="text-sm font-medium text-foreground cursor-pointer">
                          {locale === "ar"
                            ? "لدي وثائق أو مستندات متعلقة بالقضية"
                            : "I have documents or papers related to the case"}
                        </Label>
                        <p className="text-xs text-muted-foreground">
                          {locale === "ar" 
                            ? "يمكنكم إرفاق المستندات لاحقاً عند التواصل معنا"
                            : "You can attach documents later when we contact you"}
                        </p>
                      </div>
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
                      className="h-10 px-6 border-border/50 hover:border-accent/50 hover:text-white transition-all duration-200"
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
                      <MessageCircle className="mr-2 h-4 w-4" />
                      {locale === "ar" ? "إرسال طلب الاستشارة" : "Submit Consultation Request"}
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={handlePrevStep}
                      className="h-10 px-6 border-border/50 hover:border-accent/50 hover:text-white transition-all duration-200"
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
