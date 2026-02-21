"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Home,
  Briefcase,
  Shield,
  FileText,
  Gavel,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Phone,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import { getTranslation } from "@/lib/i18n";
import { useConsultationModal } from "@/hooks/use-consultation-modal";
import { FreeConsultationModelButton } from "@/components/free-consultation-model-button";
import { ConsultationModal } from "@/components/consultation-modal";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const { locale } = useLocale();
  const { isOpen, openModal, closeModal } = useConsultationModal();
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const services = [
    {
      icon: Users,
      title: locale === "ar" ? "قانون الأسرة" : "Family Law",
      description:
        locale === "ar"
          ? "نقدم استشارات شاملة في جميع قضايا الأسرة بما في ذلك الزواج والطلاق وحضانة الأطفال والنفقة وتقسيم الممتلكات. نحن نفهم حساسية هذه القضايا ونعمل بتفهم ومهنية عالية."
          : "We provide comprehensive consultation on all family matters including marriage, divorce, child custody, alimony, and property division. We understand the sensitivity of these cases and work with understanding and high professionalism.",
      features: [
        locale === "ar" ? "قضايا الطلاق والخلع" : "Divorce and Khula Cases",
        locale === "ar" ? "حضانة الأطفال" : "Child Custody",
        locale === "ar" ? "النفقة والمؤخر" : "Alimony and Deferred Dower",
        locale === "ar" ? "تقسيم الممتلكات" : "Property Division",
      ],
      slug: "family-law",
    },
    {
      icon: Home,
      title: locale === "ar" ? "العقارات" : "Real Estate",
      description:
        locale === "ar"
          ? "خدمات قانونية متكاملة في المعاملات العقارية تشمل البيع والشراء والإيجار والاستثمار العقاري. نساعدكم في حماية استثماراتكم العقارية وضمان سلامة المعاملات."
          : "Complete legal services in real estate transactions including buying, selling, leasing, and real estate investment. We help you protect your real estate investments and ensure transaction safety.",
      features: [
        locale === "ar" ? "عقود البيع والشراء" : "Sale and Purchase Contracts",
        locale === "ar" ? "عقود الإيجار" : "Lease Agreements",
        locale === "ar" ? "النزاعات العقارية" : "Real Estate Disputes",
        locale === "ar" ? "الاستثمار العقاري" : "Real Estate Investment",
      ],
      slug: "real-estate",
    },
    {
      icon: Briefcase,
      title: locale === "ar" ? "القانون التجاري" : "Business Law",
      description:
        locale === "ar"
          ? "استشارات قانونية شاملة للشركات والمؤسسات التجارية تشمل تأسيس الشركات والعقود التجارية وحل النزاعات التجارية والامتثال القانوني."
          : "Comprehensive legal consultation for companies and commercial institutions including company formation, commercial contracts, commercial dispute resolution, and legal compliance.",
      features: [
        locale === "ar" ? "تأسيس الشركات" : "Company Formation",
        locale === "ar" ? "العقود التجارية" : "Commercial Contracts",
        locale === "ar" ? "النزاعات التجارية" : "Commercial Disputes",
        locale === "ar" ? "الامتثال القانوني" : "Legal Compliance",
      ],
      slug: "business-law",
    },
    {
      icon: Shield,
      title: locale === "ar" ? "الدفاع الجنائي" : "Criminal Defense",
      description:
        locale === "ar"
          ? "تمثيل قانوني قوي ومهني في القضايا الجنائية مع التركيز على حماية حقوق المتهمين وضمان العدالة. نقدم دفاعاً قوياً ومدروساً في جميع أنواع القضايا الجنائية."
          : "Strong and professional legal representation in criminal cases with focus on protecting defendants' rights and ensuring justice. We provide strong and well-studied defense in all types of criminal cases.",
      features: [
        locale === "ar" ? "الجرائم المالية" : "Financial Crimes",
        locale === "ar" ? "جرائم المرور" : "Traffic Violations",
        locale === "ar" ? "القضايا الجنائية العامة" : "General Criminal Cases",
        locale === "ar" ? "الاستئناف الجنائي" : "Criminal Appeals",
      ],
      slug: "criminal-defense",
    },
    {
      icon: FileText,
      title: locale === "ar" ? "صياغة العقود" : "Contract Drafting",
      description:
        locale === "ar"
          ? "صياغة ومراجعة العقود القانونية بجميع أنواعها مع ضمان حماية مصالح العملاء والامتثال للقوانين المحلية والدولية."
          : "Drafting and reviewing legal contracts of all types while ensuring protection of clients' interests and compliance with local and international laws.",
      features: [
        locale === "ar" ? "العقود التجارية" : "Commercial Contracts",
        locale === "ar" ? "عقود العمل" : "Employment Contracts",
        locale === "ar" ? "اتفاقيات الشراكة" : "Partnership Agreements",
        locale === "ar" ? "عقود الخدمات" : "Service Contracts",
      ],
      slug: "contract-drafting",
    },
    {
      icon: Gavel,
      title: locale === "ar" ? "التقاضي والتحكيم" : "Litigation & Arbitration",
      description:
        locale === "ar"
          ? "تمثيل قانوني متميز أمام المحاكم وهيئات التحكيم مع خبرة واسعة في إدارة القضايا المعقدة وتحقيق أفضل النتائج للعملاء."
          : "Distinguished legal representation before courts and arbitration bodies with extensive experience in managing complex cases and achieving the best results for clients.",
      features: [
        locale === "ar" ? "التقاضي المدني" : "Civil Litigation",
        locale === "ar" ? "التحكيم التجاري" : "Commercial Arbitration",
        locale === "ar" ? "تنفيذ الأحكام" : "Judgment Execution",
        locale === "ar" ? "الطعون والاستئناف" : "Appeals and Challenges",
      ],
      slug: "litigation-arbitration",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: locale === "ar" ? "الاستشارة الأولية" : "Initial Consultation",
      description:
        locale === "ar"
          ? "نبدأ بفهم احتياجاتكم القانونية"
          : "We start by understanding your legal needs",
    },
    {
      step: "02",
      title: locale === "ar" ? "تحليل القضية" : "Case Analysis",
      description:
        locale === "ar"
          ? "دراسة شاملة للوضع القانوني"
          : "Comprehensive study of the legal situation",
    },
    {
      step: "03",
      title: locale === "ar" ? "وضع الاستراتيجية" : "Strategy Development",
      description:
        locale === "ar"
          ? "تطوير خطة عمل قانونية مخصصة"
          : "Developing a customized legal action plan",
    },
    {
      step: "04",
      title:
        locale === "ar" ? "التنفيذ والمتابعة" : "Implementation & Follow-up",
      description:
        locale === "ar"
          ? "تنفيذ الخطة ومتابعة النتائج"
          : "Implementing the plan and monitoring results",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section — Dark, elegant, minimal */}
        <section className="relative py-12 lg:py-16 bg-[#060a12] text-white overflow-hidden">
          {/* Subtle decorative line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 lg:h-12 bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <motion.p
                className="text-accent text-sm font-medium tracking-[0.3em] uppercase mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {locale === "ar" ? "خدماتنا" : "Our Services"}
              </motion.p>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 text-balance"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                {getTranslation(locale, "servicesTitle")}
              </motion.h1>
              <motion.p
                className="text-lg text-white/70 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {locale === "ar"
                  ? "نقدم مجموعة شاملة من الخدمات القانونية المتخصصة لتلبية جميع احتياجاتكم القانونية"
                  : "We offer a comprehensive range of specialized legal services to meet all your legal needs"}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-10 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="group transition-all duration-300 hover:-translate-y-2 border-border hover:border-accent/50 flex flex-col h-full">
                    <CardHeader className="text-center pb-4">
                      <motion.div
                        className="mx-auto mb-3 md:mb-4 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <service.icon className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                      </motion.div>
                      <CardTitle className="text-base md:text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-between flex-1 space-y-6">
                      <div className="space-y-6">
                        <CardDescription className="text-muted-foreground leading-relaxed text-xs md:text-sm">
                          {service.description}
                        </CardDescription>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-foreground text-xs md:text-sm">
                            {locale === "ar"
                              ? "الخدمات المشمولة:"
                              : "Services Included:"}
                          </h4>
                          <motion.ul
                            className="space-y-2"
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                          >
                            {service.features.map((feature, featureIndex) => (
                              <motion.li
                                key={featureIndex}
                                className="flex items-center gap-2 text-xs text-muted-foreground"
                                variants={{
                                  initial: { opacity: 0, x: -20 },
                                  animate: { opacity: 1, x: 0 },
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                                {feature}
                              </motion.li>
                            ))}
                          </motion.ul>
                        </div>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button className="w-full bg-accent text-white hover:bg-accent/90 group/btn mt-auto">
                          <a
                            href={`/services/${service.slug}`}
                            className="flex items-center justify-center w-full"
                          >
                            {locale === "ar" ? "اعرف المزيد" : "Learn More"}
                            <ArrowIcon className="ms-2 h-4 w-4 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform duration-200" />
                          </a>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 md:py-24 bg-muted/15 relative overflow-hidden">
          {/* Background Decoration */}
          <motion.div
            className="absolute inset-0 opacity-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.05 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary rounded-full blur-3xl" />
          </motion.div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              className="text-center mb-8 md:mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium text-accent">
                  {locale === "ar"
                    ? "منهجية عمل متميزة"
                    : "Distinguished Work Methodology"}
                </span>
              </div>
              <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-6 font-serif text-balance">
                {locale === "ar" ? "كيف نعمل" : "How We Work"}
              </h2>
              <p className="text-sm md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-pretty px-2 md:px-0">
                {locale === "ar"
                  ? "عملية عمل منظمة ومدروسة لضمان تحقيق أفضل النتائج لعملائنا"
                  : "An organized and well-studied work process to ensure achieving the best results for our clients"}
              </p>
            </motion.div>

            <div className="relative">
              {/* Enhanced Timeline Line */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent/30 via-accent/60 to-accent/30 hidden lg:block"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
              />
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-accent/20 hidden lg:block" />

              <div className="space-y-4 md:space-y-6 lg:space-y-20">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className={`group relative flex items-center ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } flex-col lg:gap-12`}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    {/* Content Card */}
                    <div
                      className={`flex-1 w-full lg:w-auto ${
                        index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                      } text-center lg:text-inherit`}
                    >
                      <Card className="transition-all duration-500 hover:-translate-y-2 border-border hover:border-accent/40 bg-background/80 backdrop-blur-sm">
                        <CardContent className="p-4 md:p-8">
                          <div
                            className={`flex items-start gap-3 md:gap-6 mb-3 md:mb-6 ${
                              index % 2 === 0
                                ? "lg:flex-row-reverse"
                                : "lg:flex-row-reverse"
                            } flex-row`}
                          >
                            {/* Icon Container */}
                            <motion.div
                              className="relative"
                              whileHover={{ scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="flex h-10 w-10 md:h-16 md:w-16 items-center justify-center rounded-xl md:rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-300">
                                <div className="text-base md:text-2xl font-bold text-accent group-hover:scale-110 transition-transform duration-300">
                                  {step.step}
                                </div>
                              </div>
                              {/* Glow effect */}
                              <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>

                            {/* Content */}
                            <div className="flex-1">
                              <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-3">
                                <Badge
                                  variant="outline"
                                  className="text-accent border-accent/50 bg-accent/5 hover:bg-accent/10 transition-colors duration-300 font-medium text-xs md:text-sm"
                                >
                                  {locale === "ar"
                                    ? `الخطوة ${step.step}`
                                    : `Step ${step.step}`}
                                </Badge>
                                <div className="h-px bg-gradient-to-r from-accent/50 to-transparent flex-1 hidden lg:block" />
                              </div>
                              <h3 className="text-base md:text-2xl font-bold text-foreground text-start mb-1 md:mb-3 group-hover:text-accent transition-colors duration-300">
                                {step.title}
                              </h3>
                              <p className="text-muted-foreground leading-relaxed text-start text-xs md:text-lg">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Enhanced Timeline Dot */}
                    <motion.div
                      className="relative z-20 items-center justify-center hidden lg:flex"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    >
                      <div className="relative">
                        {/* Outer ring */}
                        <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping" />
                        {/* Main dot */}
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/80 border-4 border-background group-hover:scale-110 transition-transform duration-300">
                          <div className="h-3 w-3 rounded-full bg-background" />
                        </div>
                        {/* Inner glow */}
                        <div className="absolute inset-0 rounded-full bg-accent/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>

                    {/* Spacer for desktop */}
                    <div className="flex-1 hidden lg:block" />
                  </motion.div>
                ))}
              </div>

              {/* Timeline End Decoration */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 hidden lg:flex"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 border-2 border-accent/30">
                  <div className="h-2 w-2 rounded-full bg-accent/60" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-12 md:py-20 bg-[#060a12] text-white overflow-hidden">
          {/* Subtle decorative line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 lg:h-12 bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
          <motion.div
            className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-accent text-sm font-medium tracking-[0.3em] uppercase mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {locale === "ar" ? "تواصل معنا" : "Get In Touch"}
            </motion.p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-serif text-balance">
              {locale === "ar" ? "جاهز للبدء؟" : "Ready to Get Started?"}
            </h2>
            <p className="text-sm md:text-lg text-white/60 mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto">
              {locale === "ar"
                ? "تواصل معنا اليوم للحصول على استشارة قانونية مجانية ومناقشة احتياجاتكم"
                : "Contact us today for a free legal consultation and discuss your needs"}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <FreeConsultationModelButton onClick={openModal} />
              <ConsultationModal isOpen={isOpen} onClose={closeModal} />
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:border-accent hover:text-accent bg-transparent hover:bg-transparent cursor-pointer"
              >
                {locale === "ar" ? "اتصل بنا" : "Call Us"}
                <Phone className="ms-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
