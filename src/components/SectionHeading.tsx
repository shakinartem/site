interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <div className="mb-4 inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-300">
        {eyebrow}
      </div>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy mt-5">{description}</p>
    </div>
  );
}
