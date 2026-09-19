import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import onehousePlatformImg from "@/public/onehouse_platform.png";
import walmartImg from "@/public/walmart.png";
import harnessPlatformImg from "@/public/harness_platform.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Software Engineer, Onehouse",
    location: "Bengaluru, Karnataka, India",
    description: `
    Own end-to-end responsibility for frontend engineering — from feature planning and task allocation to hands-on development, quality assurance, alerting, and monitoring — while contributing across Java backend services and Terraform infrastructure workflows.
    Led development of core platform features including Table Services, Compute Clusters, Access Controls, and Groups & Permissions using React.js, Next.js, TypeScript, and gRPC, contributing to the onboarding of 5 customers and 7 active POCs.
    Led a 26-story frontend performance initiative — API waterfall parallelization, endpoint splitting, call deduplication, and bundle code-splitting — cutting p75 LCP by 13–29% across the four highest-traffic pages, measured via Sentry Web Vitals.
    Built Onehouse's notification platform end to end, replacing a hardcoded compile-time recipient map with customer-configurable rules across six resource types on a durable Kafka pipeline with at-least-once delivery, idempotency, and dead-lettering.
    Architected and shipped a new design system and shared component library, implemented Dark Theme platform-wide single-handedly, and integrated Amplitude telemetry for data-driven product insights.
    Created a Claude-based AI design workflow that lets engineers ideate, generate designs, and ship UI changes without design-team dependency, driving adoption of AI-assisted development across the frontend team.
    `,
    icon: React.createElement(LuGraduationCap),
    date: "July, 2024 - Present",
  },
  {
    title: "Staff Software Engineer, Harness",
    location: "Bengaluru, Karnataka, India",
    description: `
    Delivered high-impact features supporting deployment to AWS Lambda, AWS SAM, Google Cloud Functions, Azure Functions, and Amazon ECS, driving onboarding of 20+ customers and expanding CD adoption to 50+ customers.
    Reduced delivery time of complex deployment features from 4+ weeks to under 1 week by addressing technical debt, eliminating inefficient practices (e.g., Jest snapshot tests), and improving testing strategies.
    Led and mentored a team of 6 engineers, overseeing technical planning, task prioritization, PR reviews, and QA — resulting in customer growth from 30 to 75 active CD users.
    `,
    icon: React.createElement(CgWorkAlt),
    date: "Aug, 2022 - May, 2024",
  },
  {
    title: "Senior Software Engineer, Harness",
    location: "Bengaluru, Karnataka, India",
    description: `
    Built shared, high-impact CD capabilities including Git Experience for syncing pipelines with Git and Execution Strategy panels supporting multiple deployment strategies such as rolling and blue-green, using React, TypeScript, Context API, and comprehensive test coverage with Jest, React Testing Library, and Cypress — contributing to increased enterprise adoption and revenue expansion.
    Promoted to Staff Software Engineer in recognition of sustained engineering excellence, high-quality delivery, and measurable product impact.
    `,
    icon: React.createElement(FaReact),
    date: "March, 2021 - Aug, 2022",
  },
  {
    title: "Software Engineer III, Walmart",
    location: "Bengaluru, Karnataka, India",
    description: `
    Enhanced user experience for the Buy-Together feature and key carousels like “Based on your browsing history” and “People also bought” using React.js, JavaScript, and Redux, resulting in a 30% increase in items added to cart.
    Improved accessibility (A11y), integrated analytics beacons for feature usage tracking, and optimized SEO, contributing to a 15% increase in product page views over six months.
    `,
    icon: React.createElement(FaReact),
    date: "Oct, 2019 - March, 2021",
  },
  {
    title: "Software Engineer, Recrosoft Technologies",
    location: "Bengaluru, Karnataka, India",
    description: `
    Developed Ramsay, a tool for nutritionists to manage ingredients, dishes, and meals in a centralized database used across the Curefit app, leading to a 20% increase in mobile app users.
    Contributed to CareFit, a doctor-facing app for tracking patient consultation history, enabling a 30% increase in patient throughput by eliminating reliance on physical records.
    `,
    icon: React.createElement(FaReact),
    date: "Oct, 2018 - Oct, 2019",
  },
  {
    title: "Software Engineer, DSquare Technologies",
    location: "Bengaluru, Karnataka, India",
    description: `
    Developed an enhanced analytics product delivering business insights and predictions via interactive charts and dashboards, resulting in faster load times, streamlined filtering, and visually appealing visualizations.
    Implemented diverse chart types—including Column, Bar, Line, Area, Dendrogram, and Sunburst—using D3.js, contributing to the successful onboarding of 5 new customers.
    `,
    icon: React.createElement(FaReact),
    date: "Dec, 2015 - Oct, 2018",
  },
] as const;

export const projectsData = [
  {
    title: "Onehouse",
    description:
      "I work on UI platform of Onehouse as a frontend engineer. Users can create projects, compute clusters and injestion pipelines, also run table services and spark jobs, and more.",
    tags: ["React", "TypeScript", "Next.js", "Material UI"],
    imageUrl: onehousePlatformImg,
  },
  {
    title: "Walmart",
    description:
      "I worked on Walmart's Item Page and Cart & Checkout pages as a frontend engineer. Users can add items to cart, checkout and more.",
    tags: ["React", "JavaScript", "Redux", "Jest", "Cypress"],
    imageUrl: walmartImg,
  },
  {
    title: "Harness",
    description:
      "I worked on CD UI features for Harness as a frontend engineer. Users can create pipelines, build their code, deploy to different target, and more.",
    tags: ["React", "TypeScript", "Context API", "Blueprint JS"],
    imageUrl: harnessPlatformImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Material UI",
  "SCSS",
  "Tailwind",
  "D3.js",
  "Node.js",
  "Java",
  "gRPC",
  "Kafka",
  "Terraform",
  "MongoDB",
  "MySQL",
  "Jest",
  "Cypress",
  "Web Accessibility",
  "Web Vitals",
  "Data Structures",
  "Algorithms",
  "Git"
] as const;