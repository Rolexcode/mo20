export function CrownIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 34 L6 16 L16 24 L24 10 L32 24 L42 16 L40 34 Z" />
      <path d="M8 34 H40 V39 H8 Z" />
      <circle cx="24" cy="8" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="6" cy="14" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="42" cy="14" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 6 L40 12 V22 C40 32 33 39 24 42 C15 39 8 32 8 22 V12 Z" />
      <path d="M17 24 L22 29 L32 18" />
    </svg>
  );
}

export function GlobeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="17" />
      <ellipse cx="24" cy="24" rx="7" ry="17" />
      <path d="M7 24 H41" />
      <path d="M10 15 H38" />
      <path d="M10 33 H38" />
    </svg>
  );
}

export function MindIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 8 C11 8 7 13 8 19 C4 21 4 28 8 30 C7 36 12 41 19 40 C21 43 27 43 29 40 C36 41 41 36 40 30 C44 28 44 21 40 19 C41 13 37 8 30 8 C27 6 21 6 18 8 Z" />
      <path d="M18 16 V32 M24 12 V38 M30 16 V32" opacity="0.55" />
    </svg>
  );
}
