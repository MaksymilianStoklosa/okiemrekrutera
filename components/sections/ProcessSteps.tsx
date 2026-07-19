const steps = [
  {
    number: "1",
    title: "Wysyłasz wiadomość",
    description:
      "Opisujesz w skrócie, w czym potrzebujesz pomocy (CV, rozmowa rekrutacyjna, LinkedIn, kariera) - przez formularz kontaktowy lub e-mail.",
  },
  {
    number: "2",
    title: "Bezpłatna rozmowa wstępna",
    description:
      "Umawiamy krótką, bezpłatną rozmowę, podczas której poznaję Twoją sytuację i cele, a Ty dowiadujesz się, jak mogę pomóc.",
  },
  {
    number: "3",
    title: "Ustalenie zakresu i wyceny",
    description:
      "Proponuję zakres współpracy dopasowany do Twoich potrzeb wraz z ceną i orientacyjnym czasem realizacji.",
  },
  {
    number: "4",
    title: "Realizacja usługi",
    description:
      "Pracujemy nad Twoim CV, przygotowaniem do rozmowy lub profilem LinkedIn - z bieżącym kontaktem i możliwością konsultacji.",
  },
  {
    number: "5",
    title: "Przekazanie efektów i wsparcie",
    description:
      "Otrzymujesz gotowe materiały wraz z omówieniem zmian oraz wskazówkami na dalsze kroki w procesie rekrutacji.",
  },
];

export function ProcessSteps() {
  return (
    <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step) => (
        <li key={step.number} className="flex flex-col gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
            {step.number}
          </span>
          <h3 className="min-h-12 text-lg font-semibold text-foreground">
            {step.title}
          </h3>
          <p className="text-sm text-muted-foreground">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
