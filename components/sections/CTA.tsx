import Link from "next/link";
import { Button } from "@/components/ui/button";

type CTAProps = {
  title?: string;
  description?: string;
  buttonClassName?: string;
};

export function CTA({
  title = "Gotowa/y na następny krok w karierze?",
  description = "Umów się na bezpłatną, 15-minutową rozmowę wstępną - wspólnie ustalimy, jak mogę Ci pomóc.",
  buttonClassName,
}: CTAProps) {
  return (
    <section className="bg-primary">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground">
          {title}
        </h2>
        <p className="max-w-xl text-primary-foreground/90">{description}</p>
        <Button
          size="lg"
          variant="secondary"
          className={buttonClassName}
          render={<Link href="/kontakt" />}
        >
          Napisz do mnie
        </Button>
      </div>
    </section>
  );
}
