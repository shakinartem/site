import { motion } from 'framer-motion';
import { ArrowDownRight, MessageCircleMore } from 'lucide-react';
import { telegramLink } from '../data/site';
import { Reveal } from './Reveal';

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-32 sm:pb-28 sm:pt-40">
      <div className="absolute inset-0 -z-20 bg-noise opacity-80" />
      <div className="grid-overlay absolute inset-x-0 top-0 -z-10 h-[760px] animate-gridShift opacity-30" />
      <div className="noise-overlay absolute inset-0 -z-10 opacity-30" />
      <div className="absolute left-[10%] top-20 -z-10 h-48 w-48 rounded-full bg-accent/30 blur-3xl sm:h-72 sm:w-72" />
      <div className="absolute right-[8%] top-36 -z-10 h-64 w-64 animate-pulseSoft rounded-full bg-neon/25 blur-3xl sm:h-80 sm:w-80" />
      <div className="absolute bottom-10 left-1/2 -z-10 h-56 w-56 -translate-x-1/2 animate-float rounded-full bg-cyan/20 blur-3xl" />

      <div className="section-shell grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-slate-200">
              <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_20px_rgba(76,201,240,0.9)]" />
              DevPair — продуктовый подход к разработке
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Технические решения,
              <br />
              <span className="text-gradient">которые работают на вас</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Разрабатываем сайты, Telegram-ботов и автоматизацию под задачи бизнеса
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a className="btn-primary gap-2" href={telegramLink} target="_blank" rel="noreferrer">
                <MessageCircleMore size={18} />
                Обсудить проект
              </a>
              <a className="btn-secondary gap-2" href="#cases">
                Смотреть кейсы
                <ArrowDownRight size={18} />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18} className="relative">
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
            <div className="absolute -right-10 top-10 h-32 w-32 rounded-full bg-accent/25 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-neon/20 blur-3xl" />

            <div className="relative space-y-6">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                <div>
                  <div className="text-sm text-slate-400">Фокус</div>
                  <div className="mt-1 font-display text-xl font-bold text-white">Сильный digital delivery</div>
                </div>
                <div className="rounded-full bg-cyan/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-cyan">
                  live
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ['Скорость', 'Запускаем без тяжёлых процессов и лишних согласований'],
                  ['Продуктовый взгляд', 'Собираем не просто код, а инструмент под рост бизнеса'],
                  ['GitHub Pages ready', 'Статический фронтенд без серверной части и сложного деплоя'],
                  ['Премиальный UI', 'Технологичная подача, которая усиливает доверие к бренду'],
                ].map(([title, text], index) => (
                  <motion.div
                    key={title}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-2xl border border-white/10 bg-[#0d1022]/80 p-5"
                  >
                    <div className="text-sm text-slate-400">0{index + 1}</div>
                    <div className="mt-3 font-display text-lg font-bold text-white">{title}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

