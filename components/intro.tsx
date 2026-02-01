"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

export function Intro() {
  const { ref } = useSectionInView('Home', 0.5);

  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image 
              src="/My_Picture.jpg"
              alt="Chetan portrait" 
              width={192} 
              height={192} 
              quality={95} 
              priority={true} 
              className="w-24 h-24 object-cover rounded-full border-[0.35rem] border-white shadow-xl" 
            />
          </motion.div>
          <motion.span 
            className="absolute bottom-0 right-0 text-4xl" 
            initial={{ opacity: 0, scale: 0 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}
            whileHover={{ rotate: [0, 20, -20, 20, -20, 0], transition: { duration: 0.5 } }}
            whileTap={{ rotate: [0, 20, -20, 20, -20, 0], transition: { duration: 0.5 } }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-normal !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, I'm <span className="font-bold">Chetan Vekariya</span> - a{" "}
        <span className="font-bold">Lead Software Engineer</span> with{" "}
        <span className="font-bold">10+ years</span> of experience. I enjoy
        crafting <span className="italic">scalable & user-friendly web applications</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div 
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link 
          href="#contact" 
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 
          hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a 
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 
          transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="/Chetan_Vekariya.pdf"
          download
        >
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a 
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 
          transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/thechetanvekariya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>

        <a 
          className="bg-white text-gray-700 text-[1.35rem] p-4 flex items-center gap-2 rounded-full 
          focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition 
          cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/chetan0110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}
