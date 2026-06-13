import { site } from "../config/site";

const teamValues = [
  {
    title: "Deneyimli Personel",
    description:
      "Alanında uzman, lisanslı sağlık personeli ile güvenli uygulamalar.",
  },
  {
    title: "Hasta Odaklı Yaklaşım",
    description:
      "Her hastanın ihtiyacını dinleyerek kişiye özel bakım planı oluşturuyoruz.",
  },
];

export default function Team() {
  return (
    <section id="ekibimiz" className="bg-light px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
              Ekibimiz
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-navy sm:text-4xl">
              Profesyonel Sağlık Ekibimiz
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-navy/65 sm:text-base">
              {site.name} ekibi, evde sağlık hizmetlerinde yılların deneyimini
              bir araya getiriyor. Serum tedavilerinden pansuman uygulamalarına
              kadar tüm süreçlerde yanınızdayız.
            </p>

            <div className="mt-8 space-y-5">
              {teamValues.map((item) => (
                <div
                  key={item.title}
                  className="border-l-2 border-gold pl-5"
                >
                  <h3 className="font-heading text-lg font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy/60">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="flex aspect-square flex-col items-center justify-center border border-gold/25 bg-navy p-4 text-center transition-colors hover:border-gold"
              >
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-navy">
                  <svg
                    className="h-8 w-8 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <span className="text-xs font-medium text-light/80">
                  Sağlık Personeli
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
