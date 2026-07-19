import { z } from "zod";

export const services = [
  "poprawa-cv",
  "pisanie-cv",
  "przygotowanie-do-rozmowy",
  "linkedin",
  "analiza-rynku-pracy",
  "konsultacja-kariery",
  "inne",
] as const;

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Podaj imię (min. 2 znaki).")
    .max(100, "Imię jest za długie."),
  email: z
    .string()
    .trim()
    .min(1, "Podaj adres e-mail.")
    .email("Podaj poprawny adres e-mail."),
  service: z.enum(services, {
    message: "Wybierz usługę, której dotyczy zapytanie.",
  }),
  message: z
    .string()
    .trim()
    .min(10, "Wiadomość powinna mieć co najmniej 10 znaków.")
    .max(3000, "Wiadomość jest za długa (maks. 3000 znaków)."),
  consent: z.literal(true, {
    message: "Zgoda na przetwarzanie danych jest wymagana.",
  }),
  // Honeypot: pole ukryte przed użytkownikami, wypełniane tylko przez boty.
  // Musi pozostać puste.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const serviceLabels: Record<(typeof services)[number], string> = {
  "poprawa-cv": "Poprawa i redakcja CV",
  "pisanie-cv": "Pisanie CV od zera",
  "przygotowanie-do-rozmowy": "Przygotowanie do rozmowy rekrutacyjnej",
  linkedin: "Optymalizacja profilu LinkedIn",
  "analiza-rynku-pracy": "Analiza rynku pracy",
  "konsultacja-kariery": "Konsultacja kariery",
  inne: "Inne / nie jestem pewna/pewien",
};
