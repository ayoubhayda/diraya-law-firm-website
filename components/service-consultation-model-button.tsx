"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/hooks/use-locale-context";
import { useState } from "react";
import { ServiceConsultationModal } from "./service-consultation-modal";

export default function ServiceConsultationModelButton() {
  const { locale } = useLocale();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsConsultationOpen(true)}
        size="lg"
        className="bg-accent text-white hover:bg-accent/90 cursor-pointer"
      >
        {locale === "ar" ? "احصل على استشارة" : "Get Consultation"}
        <MessageCircle className="ml-2 h-5 w-5" />
      </Button>
      <ServiceConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        serviceName={""}
      />
    </>
  );
}
