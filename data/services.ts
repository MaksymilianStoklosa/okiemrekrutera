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
    slug: "poprawa-cv",
    title: "Poprawa i redakcja CV",
    shortDescription:
      "Profesjonalny audyt Twojego obecnego CV - poprawiamy treść, układ i słowa kluczowe.",
    description:
      "Przechodzę Twoje CV punkt po punkcie: sprawdzam strukturę, czytelność, dobór słów kluczowych pod ATS oraz sposób prezentacji osiągnięć. Otrzymujesz konkretne poprawki i uzasadnienie każdej zmiany.",
    bullets: [
      "Szczegółowa recenzja treści i formy",
      "Dopasowanie słów kluczowych pod system ATS",
      "Poprawa opisu doświadczenia i osiągnięć",
    ],
    icon: "FileText",
  },
  {
    slug: "pisanie-cv",
    title: "Pisanie CV od zera",
    shortDescription:
      "Nowoczesne CV budowane od podstaw na bazie Twojego doświadczenia i celów zawodowych.",
    description:
      "Wspólnie budujemy CV, które jasno komunikuje Twoją wartość dla pracodawcy. Zaczynamy od wywiadu o Twoim doświadczeniu, a kończymy na gotowym, dopracowanym dokumencie.",
    bullets: [
      "Wywiad i analiza doświadczenia zawodowego",
      "Nowoczesny, czytelny szablon",
      "Wersja dopasowana pod konkretną branżę/stanowisko",
    ],
    icon: "PenLine",
  },
  {
    slug: "przygotowanie-do-rozmowy",
    title: "Przygotowanie do rozmowy rekrutacyjnej",
    shortDescription:
      "Symulacja rozmowy rekrutacyjnej (mock interview) i informacja zwrotna od rekrutera.",
    description:
      "Przeprowadzam z Tobą próbną rozmowę rekrutacyjną, dopasowaną do stanowiska, o które się ubiegasz. Otrzymujesz szczegółową informację zwrotną, wskazówki dotyczące odpowiedzi i mowy ciała.",
    bullets: [
      "Symulacja rozmowy rekrutacyjnej",
      "Feedback od doświadczonego rekrutera",
      "Przygotowanie do trudnych pytań",
    ],
    icon: "MessageSquare",
  },
  {
    slug: "linkedin",
    title: "Optymalizacja profilu LinkedIn",
    shortDescription:
      "Profil LinkedIn, który przyciąga rekruterów i buduje Twoją markę zawodową.",
    description:
      "Analizuję i poprawiam Twój profil LinkedIn: nagłówek, sekcję „Informacje”, opis doświadczenia oraz widoczność w wyszukiwarce. Pomagam też zbudować spójną obecność zawodową.",
    bullets: [
      "Optymalizacja nagłówka i sekcji „Informacje”",
      "Poprawa widoczności profilu w wyszukiwarce",
      "Wskazówki dot. budowania sieci kontaktów",
    ],
    icon: "Linkedin",
  },
  {
    slug: "analiza-rynku-pracy",
    title: "Analiza rynku pracy i strategia poszukiwania pracy",
    shortDescription:
      "Plan działania dopasowany do Twojej sytuacji i celów zawodowych.",
    description:
      "Analizujemy aktualną sytuację na rynku pracy w Twojej branży, ustalamy realistyczny plan poszukiwania pracy i priorytety, żeby efektywniej wykorzystać czas i energię.",
    bullets: [
      "Analiza rynku pracy w Twojej branży",
      "Strategia i harmonogram poszukiwania pracy",
      "Wskazówki dot. źródeł ofert i networkingu",
    ],
    icon: "TrendingUp",
  },
  {
    slug: "konsultacja-kariery",
    title: "Konsultacja kariery",
    shortDescription:
      "Indywidualna rozmowa doradcza - wspólnie ustalamy kierunek rozwoju zawodowego.",
    description:
      "Podczas konsultacji przyglądamy się Twojej dotychczasowej ścieżce zawodowej, mocnym stronom i celom, żeby wypracować konkretny plan dalszego rozwoju kariery. To dobry punkt wyjścia, jeśli zastanawiasz się nad zmianą pracy, branży lub kolejnym krokiem zawodowym.",
    bullets: [
      "Analiza dotychczasowej ścieżki zawodowej",
      "Określenie celów i kierunku rozwoju",
      "Konkretny plan kolejnych kroków",
    ],
    icon: "Compass",
  },
];
