import { ShieldCheck, Target, Clock, MessageCircleHeart } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Doświadczenie po stronie rekrutera",
    description:
      "Wiem, na co realnie zwracają uwagę rekruterzy i systemy ATS, bo sama przez lata prowadziłam rekrutacje - nie zgaduję, tylko wiem, co działa.",
  },
  {
    icon: Target,
    title: "Indywidualne podejście",
    description:
      "Każde CV i każda rozmowa przygotowywane są pod konkretną osobę, branżę i stanowisko - bez gotowych szablonów kopiowanych z internetu.",
  },
  {
    icon: MessageCircleHeart,
    title: "Konkretny, szczery feedback",
    description:
      "Otrzymujesz jasne wskazówki, co poprawić i dlaczego - bez ogólników, za to z uzasadnieniem każdej rekomendowanej zmiany.",
  },
  {
    icon: Clock,
    title: "Szybka realizacja",
    description:
      "Odpowiadam szybko na zapytania, a większość usług realizuję w ciągu kilku dni roboczych od ustalenia szczegółów współpracy.",
  },
];

export function WhyUs() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {reasons.map((reason) => {
        const Icon = reason.icon;
        return (
          <div key={reason.title} className="flex gap-5">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
              <Icon aria-hidden="true" className="size-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{reason.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
