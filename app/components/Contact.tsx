const MAPS_URL = "https://maps.app.goo.gl/Rmt2fnW2LNErFEaYA";

const contactItems = [
  {
    label: "Telefon",
    value: "+90 XXX XXX XX XX",
    sub: "Bilgi ve randevu hattı",
    href: "tel:+90XXXXXXXXXX",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: "E-posta",
    value: "info@avilsaglikbakim.com",
    sub: "7/24 yazabilirsiniz",
    href: "mailto:info@avilsaglikbakim.com",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Adres",
    value: "Cumhuriyet Mah, Silivri, İstanbul",
    sub: "Silivri, Türkiye",
    href: MAPS_URL,
    external: true,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@avilsaglikbakim",
    sub: "Güncel paylaşımlarımız",
    href: "https://instagram.com/avilsaglikbakim",
    external: true,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="iletisim" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            İletişim
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-light sm:text-4xl">
            Bize Ulaşın
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-light/65 sm:text-base">
            Randevu almak veya hizmetlerimiz hakkında bilgi almak için
            aşağıdaki kanallardan bize ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="group flex flex-col border border-gold/25 bg-navy/40 p-6 transition-colors hover:border-gold hover:bg-gold/5"
            >
              <div className="mb-4 text-gold">{item.icon}</div>
              <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                {item.label}
              </span>
              <span className="mt-2 text-sm font-medium text-light transition-colors group-hover:text-gold">
                {item.value}
              </span>
              <span className="mt-1 text-xs text-light/50">{item.sub}</span>
            </a>
          ))}
        </div>

        <div className="mt-10 overflow-hidden border border-gold/25">
          <iframe
            title="Avil Sağlık Bakım Konum"
            src="https://maps.google.com/maps?q=41.0734676,28.2479187&hl=tr&z=15&output=embed"
            className="h-80 w-full sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-t border-gold/20 bg-navy/60 px-4 py-3 text-sm font-medium text-gold transition-colors hover:bg-gold/10"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
            Google Maps&apos;te Aç
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 border border-gold/20 bg-gold/5 px-6 py-8 sm:flex-row sm:px-10">
          <div>
            <p className="font-heading text-xl font-semibold text-light">
              Hemen randevu oluşturun
            </p>
            <p className="mt-1 text-sm text-light/60">
              Silivri ve çevresinde evde sağlık hizmeti için bizi arayın.
            </p>
          </div>
          <a
            href="tel:+90XXXXXXXXXX"
            className="inline-flex shrink-0 items-center justify-center border border-gold bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-navy transition-colors hover:bg-gold/90"
          >
            +90 XXX XXX XX XX
          </a>
        </div>
      </div>
    </section>
  );
}
