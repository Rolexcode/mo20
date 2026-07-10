import Image from "next/image";
import { RevealSection, Eyebrow } from "./RevealSection";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="container-imperial grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-12">
        <RevealSection className="relative order-2 md:order-1">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute -inset-6 rounded-full bg-gold-radial blur-2xl" />
            <div className="absolute inset-0 rounded-full border border-gold/20" />
            <div className="absolute inset-6 overflow-hidden rounded-full border border-gold/30 shadow-goldlg">
              <Image
                src="/images/lion-medallion.jpg"
                alt="The Imperial lion, official crest of MO20"
                fill
                sizes="(max-width: 768px) 90vw, 448px"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 animate-rotateslow rounded-full border border-dashed border-gold/10" />
          </div>
        </RevealSection>

        <RevealSection delay={0.15} className="order-1 md:order-2">
          <Eyebrow>About The Empire</Eyebrow>
          <h2 className="mt-6 font-display text-4xl leading-tight text-ivory sm:text-5xl">
            We Are Not Building{" "}
            <span className="text-gradient-gold">Another Token.</span>
          </h2>
          <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-mist sm:text-lg">
            MO20 Imperial is not just a token — it is a symbol of absolute
            power, nobility, and dominance on the Solana blockchain. Crafted
            for those who seek the peak of luxury and the strength of an
            empire.
          </p>
          <p className="mt-5 max-w-lg font-sans text-base leading-relaxed text-mist sm:text-lg">
            Every decision is made with discipline. Every phase is built
            toward prestige, not noise. We are assembling an ecosystem —
            deliberately, patiently — for those willing to claim their place
            in it.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-gold/10 pt-8">
            {[
              { label: "Network", value: "Solana" },
              { label: "Ticker", value: "$MO20" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-xl text-gold sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wide2 text-mist">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
