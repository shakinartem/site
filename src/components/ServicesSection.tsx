import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { services, telegramLink } from '../data/site';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Услуги"
            title="Закрываем ключевые digital-задачи от лендинга до автоматизации процессов"
            description="Собираем решения, которые помогают продавать, ускорять внутренние процессы и масштабировать продукт без лишней сложности."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06}>
              <motion.article
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="glass-panel group flex h-full flex-col rounded-[1.75rem] p-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-cyan transition group-hover:border-cyan/40 group-hover:text-white">
                  <service.icon size={24} />
                </div>
                <h3 className="mt-8 font-display text-2xl font-bold text-white">{service.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">{service.description}</p>
                <a
                  className="mt-8 inline-flex items-center gap-2 text-sm text-slate-200 transition hover:text-white"
                  href={telegramLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Подробнее обсудим в Telegram
                  <ArrowUpRight size={16} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
