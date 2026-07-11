import { ROADMAP } from "@/lib/data";
import { RevealSection, Eyebrow } from "./RevealSection";

export function Roadmap() {
  return (
    <section id="roadmap" className="relative py-28 md:py-36">
      <div className="container-imperial">
        <RevealSection className="mx-auto max-w-2xl text-center">
          <Eyebrow>
            <span className="mx-auto">The Path To The Throne</span>
          </Eyebrow>
          <h2 className="mt-6 font-display text-4xl text-ivory sm:text-5xl">
            The <span className="text-gradient-gold">Roadmap.</span>
          </h2>
          <a
            href="/mo20-imperial-roadmap.pdf"
            download
            className="group mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide2 text-gold/80 transition-colors hover:text-gold"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
              aria-hidden="true"
            >
              <path d="M12 4v11m0 0-4-4m4 4 4-4M5 19h14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download Roadmap (PDF)
          </a>
        </RevealSection>

        <div className="relative mt-20">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/25 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="flex flex-col gap-14 md:gap-20">
            {ROADMAP.map((phase, i) => {
              const alignRight = i % 2 === 1;
              return (
                <RevealSection
                  key={phase.phase}
                  delay={0.05}
                  className={`relative flex flex-col md:flex-row ${
                    alignRight ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-6 top-1 -translate-x-1/2 md:left-1/2">
                    <span className="flex h-3 w-3 items-center justify-center rounded-full bg-void ring-2 ring-gold">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    </span>
                  </div>

                  <div className="w-full pl-14 md:w-1/2 md:pl-0 md:even:pl-0">
                    <div
                      className={`glass-card p-8 md:max-w-md ${
                        alignRight ? "md:mr-12 md:ml-auto" : "md:ml-12"
                      }`}
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-display text-3xl text-gold/60">
                          {phase.phase}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-wide2 text-mist">
                          Phase {phase.phase}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-2xl text-ivory">
                        {phase.title}
                      </h3>
                      <ul className="mt-5 space-y-2.5">
                        {phase.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 font-sans text-sm text-mist"
                          >
                            <span className="h-1 w-1 rounded-full bg-gold" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </RevealSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
