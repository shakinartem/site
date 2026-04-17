import { ArrowUpRight, Clock3 } from 'lucide-react';
import { telegramLink } from '../data/site';
import { Reveal } from './Reveal';

export function CtaSection() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <div className="glass-panel relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14">
            <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-accent/25 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-neon/20 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-slate-200">
                  <Clock3 size={16} className="text-cyan" />
                  Обычно отвечаем в течение часа
                </div>
                <h2 className="mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Готовы обсудить ваш проект?
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  Напишите нам — ответим в течение часа и предложим решение под вашу задачу
                </p>
                <div className="mt-6 text-base text-slate-200">
                  Telegram: <span className="font-semibold text-white">@Ivan_Lag</span>
                </div>
              </div>

              <div>
                <a className="btn-primary gap-2" href={telegramLink} target="_blank" rel="noreferrer">
                  Написать в Telegram
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
