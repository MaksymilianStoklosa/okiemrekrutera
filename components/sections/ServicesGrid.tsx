import Link from "next/link";
import {
  FileText,
  MessageSquare,
  Contact2,
  TrendingUp,
  PenLine,
  Compass,
  type LucideIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services, type Service } from "@/data/services";

const iconMap: Record<Service["icon"], LucideIcon> = {
  FileText,
  MessageSquare,
  Linkedin: Contact2,
  TrendingUp,
  PenLine,
  Compass,
};

type ServicesGridProps = {
  limit?: number;
};

export function ServicesGrid({ limit }: ServicesGridProps) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((service) => {
        const Icon = iconMap[service.icon];
        return (
          <Link
            key={service.slug}
            href={`/oferta#${service.slug}`}
            className="group rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            <Card className="h-full transition-colors group-hover:ring-2 group-hover:ring-primary/50">
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Icon aria-hidden="true" className="size-5" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-sm font-medium text-primary">
                  Dowiedz się więcej →
                </span>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
