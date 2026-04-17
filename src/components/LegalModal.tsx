import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { privacyContent, termsContent } from '../data/site';
import type { LegalType } from '../types';

interface LegalModalProps {
  type: LegalType | null;
  onClose: () => void;
}

const contentMap = {
  privacy: {
    title: 'Политика конфиденциальности',
    items: privacyContent,
  },
  terms: {
    title: 'Пользовательское соглашение',
    items: termsContent,
  },
} as const;

export function LegalModal({ type, onClose }: LegalModalProps) {
  return (
    <AnimatePresence>
      {type ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/72 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.28 }}
            onClick={(event) => event.stopPropagation()}
            className="glass-panel relative max-h-[85vh] w-full max-w-3xl overflow-auto rounded-[2rem] p-6 sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white"
              aria-label="Закрыть"
            >
              <X size={18} />
            </button>

            <div className="pr-10">
              <div className="mb-4 inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-300">
                Legal
              </div>
              <h3 className="font-display text-3xl font-bold text-white">{contentMap[type].title}</h3>
            </div>

            <div className="mt-8 space-y-4">
              {contentMap[type].items.map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-[#0c1021]/80 p-5 text-sm leading-7 text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

