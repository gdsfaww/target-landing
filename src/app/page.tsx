import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BlogSection from '@/components/BlogSection';
import CasesSection from '@/components/CasesSection';
import PricingSection from '@/components/PricingSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <BlogSection />
        <CasesSection />
        <PricingSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
