import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.name} className="h-full">
          <CardContent className="flex h-full flex-col gap-4">
            <p className="text-sm text-muted-foreground">
              „{testimonial.content}”
            </p>
            <div className="mt-auto flex items-center gap-3">
              <Avatar>
                <AvatarFallback className="bg-secondary text-secondary-foreground">
                  {testimonial.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
