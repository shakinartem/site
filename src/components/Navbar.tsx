import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navItems, telegramLink } from '../data/site';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={[
          'section-shell flex items-center justify-between rounded-full border px-4 py-3 transition duration-300 sm:px-6',
          scrolled ? 'glass-panel border-white/12' : 'border-transparent bg-transparent',
        ].join(' ')}
      >
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/8">
            <span className="font-display text-lg font-bold text-white">DP</span>
          </div>
          <div>
            <div className="font-display text-sm font-bold tracking-[0.18em] text-white">DEVPAIR</div>
            <div className="text-xs text-slate-400">Development agency</div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a className="btn-secondary" href={telegramLink} target="_blank" rel="noreferrer">
            Обсудить проект
          </a>
        </div>

        <button
          type="button"
          aria-label="Открыть меню"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24 }}
            className="section-shell mt-3 rounded-3xl border border-white/12 bg-[#0a0d1e]/95 p-5 shadow-card backdrop-blur lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-base text-slate-200"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                className="btn-primary mt-2"
                href={telegramLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                Обсудить проект
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

