"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, Scale, Phone } from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import { getTranslation } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import darkLogo from "@/assets/logos/Diraya-Logo-dark.png";
import lightLogo from "@/assets/logos/Diraya-Logo-light.png";
import Image from "next/image";
import { ServiceConsultationModal } from "./service-consultation-modal";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const { locale } = useLocale();
  const pathname = usePathname();

  const navigation = [
    { name: getTranslation(locale, "home"), href: "/" },
    { name: getTranslation(locale, "about"), href: "/about" },
    { name: getTranslation(locale, "services"), href: "/services" },
    { name: getTranslation(locale, "blog"), href: "/blog" },
    { name: getTranslation(locale, "contact"), href: "/contact" },
  ];

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 w-full border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:h-18 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3 group">
                {/* Elegant Law Firm Icon */}
                <Image
                  src={lightLogo}
                  alt="Diraya Logo"
                  width={40}
                  height={40}
                  priority
                  className="!w-auto !h-9 sm:!h-10 dark:hidden"
                />
                <Image
                  src={darkLogo}
                  alt="Diraya Logo"
                  width={40}
                  height={40}
                  priority
                  className="!w-auto !h-9 sm:!h-10 hidden dark:block"
                />

                {/* Logo Text */}
                <div className="hidden sm:flex flex-col ">
                  <span
                    className={`text-2xl font-semibold ltr:font-bold leading-tight text-foreground group-hover:text-primary transition-colors duration-300 ${locale === "ar" ? "font-logo-arabic text-[1.7rem]" : "font-serif capitalize "}`}
                  >
                    {locale === "ar" ? "دراية" : "Diraya"}
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-8 flex items-center gap-5">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors duration-200",
                      isActiveRoute(item.href)
                        ? "text-accent"
                        : "text-foreground/70 hover:text-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3 rtl:space-x-reverse">
              <LanguageSwitcher />
              <ThemeToggle />
              <div className="h-6 w-px bg-border"></div>
              <Button
                onClick={() => setIsConsultationOpen(true)}
                className="bg-accent text-white hover:bg-accent/90 shadow-none font-medium transition-all duration-200 cursor-pointer"
              >
                {getTranslation(locale, "getConsultation")}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-2 rtl:space-x-reverse">
              <LanguageSwitcher />
              <ThemeToggle />
              <Button
                variant="outline"
                onClick={() => setIsOpen(!isOpen)}
                className="bg-transparent border-border/50 dark:border-zinc-700 hover:border-accent/50 hover:bg-accent/5 dark:hover:bg-accent/20 dark:hover:text-white dark:hover:border-accent/30 cursor-pointer transition-all duration-200 shadow-none"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 z-50 animate-in slide-in-from-top-2 duration-200">
              <div className="mx-3 mt-2 rounded-xl border border-border bg-background backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20 overflow-hidden">
                <div className="px-3 py-3 space-y-0.5">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg",
                        isActiveRoute(item.href)
                          ? "text-accent bg-accent/8 dark:bg-accent/15"
                          : "text-foreground/70 hover:text-foreground hover:bg-muted/60",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="px-4 pb-4 pt-2 border-t border-border/30">
                  <Button
                    onClick={() => {
                      setIsConsultationOpen(true);
                      setIsOpen(false);
                    }}
                    size="lg"
                    className="w-full bg-accent text-white hover:bg-accent/90 shadow-none font-medium py-3 rounded-lg transition-all duration-200 cursor-pointer"
                  >
                    <Phone className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
                    {getTranslation(locale, "getConsultation")}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      <ServiceConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        serviceName={""}
      />
    </>
  );
}
