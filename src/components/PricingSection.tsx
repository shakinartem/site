import { motion } from 'framer-motion';
import { prices } from '../data/site';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Цены"
            title="Понятные стартовые рамки для проектов разного масштаба"
            description="Финальная оценка зависит от объёма, сроков и интеграций, но стартовые ориентиры помогут быстро сориентироваться."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {prices.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
                className="glass-panel relative overflow-hidden rounded-[1.75rem] p-6"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/80 to-transparent" />
                <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Стартовая стоимость</div>
                <div className="mt-5 font-display text-2xl font-bold text-white">{item.title}</div>
                <div className="mt-3 font-display text-4xl font-bold text-gradient">{item.price}</div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

