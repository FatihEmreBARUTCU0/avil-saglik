import Image from "next/image";
import { site } from "../config/site";
import Logo from "./Logo";

const highlights = [
  {
    label: "Evde Sağlık Hizmetleri",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    label: "Profesyonel Ekip",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 9.094 9.094 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    label: "Kişiye Özel Bakım",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative overflow-hidden px-4 pt-28 pb-20 sm:px-6 lg:pt-32 lg:pb-28"
    >
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-[#0D1B2A]/75"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-wide text-light sm:text-5xl lg:text-6xl">
            {site.nameUpper}
          </h1>

          <p className="mx-auto mt-4 text-lg font-light tracking-wide text-gold sm:text-xl lg:mx-0">
            {site.slogan}
          </p>

          <div className="mx-auto mt-6 h-px w-16 bg-gold/60 lg:mx-0" />

          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-light/70 lg:mx-0 lg:text-lg">
            {site.description}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#iletisim"
              className="inline-flex w-full items-center justify-center border border-gold bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-navy transition-colors hover:bg-gold/90 sm:w-auto"
            >
              Randevu Al
            </a>
            <a
              href="#hizmetler"
              className="inline-flex w-full items-center justify-center border border-gold/50 px-8 py-3.5 text-sm font-medium tracking-wide text-gold transition-colors hover:border-gold hover:bg-gold/10 sm:w-auto"
            >
              Hizmetlerimiz
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Logo size="lg" />

          <div className="mt-10 w-full max-w-md space-y-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 border border-gold/20 bg-navy/50 px-5 py-4 backdrop-blur-sm transition-colors hover:border-gold/40"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-light/85">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
