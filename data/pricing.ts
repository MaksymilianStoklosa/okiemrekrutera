export type PricingPackage = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export const pricingPackages: PricingPackage[] = [
  {
    name: "Podstawowy",
    price: "od 249 zł",
    description: "Szybka pomoc dla osób, które mają już gotowe CV.",
    features: [
      "Audyt i poprawa istniejącego CV",
      "Dopasowanie słów kluczowych pod ATS",
      "Jedna runda poprawek",
    ],
  },
  {
    name: "Standard",
    price: "od 449 zł",
    description:
      "Najczęściej wybierany pakiet - kompletne wsparcie w poszukiwaniu pracy.",
    features: [
      "Pisanie CV od zera lub pełna przebudowa",
      "Optymalizacja profilu LinkedIn",
      "Dwie rundy poprawek",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "od 799 zł",
    description:
      "Pełne przygotowanie do zmiany pracy - od dokumentów po rozmowę.",
    features: [
      "Wszystko z pakietu Standard",
      "Symulacja rozmowy rekrutacyjnej (mock interview)",
      "Analiza rynku pracy i strategia poszukiwania pracy",
    ],
  },
];
