import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { caseFilters, cases } from '../data/site';
import type { CaseCategory } from '../types';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function CasesSection() {
  const [activeFilter, setActiveFilter] = useState<CaseCategory>('Все');

  const visibleCases = useMemo(
    () => cases.filter((item) => activeFilter === 'Все' || item.category === activeFilter),
    [activeFilter],
  );

  return (
    <section id="cases" className="py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Кейсы"
            title="Проекты, где технология работает на понятный бизнес-результат"
            description="От премиальных сайтов до ботов и автоматизации: показываем формат решений, которые можно быстро адаптировать под вашу задачу."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap gap-3">
            {caseFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={[
                  'rounded-full px-5 py-3 text-sm font-semibold transition',
                  activeFilter === filter
                    ? 'bg-white text-slate-950'
                    : 'border border-white/12 bg-white/6 text-slate-200 hover:border-white/20 hover:bg-white/10',
                ].join(' ')}
              >
                {filter}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleCases.map((item, index) => (
              <motion.article
                key={item.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 18 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                whileHover={{ y: -8 }}
                className="glass-panel group rounded-[1.75rem] p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-500">Case #{index + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.stack.map((entry) => (
                    <span
                      key={entry}
                      className="rounded-full border border-white/10 bg-[#0b1022] px-3 py-2 text-xs text-slate-200 transition group-hover:border-cyan/30"
                    >
                      {entry}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

