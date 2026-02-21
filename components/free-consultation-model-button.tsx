"use client"

import { ArrowLeftIcon, ArrowUpIcon, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/hooks/use-locale-context"

interface FreeConsultationModelButtonProps {
  onClick: () => void
}

export function FreeConsultationModelButton({ onClick }: FreeConsultationModelButtonProps) {
  const { locale } = useLocale()

  return (
    <Button
      onClick={onClick}
      className="bg-accent text-white hover:bg-accent/90 px-8 py-4 cursor-pointer"
      size="lg"
    >
     {locale === "ar" ? "استشارة مجانية" : "Free Consultation"}
     <MessageCircle className="h-5 w-5 ms-2" />
    </Button>
  )
}
