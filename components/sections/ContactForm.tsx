import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  contactFormSchema,
  serviceLabels,
  services,
  type ContactFormValues,
} from "@/lib/validation/contact";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      website: "",
      consent: undefined,
      service: undefined,
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitState("submitting");
    setErrorMessage(null);

    try {
      // Na standardowym hostingu (Vercel/Node) korzystamy z wbudowanego API route.
      // Przy statycznym eksporcie (GitHub Pages) API routes nie działają - w takim
      // wypadku trzeba ustawić NEXT_PUBLIC_CONTACT_ENDPOINT na adres zewnętrznego
      // serwisu do obsługi formularzy (np. Formspree/Getform).
      const endpoint =
        process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "/api/contact";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as {
        success: boolean;
        error?: string;
      };

      if (!response.ok || !data.success) {
        throw new Error(data.error ?? "Nie udało się wysłać wiadomości.");
      }

      setSubmitState("success");
      reset();
    } catch (err) {
      setSubmitState("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Nie udało się wysłać wiadomości. Spróbuj ponownie później.",
      );
    }
  }

  if (submitState === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border border-primary/30 bg-accent p-6 text-accent-foreground"
      >
        <p className="font-semibold">Dziękuję za wiadomość!</p>
        <p className="mt-1 text-sm">
          Odpowiem najszybciej, jak to możliwe, zwykle w ciągu 1–2 dni
          roboczych.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5"
    >
      {/* Honeypot - pole niewidoczne dla użytkowników, wykrywa boty. */}
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="website">Nie wypełniaj tego pola</Label>
        <Input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Imię</Label>
        <Input
          id="name"
          type="text"
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
        />
        {errors.name && (
          <p id="name-error" className="text-sm text-destructive">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Adres e-mail</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="service">Usługa, której dotyczy zapytanie</Label>
        <Controller
          control={control}
          name="service"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger id="service" className="w-full">
                <SelectValue placeholder="Wybierz usługę" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {serviceLabels[service]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.service && (
          <p className="text-sm text-destructive">{errors.service.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Wiadomość</Label>
        <Textarea
          id="message"
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex items-start gap-2">
        <input
          id="consent"
          type="checkbox"
          className="mt-1 size-4 rounded border-input"
          {...register("consent")}
        />
        <Label htmlFor="consent" className="block text-sm font-normal">
          Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
          udzielenia odpowiedzi na zapytanie, zgodnie z{" "}
          <Link href="/polityka-prywatnosci" className="underline">
            polityką prywatności
          </Link>
          .
        </Label>
      </div>
      {errors.consent && (
        <p className="text-sm text-destructive">{errors.consent.message}</p>
      )}

      {submitState === "error" && errorMessage && (
        <p role="alert" className="text-sm text-destructive">
          {errorMessage}
        </p>
      )}

      <Button type="submit" disabled={submitState === "submitting"}>
        {submitState === "submitting" ? "Wysyłanie…" : "Wyślij wiadomość"}
      </Button>
    </form>
  );
}
