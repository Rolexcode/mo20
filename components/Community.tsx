import Image from "next/image";
import { GoldButton } from "./GoldButton";
import { RevealSection, Eyebrow } from "./RevealSection";
import { SITE } from "@/lib/data";

export function Community() {
  return (
    <section id="community" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0">
        <Image
          src="/images/lion-rising.jpg"
          alt="The empire awakens"
          fill
          sizes="100vw"
          className="object-cover object-[center_25%] opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void via-void/90 to-void" />
      </div>

      <div className="container-imperial relative z-10 flex flex-col items-center text-center">
        <RevealSection>
          <Eyebrow>
            <span className="mx-auto">Join The Legacy</span>
          </Eyebrow>
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl leading-tight text-ivory sm:text-5xl md:text-6xl">
            Rise With The{" "}
            <span className="text-gradient-gold">Empire.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg font-sans text-base leading-relaxed text-mist sm:text-lg">
            The throne is waiting. Join a community built on discipline,
            prestige, and long-term dominance — not hype that fades by
            morning.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GoldButton href={SITE.telegram} external>
              Join Telegram
            </GoldButton>
            <GoldButton href={SITE.twitter} variant="ghost" external>
              Follow on X
            </GoldButton>
          </div>

          <div className="glass-card mx-auto mt-14 flex w-fit items-center gap-3 rounded-full px-6 py-3">
            <span className="font-mono text-[10px] uppercase tracking-wide2 text-mist">
              Contract Address
            </span>
            <span className="h-3 w-px bg-gold/30" />
            <span className="font-mono text-[10px] uppercase tracking-wide2 text-gold">
              {SITE.contractAddress}
            </span>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
