export type PricingPackage = {
  name: string;
  price: string;
  description: string;
  originalPrice?: string;
  features: string[];
  highlighted?: boolean;
};

export const pricingPackages: PricingPackage[] = [
  {
    name: "Audyt i Poprawa CV",
    price: "249 zł",
    description:
      "Dla osób, które mają już gotowe CV i potrzebują profesjonalnego doszlifowania dokumentu.",
    features: [
      "Poprawa i redakcja istniejącego CV (treść, układ, czytelność)",
      "Optymalizacja słów kluczowych pod systemy ATS",
      "Ocena prezentacji osiągnięć zawodowych",
      "1 runda poprawek",
    ],
  },
  {
    name: "Pakiet START",
    price: "449 zł",
    originalPrice: "549 zł",
    description:
      "Pisanie CV od zera lub gruntowna przebudowa + optymalizacja profilu LinkedIn.",
    features: [
      "Pisanie CV od zera lub pełna, gruntowna przebudowa na podstawie wywiadu",
      "Optymalizacja profilu LinkedIn (nagłówek, O mnie, widoczność)",
      "2 rundy poprawek",
      "Formaty: PDF + edytowalny DOCX",
    ],
    highlighted: true,
  },
  {
    name: "Pakiet REKRUTACJA",
    price: "649 zł",
    originalPrice: "799 zł",
    description:
      "Zawiera wszystko z Pakietu START oraz symulację rozmowy rekrutacyjnej i przygotowanie do pytań z danej branży.",
    features: [
      "Wszystko z Pakietu START",
      "Symulacja rozmowy rekrutacyjnej (np. 60 min) z feedbackiem",
      "Konstruktywny feedback i wskazówki dotyczące odpowiedzi i mowy ciała",
      "Przygotowanie do pytań rekrutacyjnych w danej branży",
    ],
  },
  {
    name: "Pakiet KARIERA",
    price: "899 zł",
    originalPrice: "1 099 zł",
    description:
      "Dla osób szukających zmiany ścieżki zawodowej lub potrzebujących kompleksowej strategii i konsultacji kariery.",
    features: [
      "Wszystko z Pakietu REKRUTACJA",
      "Konsultacja kariery (np. 60 min) - analiza ścieżki i określenie celów",
      "Strategia i plan poszukiwania pracy (analiza rynku, cold mailing, networking)",
    ],
  },
];
