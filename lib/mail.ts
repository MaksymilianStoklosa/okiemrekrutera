import { Resend } from "resend";
import {
  serviceLabels,
  type ContactFormValues,
} from "@/lib/validation/contact";

// Konfiguracja wysyłki e-mail. Klucz API jest wczytywany wyłącznie ze
// zmiennych środowiskowych (.env.local) - nigdy nie umieszczaj go w kodzie.
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_TO_EMAIL =
  process.env.CONTACT_TO_EMAIL ?? "kontakt@okiemrekrutera.pl";
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "formularz@okiemrekrutera.pl";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function sendContactEmail(
  data: Pick<ContactFormValues, "name" | "email" | "service" | "message">,
) {
  if (!RESEND_API_KEY) {
    // Brak skonfigurowanego klucza API - najczęściej w środowisku lokalnym/deweloperskim.
    throw new Error(
      "Brak konfiguracji serwisu mailowego (RESEND_API_KEY). Ustaw zmienną w .env.local.",
    );
  }

  const resend = new Resend(RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: CONTACT_FROM_EMAIL,
    to: CONTACT_TO_EMAIL,
    replyTo: data.email,
    subject: `Nowe zapytanie ze strony: ${serviceLabels[data.service]}`,
    html: `
      <p><strong>Imię:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Usługa:</strong> ${escapeHtml(serviceLabels[data.service])}</p>
      <p><strong>Wiadomość:</strong></p>
      <p>${escapeHtml(data.message).replaceAll("\n", "<br />")}</p>
    `,
  });

  if (error) {
    throw new Error(`Nie udało się wysłać wiadomości: ${error.message}`);
  }
}
