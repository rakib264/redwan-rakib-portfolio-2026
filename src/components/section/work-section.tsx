/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type DescriptionPoint = {
  label?: string;
  content: string;
};

function getDescriptionPoints(description: string): DescriptionPoint[] {
  const normalized = description.replace(/\s+/g, " ").trim();
  const hasProjectLabels = /(Convay:|National Job Portal \(NJP\):|eReturn:)/.test(
    normalized,
  );

  if (hasProjectLabels) {
    const chunks = normalized
      .split(/(?=(?:Convay|National Job Portal \(NJP\)|eReturn):)/g)
      .map((part) => part.trim())
      .filter(Boolean);

    return chunks.map((chunk) => {
      const match = chunk.match(/^([^:]+):\s*(.*)$/);
      if (!match) {
        return {
          content: /[.!?]$/.test(chunk) ? chunk : `${chunk}.`,
        };
      }

      const [, label, rawContent] = match;
      const content = /[.!?]$/.test(rawContent)
        ? rawContent
        : `${rawContent}.`;

      return {
        label,
        content,
      };
    });
  }

  const parts = normalized
    .split(". ")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => ({
      content: /[.!?]$/.test(part) ? part : `${part}.`,
    }));

  return parts.length > 0 ? parts : [{ content: normalized }];
}

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-8 md:size-10 border rounded-full shadow ring-2 ring-border overflow-hidden object-cover bg-card flex-none"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  const defaultOpenItem = DATA.work[0]?.company;

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultOpenItem}
      className="w-full grid gap-6"
    >
      {DATA.work.map((work) => (
        <AccordionItem
          key={work.company}
          value={work.company}
          className="w-full border-b-0 grid gap-2"
        >
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
            <div className="flex items-center gap-x-3 justify-between w-full text-left">
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                <LogoImage src={work.logoUrl} alt={work.company} />
                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  <div className="font-semibold leading-none flex items-center gap-2">
                    {work.company}
                    <span className="relative inline-flex items-center w-3.5 h-3.5">
                      <ChevronRight
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                          "translate-x-0 opacity-0",
                          "group-hover:translate-x-1 group-hover:opacity-100",
                          "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0",
                        )}
                      />
                      <ChevronDown
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                          "opacity-0 rotate-0",
                          "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180",
                        )}
                      />
                    </span>
                  </div>
                  <div className="font-sans text-sm text-muted-foreground">
                    {work.title}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                <span>
                  {work.start} - {work.end ?? "Present"}
                </span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-0 ml-13">
            <div className="rounded-xl border border-border/60 bg-card/40 p-3 sm:p-4">
              <ul className="space-y-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                {getDescriptionPoints(work.description).map((point, index) => (
                  <li
                    key={`${work.company}-point-${index}`}
                    className="flex gap-2"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/75 flex-none" />
                    <span>
                      {point.label ? (
                        <span className="font-semibold text-foreground">
                          {point.label}:{" "}
                        </span>
                      ) : null}
                      {point.content}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
