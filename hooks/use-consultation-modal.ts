"use client"

import { useState } from "react"

export function useConsultationModal() {
  const [isOpen, setIsOpen] = useState(false)

  // Auto-popup functionality removed - modal will only open when manually triggered

  const openModal = () => setIsOpen(true)

  const closeModal = () => {
    setIsOpen(false)
  }

  return {
    isOpen,
    openModal,
    closeModal,
  }
}
