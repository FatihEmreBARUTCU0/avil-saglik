import { site } from "../config/site";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  variant?: "light" | "dark";
};

const sizes = {
  sm: { circle: 40, icon: 22, avil: "text-base", sub: "text-[0.55rem]" },
  md: { circle: 56, icon: 30, avil: "text-xl", sub: "text-[0.65rem]" },
  lg: { circle: 96, icon: 52, avil: "text-3xl", sub: "text-xs" },
};

export default function Logo({
  size = "md",
  showText = true,
  variant = "light",
}: LogoProps) {
  const s = sizes[size];
  const textColor = variant === "light" ? "text-light" : "text-navy";
  const subColor = variant === "light" ? "text-light/60" : "text-navy/60";

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="relative flex shrink-0 items-center justify-center rounded-full border-2 border-gold"
        style={{ width: s.circle, height: s.circle }}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          style={{ width: s.icon, height: s.icon }}
          aria-hidden
        >
          <path
            d="M16 10 L16 38 L20 38 L20 26 L28 26 L28 38 L32 38 L32 10 L28 10 L28 22 L20 22 L20 10 Z"
            fill="currentColor"
            className="text-light"
          />
          <path
            d="M10 26 Q24 18 38 26"
            stroke="#D4AF37"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
      {showText && (
        <div className="text-center">
          <p
            className={`font-body font-light tracking-[0.35em] ${s.avil} ${textColor}`}
          >
            {site.logoShort}
          </p>
          <p
            className={`mt-0.5 font-body font-medium tracking-[0.25em] ${s.sub} ${subColor}`}
          >
            {site.logoSub}
          </p>
        </div>
      )}
    </div>
  );
}
