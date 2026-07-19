export type Testimonial = {
  name: string;
  role: string;
  content: string;
  initials: string;
};

// Przykładowe opinie ilustracyjne - do podmiany na realne po uzyskaniu zgody klientów.
export const testimonials: Testimonial[] = [
  {
    name: "Anna K.",
    role: "Specjalistka ds. marketingu",
    content:
      "Dzięki poprawie CV zaczęłam dostawać zaproszenia na rozmowy już w pierwszym tygodniu. Konkretne, praktyczne wskazówki - dokładnie to, czego potrzebowałam.",
    initials: "AK",
  },
  {
    name: "Michał W.",
    role: "Junior Developer",
    content:
      "Symulacja rozmowy rekrutacyjnej pomogła mi oswoić stres i lepiej ustrukturyzować odpowiedzi. Na prawdziwej rozmowie czułem się dużo pewniej.",
    initials: "MW",
  },
  {
    name: "Karolina P.",
    role: "Zmiana branży na IT",
    content:
      "Analiza rynku pracy i plan działania uporządkowały mój chaotyczny proces szukania pracy. Wiedziałam dokładnie, co robić krok po kroku.",
    initials: "KP",
  },
  {
    name: "Tomasz B.",
    role: "Kierownik projektu",
    content:
      "Optymalizacja profilu LinkedIn zwiększyła liczbę wiadomości od rekruterów w ciągu kilku dni. Profesjonalne podejście i mnóstwo konkretnych wskazówek.",
    initials: "TB",
  },
  {
    name: "Magdalena S.",
    role: "Absolwentka szukająca pierwszej pracy",
    content:
      "Napisanie CV od zera było dla mnie ogromnym wyzwaniem. Dzięki wsparciu powstał dokument, który jasno pokazuje moje mocne strony mimo braku doświadczenia.",
    initials: "MS",
  },
  {
    name: "Piotr N.",
    role: "Specjalista ds. sprzedaży",
    content:
      "Feedback po próbnej rozmowie rekrutacyjnej był bardzo szczegółowy i szczery. Poprawiłem sposób opowiadania o swoich osiągnięciach i dostałem ofertę pracy.",
    initials: "PN",
  },
];
