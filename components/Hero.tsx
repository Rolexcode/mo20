"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ParticleField } from "./ParticleField";
import { GoldButton } from "./GoldButton";
import { SITE } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden pt-20">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-radial" />
        <ParticleField />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_75%)]" />
      </div>

      <div className="container-imperial relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-12 text-center">
        {/* Imperial Seal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-10 flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48"
        >
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 h-full w-full animate-rotateslow"
            aria-hidden="true"
          >
            <defs>
              <path
                id="seal-ring"
                d="M 100,100 m -84,0 a 84,84 0 1,1 168,0 a 84,84 0 1,1 -168,0"
              />
            </defs>
            <text fill="#D4AF37" fontSize="9" letterSpacing="4" opacity="0.75">
              <textPath href="#seal-ring" startOffset="0%">
                MO20 IMPERIAL • SOLANA BLOCKCHAIN • THE THRONE IS WAITING • MO20
                IMPERIAL • SOLANA BLOCKCHAIN • THE THRONE IS WAITING •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-4 rounded-full bg-gold-radial blur-xl animate-pulseglow" />
          <div className="relative h-28 w-28 overflow-hidden rounded-full border border-gold/40 shadow-goldlg sm:h-32 sm:w-32">
            <Image
              src="/images/lion-medallion.jpg"
              alt="MO20 Imperial gold lion crest"
              fill
              sizes="128px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="font-mono text-[11px] uppercase tracking-imperial text-gold/80">
            The Rise Of A New Era
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Rule Beyond{" "}
          <span className="text-gradient-shimmer animate-shimmer">
            Limits.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.9 }}
          className="mt-8 max-w-xl font-serif text-lg italic text-mist sm:text-xl"
        >
          MO20 Imperial represents power, prestige, and long-term dominance on
          the Solana blockchain.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.9 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <GoldButton href="#about">Enter The Empire</GoldButton>
          <GoldButton href={SITE.telegram} variant="ghost" external>
            Join Telegram
          </GoldButton>
          <GoldButton href={SITE.twitter} variant="ghost" external>
            Follow on X
          </GoldButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="glass-card mt-10 flex items-center gap-3 rounded-full px-6 py-3"
        >
          <span className="font-mono text-[10px] uppercase tracking-wide2 text-mist">
            Contract Address
          </span>
          <span className="h-3 w-px bg-gold/30" />
          <span className="font-mono text-[10px] uppercase tracking-wide2 text-gold">
            {SITE.contractAddress}
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-imperial text-mist">
            Scroll
          </span>
          <div className="h-8 w-px overflow-hidden bg-gold/15">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-full bg-gold"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
