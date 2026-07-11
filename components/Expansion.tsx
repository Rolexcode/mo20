"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealSection, Eyebrow } from "./RevealSection";

export function Expansion() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="expansion"
      ref={ref}
      className="relative h-[85vh] min-h-[560px] overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 -top-[8%] h-[116%]">
        <Image
          src="/images/expansion-legion.jpg"
          alt="The Imperial legion, symbolizing MO20's global expansion"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-void/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-void/90 via-void/20 to-void/60" />

      <div className="container-imperial relative z-10 flex h-full flex-col justify-end pb-20">
        <RevealSection className="max-w-2xl">
          <Eyebrow>Territorial Ascension</Eyebrow>
          <h2 className="mt-6 font-display text-4xl leading-tight text-ivory sm:text-5xl md:text-6xl">
            Expansion Is{" "}
            <span className="text-gradient-gold">Inevitable.</span>
          </h2>
          <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-mist sm:text-lg">
            MO20 is building beyond hype. It’s a global community assembled
            with intent, moving with the discipline of an empire rather than
            the noise of a trend. This is long-term vision, executed like a
            campaign, not a sprint.
          </p>
        </RevealSection>
      </div>
    </section>
  );
}
