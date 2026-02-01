"use client";

import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";
import { SectionHeading } from "./section-heading";

export function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section 
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>
        About Me
      </SectionHeading>
      <p className="mb-3">
        I'm a <span className="font-medium">Software Engineer</span> with over a decade of experience crafting scalable, user-friendly web applications. 
        I've built complex interfaces and design systems at companies like <span className="font-medium">Onehouse, Harness, and Walmart</span> using {" "}
        <span className="font-medium">React, Redux, JavaScript, TypeScript, and modern tooling</span>. {" "}
        I <span className="underline">thrive</span> on shipping high-quality features, mentoring teammates, and shaping frontend architecture that lasts. {" "}
        If you're building the next generation of product platforms and need someone who can lead frontend execution with a strong eye for detail and user experience — let's connect!
      </p>
      <p>
      <span className="italic">When I'm not coding</span>, I enjoy
        watching movies, and reading books. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play lawn tennis.
      </p>
    </motion.section>
  )
}
