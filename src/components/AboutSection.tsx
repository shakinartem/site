import { metrics, stack, trustPoints } from '../data/site';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="О нас"
            title="Небольшая команда, которая не теряет суть проекта"
            description="Мы — небольшое агентство разработчиков с фокусом на результат. Без лишних менеджеров, без потери информации, без срывов сроков."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {metrics.map((metric, index) => (
                <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="text-sm text-slate-400">0{index + 1}</div>
                  <div className="mt-5 font-display text-4xl font-bold text-white">{metric.value}</div>
                  <div className="mt-2 text-sm text-slate-300">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-[#0b0f20]/70 p-6">
              <div className="text-sm uppercase tracking-[0.26em] text-slate-400">Стек</div>
              <div className="mt-5 flex flex-wrap gap-3">
                {stack.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {trustPoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 0.06}>
                <div className="glass-panel rounded-[1.75rem] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-cyan">
                      <point.icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">{point.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{point.text}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
