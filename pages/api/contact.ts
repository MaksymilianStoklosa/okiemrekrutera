import type { NextApiRequest, NextApiResponse } from "next";
import { contactFormSchema } from "@/lib/validation/contact";
import { sendContactEmail } from "@/lib/mail";
import { isRateLimited } from "@/lib/rate-limit";

type ApiResponse = { success: true } | { success: false; error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res
      .status(405)
      .json({ success: false, error: "Method Not Allowed" });
  }

  // Podstawowa ochrona przed spamem/nadużyciami - limit żądań per adres IP.
  const forwardedFor = req.headers["x-forwarded-for"];
  const ip = Array.isArray(forwardedFor)
    ? forwardedFor[0]
    : (forwardedFor?.split(",")[0]?.trim() ??
      req.socket.remoteAddress ??
      "unknown");

  if (isRateLimited(ip)) {
    return res.status(429).json({
      success: false,
      error: "Zbyt wiele żądań. Spróbuj ponownie za chwilę.",
    });
  }

  // Walidacja danych wejściowych po stronie serwera - nigdy nie ufamy
  // wyłącznie walidacji klienckiej.
  const parsed = contactFormSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      success: false,
      error: "Nieprawidłowe dane formularza.",
    });
  }

  const { name, email, service, message, website } = parsed.data;

  // Pole honeypot wypełnione => to prawdopodobnie bot. Udajemy sukces,
  // żeby nie zdradzać mechanizmu ochrony przed spamem.
  if (website) {
    return res.status(200).json({ success: true });
  }

  try {
    await sendContactEmail({ name, email, service, message });
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact form send error:", err);
    return res.status(500).json({
      success: false,
      error: "Nie udało się wysłać wiadomości. Spróbuj ponownie później.",
    });
  }
}
