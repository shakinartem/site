import { telegramLink } from '../data/site';
import type { LegalType } from '../types';

interface FooterProps {
  onOpenLegal: (type: LegalType) => void;
}

export function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer className="border-t border-white/8 py-8">
      <div className="section-shell flex flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} DevPair. Сайты, боты и автоматизация для бизнеса.</div>
        <div className="flex flex-wrap items-center gap-4">
          <button type="button" className="transition hover:text-white" onClick={() => onOpenLegal('privacy')}>
            Политика конфиденциальности
          </button>
          <button type="button" className="transition hover:text-white" onClick={() => onOpenLegal('terms')}>
            Пользовательское соглашение
          </button>
          <a href={telegramLink} target="_blank" rel="noreferrer" className="transition hover:text-white">
            @Ivan_Lag
          </a>
        </div>
      </div>
    </footer>
  );
}

