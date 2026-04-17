import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { BackToTop } from './components/BackToTop';
import { CasesSection } from './components/CasesSection';
import { CookieNotice } from './components/CookieNotice';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { LegalModal } from './components/LegalModal';
import { Navbar } from './components/Navbar';
import { PricingSection } from './components/PricingSection';
import { ServicesSection } from './components/ServicesSection';
import type { LegalType } from './types';

function App() {
  const [legalType, setLegalType] = useState<LegalType | null>(null);

  useEffect(() => {
    const originalTitle = 'DevPair — сайты, Telegram-боты и автоматизация для бизнеса';
    document.title =
      legalType === 'privacy'
        ? 'Политика конфиденциальности — DevPair'
        : legalType === 'terms'
          ? 'Пользовательское соглашение — DevPair'
          : originalTitle;
  }, [legalType]);

  return (
    <div className="relative">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CasesSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer onOpenLegal={setLegalType} />
      <CookieNotice />
      <BackToTop />
      <LegalModal type={legalType} onClose={() => setLegalType(null)} />
    </div>
  );
}

export default App;
