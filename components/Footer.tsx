import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-gold/10 py-16">
      <div className="container-imperial">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row">
          <div className="max-w-xs">
            <Link href="#" className="flex items-center gap-3">
              <span className="relative h-10 w-10 overflow-hidden rounded-full border border-gold/40">
                <Image
                  src="/images/lion-medallion.jpg"
                  alt="MO20 Imperial crest"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </span>
              <span className="font-display text-base tracking-wide2 text-ivory">
                MO20 <span className="text-gold">IMPERIAL</span>
              </span>
            </Link>
            <p className="mt-5 font-sans text-sm leading-relaxed text-mist">
              Built for the Empire. Power, prestige, and long-term dominance
              on the Solana blockchain.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wide2 text-gold/70">
                Navigate
              </p>
              <ul className="mt-4 space-y-3">
                {NAV_LINKS.slice(0, 4).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-mist transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-wide2 text-gold/70">
                Community
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href={SITE.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-mist transition-colors hover:text-gold"
                  >
                    Telegram
                  </Link>
                </li>
                <li>
                  <Link
                    href={SITE.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-mist transition-colors hover:text-gold"
                  >
                    X (Twitter)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gold/10 pt-8 sm:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-wide2 text-mist/70">
            © {new Date().getFullYear()} MO20 Imperial. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-wide2 text-mist/70">
            The Throne Is Waiting
          </p>
        </div>
      </div>
    </footer>
  );
}
