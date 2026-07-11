import Image from "next/image";
import { RevealSection, Eyebrow } from "./RevealSection";

export function Vision() {
  return (
    <section id="vision" className="relative py-28 md:py-36">
      <div className="container-imperial grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-12">
        <RevealSection>
          <Eyebrow>The Mind Behind The Empire</Eyebrow>
          <h2 className="mt-6 font-display text-4xl leading-tight text-ivory sm:text-5xl">
            Strategy Over{" "}
            <span className="text-gradient-gold">Noise.</span>
          </h2>
          <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-mist sm:text-lg">
            Empires are not built on speculation. They are built on planning,
            execution, and intelligent growth. Every phase of MO20 Imperial
            is calculated, not chased.
          </p>
          <p className="mt-5 max-w-lg font-sans text-base leading-relaxed text-mist sm:text-lg">
            While the market moves on noise, we move on structure. Long-term
            thinking isn’t a slogan here. It’s the mechanism behind every
            decision we make.
          </p>

          <ul className="mt-10 space-y-4 border-t border-gold/10 pt-8">
            {[
              "Calculated phases, not impulsive moves",
              "Security and resilience by design",
              "Growth measured in decades, not days",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                <span className="font-sans text-sm text-mist sm:text-base">
                  {line}
                </span>
              </li>
            ))}
          </ul>
        </RevealSection>

        <RevealSection delay={0.15} className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-gold/15 shadow-goldlg">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
            <Image
              src="/images/strategic-mind.jpg"
              alt="A luminous, formula-lit mind representing MO20's strategic intelligence"
              fill
              sizes="(max-width: 768px) 90vw, 560px"
              className="object-cover"
            />
          </div>
          <div className="absolute -inset-4 -z-10 rounded-sm bg-gold-radial blur-2xl" />
        </RevealSection>
      </div>
    </section>
  );
}
