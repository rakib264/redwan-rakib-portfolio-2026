/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { DATA } from "@/data/resume";
import {
  Timeline,
  TimelineItem,
  TimelineConnectItem,
} from "@/components/timeline";

import actionAidLogo from "@/assets/actionaid.png";
import nasaSpaceAppsLogo from "@/assets/nasa.png";
import aspireLeadersProgramLogo from "@/assets/aspire.png";
import ctoForumInnovationHackathonLogo from "@/assets/cto.png";
import banglalinkSdgHackathon3Logo from "@/assets/banglalink.png";
import bylcVentureLogo from "@/assets/bylc.png";
import watsonLogo from "@/assets/watson.png";

const HACKATHON_IMAGE_MAP: Record<string, string> = {
  actionaiddigitalinnovationchallenge: actionAidLogo.src,
  nasaspaceappschallenge: nasaSpaceAppsLogo.src,
  aspireleadersprogram: aspireLeadersProgramLogo.src,
  ctoforuminnovationhackathon: ctoForumInnovationHackathonLogo.src,
  banglalinksdghackathon30: banglalinkSdgHackathon3Logo.src,
  bylcventure: bylcVentureLogo.src,
  watsonacceleratorfellowship: watsonLogo.src,
};

function normalizeTitle(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function resolveHackathonImage(title: string, image?: string) {
  if (image) return image;
  return HACKATHON_IMAGE_MAP[normalizeTitle(title)] ?? "";
}

type ActiveHackathonImage = {
  src: string;
  alt: string;
};

export default function HackathonsSection() {
  const [activeImage, setActiveImage] = useState<ActiveHackathonImage | null>(
    null,
  );

  useEffect(() => {
    if (!activeImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImage]);

  return (
    <section id="hackathons" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                Hackathons
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              I like building things
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              During my time in university, I attended {DATA.hackathons.length}+
              hackathons. People from around the country would come together and
              build incredible things in 2-3 days. It was eye-opening to see the
              endless possibilities brought to life by a group of motivated and
              passionate individuals.
            </p>
          </div>
        </div>
        <Timeline>
          {DATA.hackathons.map((hackathon) => {
            const imageSrc = resolveHackathonImage(hackathon.title, hackathon.image);

            return (
              <TimelineItem
                key={hackathon.title + hackathon.dates}
                className="w-full flex items-start justify-between gap-10"
              >
                <TimelineConnectItem className="flex items-start justify-center">
                  {imageSrc ? (
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImage({
                          src: imageSrc,
                          alt: hackathon.title,
                        })
                      }
                      aria-label={`Open ${hackathon.title} logo`}
                      className="group/logo size-14 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex-none cursor-zoom-in transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <img
                        src={imageSrc}
                        alt={hackathon.title}
                        className="size-full object-contain transition-transform duration-300 group-hover/logo:scale-110"
                      />
                    </button>
                  ) : (
                    <div className="size-14 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex-none" />
                  )}
                </TimelineConnectItem>
                <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                  {hackathon.dates && (
                    <time className="text-xs text-muted-foreground">
                      {hackathon.dates}
                    </time>
                  )}
                  {hackathon.title && (
                    <h3 className="font-semibold leading-none">
                      {hackathon.title}
                    </h3>
                  )}
                  {hackathon.location && (
                    <p className="text-sm text-muted-foreground">
                      {hackathon.location}
                    </p>
                  )}
                  {hackathon.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">
                      {hackathon.description}
                    </p>
                  )}
                </div>
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>
      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${activeImage.alt} preview`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw] rounded-2xl border border-white/10 bg-background/95 p-3 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute -top-3 -right-3 h-8 w-8 rounded-full border border-border bg-background text-foreground shadow flex items-center justify-center transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <X className="size-4" />
              <span className="sr-only">Close image preview</span>
            </button>
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[80vh] max-w-[85vw] rounded-lg bg-card object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
