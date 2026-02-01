import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Software Engineer, Onehouse",
    location: "Bengaluru, Karnataka, India",
    description: `
    Own end-to-end responsibility for frontend engineering — from feature planning and task allocation to hands-on development, quality assurance, alerting, monitoring, and spearheading new engineering initiatives — all driving exceptional user experience and customer satisfaction.
    Led the development of core platform features including Table Services, Compute Clusters, Access Controls, and Groups & Permissions, using React.js, Next.js, TypeScript, and gRPC, contributing directly to the successful onboarding of 5 customers and 7 active POCs.
    Integrated Amplitude for user telemetry to enable data-driven product decisions and usage insights.
    Driving a complete platform redesign by architecting a new design system and shared component library, improving usability and strengthening user trust.
    `,
    icon: React.createElement(LuGraduationCap),
    date: "July, 2024 - Present",
  },
  {
    title: "Staff Software Engineer, Harness",
    location: "Bengaluru, Karnataka, India",
    description: `
    Delivered high-impact features supporting deployment to AWS Lambda, AWS SAM, Google Cloud Functions, and Azure Functions, driving adoption of the CD module by 15 new customers — including 7 enterprise accounts.
    Reduced delivery time of complex deployment features from 3+ weeks to under 1 week by addressing technical debt, eliminating inefficient practices (e.g., Jest snapshot tests), and improving testing strategies.
    Led and mentored a team of 4 engineers, overseeing technical planning, task prioritization, PR reviews, and QA — resulting in customer growth from 30 to 75 active CD users.
    `,
    icon: React.createElement(CgWorkAlt),
    date: "Aug, 2022 - May, 2024",
  },
  {
    title: "Senior Software Engineer, Harness",
    location: "Bengaluru, Karnataka, India",
    description: `
    Built shared, high-impact CD UI features such as the Git Experience and CD-specific swimlanes (e.g., Serverless AWS Lambda, Amazon ECS) using React, TypeScript, Context API, and comprehensive test coverage with Jest, React Testing Library, and Cypress, directly contributing to 21 new customer onboardings and growing total CD adoption to 50+ customers.
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
    Improved accessibility (A11y), integrated analytics beacons for feature usage tracking, and optimized SEO, contributing to a 25% increase in product page views over six months.
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
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
  "D3.js",
  "Tailwind",
  "GraphQL",
  "Node.js",
  "Express",
  "Java",
  "MongoDB",
  "MySQL",
  "Data Structures",
  "Algorithms",
  "Git"
] as const;