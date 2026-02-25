"use client";

import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/hooks/use-locale-context";

interface ConsultationButtonProps {
  onClick: () => void;
}

export function ConsultationButton({ onClick }: ConsultationButtonProps) {
  const { locale } = useLocale();

  return (
    <Button
      onClick={onClick}
      className="bg-accent text-white hover:bg-accent/90 px-8 py-4 cursor-pointer"
      size="lg"
    >
      {locale === "ar" ? "احجز استشارة" : "Book Consultation"}
      <Calendar className="h-5 w-5 ms-2" />
    </Button>
  );
}
