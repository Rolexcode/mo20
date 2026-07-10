"use client";

import { motion } from "framer-motion";
import { VALUES } from "@/lib/data";
import { CrownIcon, ShieldIcon, GlobeIcon, MindIcon } from "./icons";
import { RevealSection, Eyebrow } from "./RevealSection";

const ICONS = {
  crown: CrownIcon,
  shield: ShieldIcon,
  globe: GlobeIcon,
  mind: MindIcon,
};

export function Values() {
  return (
    <section id="values" className="relative py-28 md:py-36">
      <div className="container-imperial">
        <RevealSection className="mx-auto max-w-2xl text-center">
          <Eyebrow>
            <span className="mx-auto">Imperial Values</span>
          </Eyebrow>
          <h2 className="mt-6 font-display text-4xl text-ivory sm:text-5xl">
            The Code Of An{" "}
            <span className="text-gradient-gold">Empire.</span>
          </h2>
        </RevealSection>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, i) => {
            const Icon = ICONS[value.glyph as keyof typeof ICONS];
            return (
              <RevealSection key={value.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card group relative flex h-full flex-col p-8"
                >
                  <span className="font-mono text-xs text-gold/50">
                    {value.numeral}
                  </span>
                  <Icon className="mt-5 h-9 w-9 text-gold transition-transform duration-500 group-hover:scale-110" />
                  <h3 className="mt-6 font-display text-xl text-ivory">
                    {value.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-mist">
                    {value.copy}
                  </p>
                  <div className="mt-6 h-px w-full bg-gold-line opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </motion.div>
              </RevealSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
