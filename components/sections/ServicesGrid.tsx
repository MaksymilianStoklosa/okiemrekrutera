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
            className="rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            <Card className="h-full bg-apricot">
              <CardHeader className="gap-3">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary text-white">
                  <Icon aria-hidden="true" className="size-5" />
                </div>
                <CardTitle className="text-black">{service.title}</CardTitle>
                <CardDescription className="text-black">
                  {service.shortDescription}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
