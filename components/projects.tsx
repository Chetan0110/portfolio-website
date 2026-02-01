"use client";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { SectionHeading } from "./section-heading";
import { Project } from "./project";

export function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);
  
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  )
}
