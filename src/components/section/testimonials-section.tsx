"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

const AUTOPLAY_INTERVAL_MS = 8000;

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export default function TestimonialsSection() {
  const testimonials = DATA.testimonials;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length < 2) return;
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [testimonials.length]);

  if (!testimonials.length) return null;

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="overflow-hidden">
      <div className="flex min-h-0 w-full flex-col gap-y-8">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <div className="flex w-full items-center">
            <div className="h-px flex-1 bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="z-10 rounded-xl border bg-primary px-4 py-1">
              <span className="text-sm font-medium text-background">
                Testimonials
              </span>
            </div>
            <div className="h-px flex-1 bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Trusted by People I Work With
            </h2>
            <p className="max-w-2xl text-balance text-muted-foreground md:text-base">
              A few words from leaders and collaborators across products I&apos;ve
              delivered.
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-4xl rounded-2xl border border-border/70 bg-card/40 px-6 py-7 text-center sm:px-10 sm:py-9">
          <div className="flex items-start gap-3">
            <span className="text-3xl sm:text-4xl leading-none text-primary/70">
              &ldquo;
            </span>
            <blockquote
              key={`${activeTestimonial.name}-${activeIndex}`}
              className="text-left text-base font-medium leading-relaxed text-foreground sm:text-lg md:text-xl"
            >
              {activeTestimonial.quote}
            </blockquote>
          </div>

          <div className="mt-7 flex flex-col items-center gap-2.5">
            <Avatar className="size-14 border border-border/70 bg-background shadow-sm">
              {activeTestimonial.avatarUrl ? (
                <AvatarImage
                  alt={activeTestimonial.name}
                  src={activeTestimonial.avatarUrl}
                  className="object-cover"
                />
              ) : null}
              <AvatarFallback className="text-sm font-semibold text-muted-foreground">
                {getInitials(activeTestimonial.name)}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5 text-center">
              <p className="font-semibold text-foreground">
                {activeTestimonial.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {activeTestimonial.role}
              </p>
            </div>
          </div>

          <div className="mt-7 flex items-center justify-center gap-2.5">
            {testimonials.map((testimonial, index) => (
              <button
                key={`${testimonial.name}-${index}`}
                type="button"
                aria-label={`Show testimonial from ${testimonial.name}`}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "size-2.5 rounded-full transition-all duration-200",
                  index === activeIndex
                    ? "scale-110 bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

