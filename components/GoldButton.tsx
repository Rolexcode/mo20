import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  className?: string;
};

export function GoldButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: Props) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 font-mono text-[11px] uppercase tracking-wide2 transition-all duration-300 ease-out";

  const styles =
    variant === "primary"
      ? "bg-gold text-void hover:bg-gold-soft shadow-gold hover:shadow-goldlg"
      : "border border-gold/30 text-ivory hover:border-gold/70 hover:bg-gold/5";

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${styles} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[100%]"
        />
      )}
    </Link>
  );
}
