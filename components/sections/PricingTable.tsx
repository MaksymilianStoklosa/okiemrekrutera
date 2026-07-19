import Link from "next/link";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { pricingPackages } from "@/data/pricing";

export function PricingTable() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {pricingPackages.map((pkg) => {
        return (
          <Card
            key={pkg.name}
            className={cn(
              "flex h-full flex-col",
              pkg.highlighted && "ring-2 ring-primary/50",
            )}
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {pkg.name}
                {pkg.highlighted && (
                  <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                    Polecane
                  </span>
                )}
              </CardTitle>
              <CardDescription>{pkg.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-4">
              <p className="font-heading text-3xl font-bold text-foreground">
                {pkg.price}
              </p>
              <ul className="flex flex-col gap-2">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                size="lg"
                variant={pkg.highlighted ? "default" : "outline"}
                render={<Link href="/kontakt" />}
              >
                Wybieram {pkg.name}
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
