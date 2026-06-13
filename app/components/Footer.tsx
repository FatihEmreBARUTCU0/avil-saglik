import { site } from "../config/site";
import Logo from "./Logo";

const footerLinks = [
  { href: "#anasayfa", label: "Anasayfa" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#neden-biz", label: "Neden Biz" },
  { href: "#ekibimiz", label: "Ekibimiz" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-navy px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          <a href="#anasayfa" aria-label={`Anasayfaya dön - ${site.name}`}>
            <Logo size="sm" />
          </a>

          <nav
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
            aria-label="Alt bilgi navigasyonu"
          >
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-label={`${link.label} bölümüne git`}
                className="text-xs font-medium uppercase tracking-wider text-light/50 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram profilini ziyaret et (${site.instagram})`}
            className="flex items-center gap-2 text-xs font-medium text-light/50 transition-colors hover:text-gold"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
            </svg>
            {site.instagram}
          </a>
        </div>

        <div className="mt-10 border-t border-gold/10 pt-8 text-center">
          <p className="text-xs text-light/40">{site.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
