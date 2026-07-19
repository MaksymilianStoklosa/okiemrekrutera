export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  bullets: string[];
  icon:
    | "FileText"
    | "MessageSquare"
    | "Linkedin"
    | "TrendingUp"
    | "PenLine"
    | "Compass";
};

export const services: Service[] = [
  {
    slug: "audyt-poprawa-cv",
    title: "Audyt i Poprawa CV",
    shortDescription:
      "Masz już stworzone CV, ale nie przynosi oczekiwanych odpowiedzi? Przekształcę je tak, by przechodziło filtry ATS i przyciągało rekrutera.",
    description:
      "Bezpłatnie skonsultujemy Twój dokument, sprawdzimy blokery rekrutacyjne i przygotujemy czytelne, nowoczesne CV zoptymalizowane pod ATS.",
    bullets: [
      "Redakcja treści i układu",
      "Dopasowanie słów kluczowych pod ATS",
      "Poprawa prezentacji osiągnięć",
    ],
    icon: "FileText",
  },
  {
    slug: "pakiet-start",
    title: "Pakiet START",
    shortDescription:
      "Kompletny, cyfrowy i tradycyjny wizerunek zawodowy - CV od zera plus optymalizacja LinkedIn.",
    description:
      "Wywiad i tworzenie CV od podstaw oraz optymalizacja profilu LinkedIn pod potrzeby rynku pracy.",
    bullets: [
      "Wywiad i pisanie CV od zera",
      "Optymalizacja LinkedIn (nagłówek, O mnie, widoczność)",
      "Wsparcie w przygotowaniu procesu aplikacji",
    ],
    icon: "PenLine",
  },
  {
    slug: "pakiet-rekrutacja",
    title: "Pakiet REKRUTACJA",
    shortDescription:
      "Najczęściej wybierany zestaw: dokumenty + trening rozmowy, przygotowanie do procesu rekrutacyjnego.",
    description:
      "Kompleksowe przygotowanie: tworzymy dokumenty, optymalizujemy LinkedIn i przeprowadzamy symulację rozmowy z pełnym feedbackiem.",
    bullets: [
      "CV i LinkedIn (jak w Pakiecie START)",
      "Symulacja rozmowy rekrutacyjnej (60 min) z feedbackiem",
      "Przygotowanie do trudnych pytań i wskazówki dot. mowy ciała",
    ],
    icon: "MessageSquare",
  },
  {
    slug: "pakiet-kariera",
    title: "Pakiet KARIERA",
    shortDescription:
      "Kompleksowa zmiana zawodowa: dokumenty, rozmowy i indywidualna strategia wejścia na rynek pracy.",
    description:
      "Dla osób przebranżawiających się lub szukających nowej ścieżki zawodowej - łączymy dokumenty i symulacje rozmów z konsultacją kariery i planem poszukiwań.",
    bullets: [
      "Wszystko z Pakietu REKRUTACJA",
      "Konsultacja kariery (60 min) i analiza ścieżki",
      "Strategia poszukiwania pracy (cold mailing, networking, analiza rynku)",
    ],
    icon: "TrendingUp",
  },
];
