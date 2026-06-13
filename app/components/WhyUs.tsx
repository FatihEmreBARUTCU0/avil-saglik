const reasons = [
  {
    title: "Güvenilir",
    description: "Sağlığınız bizim önceliğimiz",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Yüksek Kalite",
    description: "Kaliteli malzeme, profesyonel hizmet",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0V9.375c0-.621-.504-1.125-1.125-1.125h-.871M7.5 12.375v-1.5c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0V6.375c0-.621-.504-1.125-1.125-1.125h-.871M7.5 6.375v1.5c0 .621.504 1.125 1.125 1.125h.872" />
      </svg>
    ),
  },
  {
    title: "Evde Konfor",
    description: "Ev konforunda sağlık hizmeti",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v4m-1.5-1.5h3" />
      </svg>
    ),
  },
  {
    title: "Kişiye Özel",
    description: "Size özel bakım ve takip",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section id="neden-biz" className="border-y border-gold/20 bg-navy px-4 py-12 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-semibold text-light sm:text-4xl">
            Neden Biz?
          </h2>
          <div className="mx-auto mt-3 h-px w-12 bg-gold/60" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex items-start gap-4 border-b border-gold/10 pb-8 last:border-0 last:pb-0 sm:border-b-0 sm:pb-0 lg:border-r lg:border-gold/15 lg:pr-6 lg:last:border-r-0 lg:last:pr-0"
            >
              <div className="shrink-0 text-gold">{reason.icon}</div>
              <div>
                <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-gold">
                  {reason.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-light/70">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
