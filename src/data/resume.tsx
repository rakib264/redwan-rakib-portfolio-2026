import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Docker } from "@/components/ui/svgs/docker";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Java } from "@/components/ui/svgs/java";

import synesisLogo from "@/assets/synesis.png";
import rootdevsLogo from "@/assets/rootdevs.png";
import mightybyteLogo from "@/assets/mighty.png";
import juLogo from "@/assets/ju.png";
import convayLogo from "@/assets/convay.png";
import nationalJobPortalLogo from "@/assets/njp.png";
import xoomSportsLogo from "@/assets/xoomsports.png";
import everCareLogo from "@/assets/evercare.png";
import eReturnLogo from "@/assets/eReturn.png";
import theSocialChanceLogo from "@/assets/TheSocialChance.png";

export const DATA = {
  name: "Redwan Rakib",
  initials: "RR",
  url: "https://my-dev-portfolio-puce.vercel.app/",
  location: "Dhaka, Bangladesh",
  locationLink: "https://www.google.com/maps/place/Dhaka,+Bangladesh",
  description:
    "Software Engineer focused on building clean, scalable, and high-impact products across enterprise SaaS, government platforms, and real-time systems.",
  summary:
    "Detail-oriented engineering professional with a Bachelor of Science in Information Technology from Jahangirnagar University. At Synesis IT PLC, I deliver high-scale product features across [enterprise WebRTC conferencing](/#work) and [Bangladesh's largest government job portal](/#work), including AI-powered workflows and recruitment automation. I have also been recognized in [global innovation competitions](/#achievements), including Aspire South Asian Champion, Watson, and top regional and global placements at NASA Space Apps.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },
    { name: "Node.js", icon: Nodejs },
    { name: "NestJS", icon: Nodejs },
    { name: "Express.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "FastAPI", icon: Python },
    { name: "Java", icon: Java },
    { name: "Spring Boot", icon: Java },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MongoDB" },
    { name: "MSSQL" },
    { name: "Redis" },
    { name: "Docker", icon: Docker },
    { name: "AWS" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "redwan.rakib264@gmail.com",
    tel: "+8801828123264",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rakib264",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/redwan-rakib-874b30174/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:redwan.rakib264@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Synesis IT PLC",
      href: "https://synesisit.com.bd",
      badges: [],
      location: "Dhaka, Bangladesh",
      title: "Software Engineer II",
      logoUrl: synesisLogo.src,
      start: "Nov 2023",
      end: "Present",
      description:
        "Engineered key components of Convay's Jitsi Meet-based WebRTC infrastructure to sustain 10,000+ concurrent users while preserving session consistency under peak load. Delivered multi-tenant SaaS capabilities including billing, RBAC, and an AI meeting assistant with automated minutes. On the National Job Portal, built AI-powered exam proctoring, intelligent job recommendations, and end-to-end recruitment workflows (question management, candidate administration, shortlisting, seat-plan generation, and result processing) that scaled live exam capacity to 8,000+ candidates and reduced recruitment timelines by 2x.",
    },
    {
      company: "Root Devs",
      href: "https://rootdevs.com",
      badges: [],
      location: "Dhaka, Bangladesh",
      title: "Software Engineer I",
      logoUrl: rootdevsLogo.src,
      start: "May 2023",
      end: "Nov 2023",
      description:
        "Developed XoomSports, a professional sports streaming platform with RBAC, granular streaming permissions, and real-time match updates. Implemented adaptive bitrate streaming via AWS IVS with WebSocket-driven synchronization, maintaining sub-second latency across 15,000+ concurrent viewers and achieving 99% uptime during high-concurrency live match sessions.",
    },
    {
      company: "Mighty Byte",
      href: "https://mightybyte.io",
      badges: [],
      location: "Dhaka, Bangladesh",
      title: "Jr. Software Engineer",
      logoUrl: mightybyteLogo.src,
      start: "Sept 2021",
      end: "Sept 2022",
      description:
        "Engineered core modules for EverCare Bangladesh, one of the country's largest private hospitals serving 800-1,500+ daily outpatients. Built high-concurrency appointment scheduling, real-time inpatient record synchronization across wards, and AI-driven doctor recommendations while ensuring zero data inconsistency under peak load.",
    },
  ],

  education: [
    {
      school: "Jahangirnagar University",
      href: "https://juniv.edu",
      degree: "Bachelor of Science in Information Technology (CGPA: 3.16/4.0)",
      logoUrl: juLogo.src,
      start: "2017",
      end: "2022",
    },
  ],

  projects: [
    {
      title: "eReturn",
      href: "https://etaxnbr.gov.bd/",
      dates: "Nov 2023 - Present",
      active: true,
      description:
        "Tax filing platform used by millions of Bangladeshis. Built high-throughput submission pipelines with AI guidance.",
      technologies: [
        "React",
        "TypeScript",
        "Java",
        "Spring Boot",
        "FastAPI",
        "Python",
        "RAG",
        "LangChain",
        "LangGraph",
        "Redis",
        "Docker",
        "AWS",
      ],
      links: [
        {
          type: "Website",
          href: "https://etaxnbr.gov.bd/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: eReturnLogo.src,
      video: "",
    },
    {
      title: "Convay",
      href: "https://convay.com/",
      dates: "Nov 2023 - Present",
      active: true,
      description:
        "Enterprise WebRTC conferencing for 10K+ concurrent users. Features AI meeting assistant and auto-generated minutes.",
      technologies: [
        "WebRTC",
        "Jitsi Meet",
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "Docker",
        "AWS",
      ],
      links: [
        {
          type: "Website",
          href: "https://convay.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: convayLogo.src,
      video: "",
    },
    {
      title: "National Job Portal",
      href: "https://jobs.gov.bd/",
      dates: "Nov 2023 - Present",
      active: true,
      description:
        "Bangladesh's national government job portal. AI-powered proctoring and recruitment automation at scale.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "NestJS",
        "PostgreSQL",
        "Redis",
        "Docker",
        "AWS",
      ],
      links: [
        {
          type: "Website",
          href: "https://jobs.gov.bd/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: nationalJobPortalLogo.src,
      video: "",
    },
    {
      title: "EverCare Bangladesh",
      href: "https://www.evercarebd.com/en",
      dates: "Sept 2021 - Sept 2022",
      active: false,
      description:
        "Healthcare platform for Bangladesh's largest private hospital. Real-time scheduling and AI doctor recommendations.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "FastAPI",
        "Python",
      ],
      links: [],
      image: everCareLogo.src,
      video: "",
    },
    {
      title: "The Social Chance",
      href: "https://www.thesocialchance.com/",
      dates: "2024 - Present",
      active: true,
      description:
        "Global UGC marketplace connecting brands with creators. HLS video delivery via Bunny CDN for world-class performance.",
      technologies: ["React", "Next.js", "NestJS", "AWS", "Bunny CDN", "HLS"],
      links: [],
      image: theSocialChanceLogo.src,
      video: "",
    },
    {
      title: "XoomSports",
      href: "https://www.xoomsports.com",
      dates: "May 2023 - Nov 2023",
      active: false,
      description:
        "Live sports streaming at sub-second latency for 15K+ viewers. 99% uptime with real-time match updates.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "AWS IVS",
        "WebSocket",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.xoomsports.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Company",
          href: "https://www.rootdevs.com/en",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: xoomSportsLogo.src,
      video: "",
    },
  ],

  hackathons: [
    {
      title: "ActionAid Digital Innovation Challenge",
      dates: "2024",
      location: "International",
      description:
        "Champion - recognized for sustained digital innovation with social impact.",
      image: "",
      links: [],
    },
    {
      title: "NASA Space Apps Challenge",
      dates: "2023",
      location: "Dhaka, Bangladesh",
      description:
        "Ranked 41st globally and 1st Runner-up in the Dhaka Region out of thousands of global teams.",
      image: "",
      win: "41st Global | 1st Runner-up (Dhaka Region)",
      links: [],
    },
    {
      title: "Aspire Leaders Program",
      dates: "2021",
      location: "International",
      description:
        "World Finalist and South Asian Champion - a globally competitive leadership and innovation program.",
      image: "",
      win: "World Finalist & South Asian Champion",
      links: [],
    },
    {
      title: "CTO Forum Innovation Hackathon",
      dates: "2022",
      location: "Bangladesh",
      description: "Winner of the CTO Forum's innovation-focused hackathon.",
      image: "",
      win: "Winner",
      links: [],
    },
    {
      title: "Banglalink SDG Hackathon 3.0",
      dates: "2022",
      location: "Bangladesh",
      description:
        "2nd Runner-up at the SDG-focused national hackathon organized by Banglalink.",
      image: "",
      win: "2nd Runner-up",
      links: [],
    },
    {
      title: "BYLC Venture",
      dates: "2020",
      location: "Bangladesh",
      description:
        "Winner of the BYLC Venture social entrepreneurship competition.",
      image: "",
      win: "Winner",
      links: [],
    },
    {
      title: "Watson Accelerator Fellowship",
      dates: "2019",
      location: "International",
      description:
        "Awarded a Watson Accelerator Fellowship by the Watson Accelerator for sustained impact through innovation.",
      image: "",
      win: "Watson Accelerator Fellowship",
      links: [],
    },
  ],
} as const;
