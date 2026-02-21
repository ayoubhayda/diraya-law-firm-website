"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Calendar,
  Clock,
  Search,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Mail,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import { motion } from "framer-motion";

export default function BlogPage() {
  const { locale } = useLocale();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAllArticles, setShowAllArticles] = useState(false);
  const [email, setEmail] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  const allArticles = getAllArticles();

  const categories = [
    { id: "all", name: locale === "ar" ? "الكل" : "All" },
    { id: "family", name: locale === "ar" ? "قانون الأسرة" : "Family Law" },
    {
      id: "business",
      name: locale === "ar" ? "القانون التجاري" : "Business Law",
    },
    { id: "real-estate", name: locale === "ar" ? "العقارات" : "Real Estate" },
    { id: "criminal", name: locale === "ar" ? "الجنائي" : "Criminal" },
  ];

  const filteredPosts = allArticles.filter((article) => {
    const title = locale === "ar" ? article.titleAr : article.titleEn;
    const matchesSearch = title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Show only 3 articles initially, or all if showAllArticles is true
  const displayedPosts = showAllArticles
    ? filteredPosts
    : filteredPosts.slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (locale === "ar") {
      return date.toLocaleDateString("ar-SA", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      return;
    }

    if (!isValidEmail(email)) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setShowSuccessModal(true);
    setEmail("");
    setIsSubmitting(false);
  };

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
                {locale === "ar" ? "المدونة" : "Blog"}
              </motion.p>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 text-balance"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                {locale === "ar" ? "المدونة القانونية" : "Legal Blog"}
              </motion.h1>
              <motion.p
                className="text-lg text-white/70 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {locale === "ar"
                  ? "مقالات ونصائح قانونية متخصصة لمساعدتكم في فهم القوانين والإجراءات القانونية"
                  : "Specialized legal articles and tips to help you understand laws and legal procedures"}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Blog Articles Section */}
        <section className="py-10 md:py-20 bg-muted/15 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary rounded-full blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            {/* Section Header */}
            <motion.div
              className="text-center mb-8 md:mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium text-accent">
                  {locale === "ar" ? "المقالات القانونية" : "Legal Articles"}
                </span>
              </motion.div>
              <motion.h2
                className="text-xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 md:mb-4 font-serif text-balance"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {locale === "ar" ? "مقالاتنا القانونية" : "Our Legal Articles"}
              </motion.h2>
              <motion.p
                className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty px-2 md:px-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {locale === "ar"
                  ? "اكتشف مجموعة واسعة من المقالات القانونية المتخصصة وابحث عن ما يهمك"
                  : "Discover a wide range of specialized legal articles and find what interests you"}
              </motion.p>
            </motion.div>

            {/* Search and Filter Controls */}
            <motion.div
              className="max-w-4xl mx-auto mb-8 md:mb-14"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/80 dark:border-gray-700/50 rounded-2xl p-5 md:p-8 overflow-hidden">
                <div className="flex flex-col gap-6">
                  {/* Search Input */}
                  <div className="relative group w-full">
                    <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 flex items-center pl-4 rtl:pl-0 rtl:pr-4 pointer-events-none">
                      <Search className="h-[18px] w-[18px] text-gray-400 dark:text-gray-500 group-focus-within:text-accent transition-colors duration-300" />
                    </div>
                    <Input
                      type="text"
                      placeholder={
                        locale === "ar"
                          ? "ابحث في المقالات..."
                          : "Search articles..."
                      }
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-11 rtl:pl-4 rtl:pr-11 h-12 md:h-[52px] text-sm md:text-base bg-gray-50/80 dark:bg-gray-800/50 border-gray-200/80 dark:border-gray-700/50 rounded-xl focus:border-accent/50 focus:ring-2 focus:ring-accent/10 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-all duration-300"
                    />
                  </div>

                  {/* Separator */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />
                    <span className="text-[11px] font-medium tracking-widest uppercase text-gray-400 dark:text-gray-500">
                      {locale === "ar" ? "التصنيفات" : "Categories"}
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />
                  </div>

                  {/* Category Filters */}
                  <div className="flex flex-wrap gap-2.5 justify-center">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`
                          relative px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium
                          transition-all duration-300 ease-out cursor-pointer outline-none
                          ${
                            selectedCategory === category.id
                              ? "bg-accent text-white shadow-[0_2px_12px_-2px_rgba(var(--accent-rgb,180,130,64),0.4)]"
                              : "bg-gray-100/80 dark:bg-gray-800/60 text-gray-600 dark:text-gray-400 hover:bg-gray-200/80 dark:hover:bg-gray-700/60 hover:text-gray-900 dark:hover:text-gray-200 border border-gray-200/60 dark:border-gray-700/40 hover:border-gray-300 dark:hover:border-gray-600"
                          }
                        `}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results Count Bar */}
              <div className="flex items-center justify-between mt-5 px-1">
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {filteredPosts.length > 0 ? (
                    <>
                      {locale === "ar"
                        ? `عرض ${displayedPosts.length} من ${filteredPosts.length} مقالة`
                        : `Showing ${displayedPosts.length} of ${filteredPosts.length} articles`}
                    </>
                  ) : (
                    <>
                      {locale === "ar" ? "لا توجد نتائج" : "No results found"}
                    </>
                  )}
                </p>
                {(searchTerm || selectedCategory !== "all") && (
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                    }}
                    className="text-xs md:text-sm font-medium text-accent/80 hover:text-accent transition-colors duration-200 cursor-pointer"
                  >
                    {locale === "ar" ? "مسح الفلاتر" : "Clear Filters"}
                  </button>
                )}
              </div>
            </motion.div>

            {/* Blog Posts Grid */}
            {displayedPosts.length === 0 ? (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted/50 mb-6">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {locale === "ar"
                    ? "لم يتم العثور على مقالات"
                    : "No Articles Found"}
                </h3>
                <p className="text-muted-foreground text-lg max-w-md mx-auto mb-6">
                  {locale === "ar"
                    ? "جرب البحث بكلمات مختلفة أو تصفح جميع الفئات"
                    : "Try searching with different keywords or browse all categories"}
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                  className="border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  {locale === "ar" ? "عرض جميع المقالات" : "View All Articles"}
                </Button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {displayedPosts.map((article, index) => (
                    <article
                      key={article.id}
                      className="group bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-accent/30 dark:hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Image Section */}
                      <div className="relative aspect-[4/3] md:aspect-[4/3] overflow-hidden">
                        <img
                          src={article.image || "/placeholder.svg"}
                          alt={
                            locale === "ar" ? article.titleAr : article.titleEn
                          }
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300 backdrop-blur-sm">
                            {
                              categories.find(
                                (cat) => cat.id === article.category,
                              )?.name
                            }
                          </span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                        {/* Meta Information */}
                        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            {formatDate(article.date)}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" />
                            {locale === "ar"
                              ? article.readTimeAr
                              : article.readTimeEn}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white leading-tight line-clamp-1 group-hover:text-accent transition-colors duration-200">
                          {locale === "ar" ? article.titleAr : article.titleEn}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
                          {locale === "ar"
                            ? article.excerptAr
                            : article.excerptEn}
                        </p>

                        {/* Author and Read More */}
                        <div className="pt-2">
                          <Link href={`/blog/${article.slug}`}>
                            <span className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-200">
                              {locale === "ar" ? "اقرأ المزيد" : "Read More"}
                              <ArrowIcon className="h-3.5 w-3.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform duration-200" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Load More Button */}
                {filteredPosts.length > 3 && (
                  <div className="text-center mt-10 md:mt-16">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => setShowAllArticles(!showAllArticles)}
                      className="border-accent/50 text-accent hover:bg-accent hover:text-white bg-background/80 backdrop-blur-sm px-8 py-3 h-12 text-base font-medium shadow-none cursor-pointer transition-all duration-300"
                    >
                      {showAllArticles
                        ? locale === "ar"
                          ? "عرض أقل"
                          : "Show Less"
                        : locale === "ar"
                          ? "تحميل المزيد"
                          : "Load More"}
                      <ArrowIcon className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 md:py-20 bg-[#060a12] text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
          <motion.div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6 font-serif text-balance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {locale === "ar"
                ? "اشترك في النشرة القانونية"
                : "Subscribe to Legal Newsletter"}
            </motion.h2>
            <motion.p
              className="text-sm md:text-xl text-white/90 mb-5 md:mb-8 max-w-3xl mx-auto leading-relaxed text-pretty px-2 md:px-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {locale === "ar"
                ? "احصل على آخر المقالات والنصائح القانونية مباشرة في بريدك الإلكتروني"
                : "Get the latest legal articles and tips delivered directly to your email"}
            </motion.p>
            <motion.form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={
                  locale === "ar" ? "بريدك الإلكتروني" : "Your email address"
                }
                className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-accent/50 focus:ring-accent/20 h-12"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting || !email.trim() || !isValidEmail(email)}
                className="bg-accent text-white hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed h-12 px-6"
              >
                {isSubmitting
                  ? locale === "ar"
                    ? "جاري الإرسال..."
                    : "Submitting..."
                  : locale === "ar"
                    ? "اشترك"
                    : "Subscribe"}
              </Button>
            </motion.form>
          </motion.div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
              <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <DialogTitle className="text-xl font-semibold text-center">
              {locale === "ar"
                ? "تم الاشتراك بنجاح!"
                : "Successfully Subscribed!"}
            </DialogTitle>
            <DialogDescription className="text-center mt-2">
              {locale === "ar"
                ? "شكراً لك على الاشتراك في نشرتنا القانونية. ستصلك آخر المقالات والنصائح القانونية مباشرة في بريدك الإلكتروني."
                : "Thank you for subscribing to our legal newsletter. You'll receive the latest legal articles and tips directly in your email."}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-6">
            <Button
              onClick={() => setShowSuccessModal(false)}
              className="bg-accent text-white hover:bg-accent/90"
            >
              <Mail className="mr-2 h-4 w-4" />
              {locale === "ar" ? "ممتاز" : "Great"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
