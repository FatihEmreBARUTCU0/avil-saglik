const services = [
  {
    title: "Atom Serum",
    description: "Atom serum uygulamaları",
    href: "#iletisim",
    icon: (
      <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0l-2-2m2 2l2-2" />
      </svg>
    ),
  },
  {
    title: "Serumlar",
    description: "Tüm serum çeşitlerimiz",
    href: "#iletisim",
    icon: (
      <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Enjeksiyon",
    description: "İğne & enjeksiyon hizmetleri",
    href: "#iletisim",
    icon: (
      <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l-4.5-4.5m4.5 4.5l4.5-4.5M6 9h12" />
      </svg>
    ),
  },
  {
    title: "Pansuman",
    description: "Pansuman & yara bakım hizmetleri",
    href: "#iletisim",
    icon: (
      <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Ekibimiz",
    description: "Profesyonel sağlık ekibimiz",
    href: "#ekibimiz",
    icon: (
      <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "İletişim",
    description: "Bilgi ve randevu için bize ulaşın",
    href: "#iletisim",
    icon: (
      <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="bg-light px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Hizmetlerimiz
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-navy sm:text-4xl">
            Evde Sağlık Hizmetleri
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-navy/65 sm:text-base">
            İhtiyacınıza uygun tüm sağlık uygulamalarını, steril malzeme ve
            deneyimli ekibimizle evinizde gerçekleştiriyoruz.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-navy ring-2 ring-gold ring-offset-4 ring-offset-light transition-transform group-hover:scale-105 sm:h-28 sm:w-28">
                <div className="text-gold">{service.icon}</div>
              </div>
              <h3 className="font-heading text-base font-semibold text-navy sm:text-lg">
                {service.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-navy/60 sm:text-sm">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
