"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ConsultationModal } from "@/components/consultation-modal";
import { ConsultationTriggerButton } from "@/components/consultation-trigger-button";
import { useConsultationModal } from "@/hooks/use-consultation-modal";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const { isOpen, openModal, closeModal } = useConsultationModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
      {mounted && (
        <>
          <ConsultationTriggerButton onClick={openModal} />
          <ConsultationModal isOpen={isOpen} onClose={closeModal} />
        </>
      )}
    </ThemeProvider>
  );
}
