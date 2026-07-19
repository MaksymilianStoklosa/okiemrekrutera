export const siteConfig = {
  name: "OkiemRekrutera.pl",
  tagline: "Spójrz na swoją karierę okiem rekrutera",
  description:
    "Konsultacje kariery: poprawa i pisanie CV, przygotowanie do rozmowy rekrutacyjnej, optymalizacja profilu LinkedIn oraz analiza rynku pracy. Pomagam znaleźć pracę, o jakiej marzysz.",
  url: "https://okiemrekrutera.pl",
  contactEmail: "kontakt@okiemrekrutera.pl",
  locale: "pl_PL",
  ogImage: "/og-image.svg",
  author: "Justyna",
  keywords: [
    "tworzenie cv",
    "pomoc w cv",
    "pisanie cv",
    "napisanie cv",
    "poprawa cv",
    "cv",
    "wzór cv",
    "jak napisać cv",
    "profesjonalne cv",
    "cv pod ats",
    "cv które przechodzi ats",
    "list motywacyjny",
    "rekrutacja",
    "doradca kariery",
    "doradztwo zawodowe",
    "konsultacje kariery",
    "coaching kariery",
    "przygotowanie do rozmowy kwalifikacyjnej",
    "przygotowanie do rozmowy rekrutacyjnej",
    "symulacja rozmowy rekrutacyjnej",
    "mock interview",
    "optymalizacja profilu linkedin",
    "profil linkedin",
    "personal branding",
    "szukanie pracy",
    "zmiana pracy",
    "zmiana branży",
    "strategia poszukiwania pracy",
    "analiza rynku pracy",
    "była rekruterka",
    "konsultant hr",
    "audyt cv",
    "recenzja cv",
  ],
} as const;

// TODO: podmienić na docelowe adresy profili w mediach społecznościowych.
export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/wrobeljustyna/",
    icon: "linkedin",
  },
] as const;

export const navLinks = [
  { href: "/oferta", label: "Oferta" },
  { href: "/cennik", label: "Cennik" },
  { href: "/blog", label: "Blog" },
  { href: "/o-mnie", label: "O mnie" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const footerLinks = [
  { href: "/regulamin", label: "Regulamin świadczenia usług" },
  { href: "/polityka-prywatnosci", label: "Polityka prywatności" },
] as const;
