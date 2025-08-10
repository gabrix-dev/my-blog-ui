import React from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { bottomUp } from "@/animationVariants";

const timelineEvents = [
  {
    id: "birth",
    badge: "2001",
    title: "Born in Girona, Spain",
    paragraphs: [
      "I was born in a small city near Barcelona, Spain.",
    ],
    image: { src: "/images/girona.jpg", alt: "Girona, Spain" },
  },
  {
    id: "upc",
    badge: "2019 → 2023",
    title: "Telecommunications Engineering at UPC (Barcelona)",
    paragraphs: [
      "At 18, I moved to Barcelona to study Telecommunications Engineering at UPC. Those four years were a crash course in discipline, problem‑solving, and thinking from first principles. I learned to break down complex problems into their simplest parts, a skill that would shape everything I do today.",
    ],
    image: { src: "/images/graduacio.jpg", alt: "Graduation day at UPC" },
  },
  {
    id: "coding",
    badge: "During Uni",
    title: "Discovered programming",
    paragraphs: [
      "During my degree, I discovered programming and the incredible power it gave me: if I could think it, I could build it.",
    ],
  },
  {
    id: "entrust",
    badge: "2022 → 2024",
    title: "Building PoCs",
    paragraphs: [
      "During my last college year, I joined Entrust in the R&D department, where we built proof‑of‑concepts from scratch. My favorite was Entrust Copilot, an AI agent built before “AI agents” were a thing.",
      "With no AI specialists around, I taught myself everything from classic ML to transformers, inspired by the first papers on LLM tool use (ReAct, ToolBench, ToolAlpaca...). Leading a small team, we turned research into a working PoC that showed how AI Agents could improve the UX of complex enterprise identity software.",
    ],
    // No dedicated image available; we keep this as a text-first card
  },
  {
    id: "zynap",
    badge: "2024 → 2025",
    title: "Early-stage AI startup",
    paragraphs: [
      "After some frustration with the slow corporate world, I joined Zynap, a six months old startup revolutionizing the way cybersecurity teams work using AI.",
      "I was the second backend engineer, the youngest full‑time employee, and quickly took ownership of a core product, turning a demo into something real for our first paying customers. It was my first taste of the chaos and thrill of early‑stage startups: undefined processes, fast shipping, constant change, and I dove deep into cybersecurity.",
    ],
    image: { src: "/images/zynap.jpg", alt: "Early-stage work at Zynap" },
  },
  {
    id: "hacker-night",
    badge: "Late nights",
    title: "Bug bounty marathon",
    paragraphs: [
      "One unforgettable night, our team stayed up until 5 a.m. at a bug bounty event, hacking alongside some of the best in the field.",
    ],
    image: { src: "/images/hacker_night.jpg", alt: "Bug bounty night" },
  },
  {
    id: "cofounder",
    badge: "Today",
    title: "Building for teachers",
    paragraphs: [
      "At Zynap, I saw what happens when AI is truly embraced. I went from copy‑pasting ChatGPT suggestions into VSCode to working AI native with tools like Cursor and Claude Code, the productivity leap was massive.",
      "That’s when I met David Roca, a frustrated teacher with a big vision. Today, David and I are cofounders, building a product to bring the same kind of productivity gains I saw in engineering, but to teachers.",
    ],
    image: { src: "/images/maieutic_david.PNG", alt: "With cofounder David Roca" },
  },
];

const StoryItem = ({ event }) => {
  return (
    <motion.li
      initial="initial"
      variants={bottomUp}
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="relative pl-12 lg:pl-16"
    >
      {/* timeline dot */}
      <span className="absolute left-3 top-2 inline-flex h-3 w-3 rounded-full bg-indigo-500 ring-4 ring-indigo-100" />

      <div className="rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-sm shadow-sm overflow-hidden">
        {event.image ? (
          <div className="relative w-full">
            <Image
              src={event.image.src}
              alt={event.image.alt}
              className="w-full h-auto object-cover"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ) : null}

        <div className="p-5 lg:p-6">
          <div className="mb-2 flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700">
              {event.badge}
            </span>
            <h3 className="text-lg lg:text-xl font-semibold text-gray-900">
              {event.title}
            </h3>
          </div>
          {Array.isArray(event.paragraphs) && event.paragraphs.length > 0 ? (
            <div className="space-y-2">
              {event.paragraphs.map((text, idx) => (
                <p
                  key={idx}
                  className="text-sm lg:text-base leading-relaxed text-gray-700"
                >
                  {text}
                </p>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </motion.li>
  );
};

const StorySection = () => {
  return (
    <div className="mt-96 lg:px-20" id="story_section">
      <SectionTitle title="My Story" variants={bottomUp} />

      {/* Removed intro blurb to keep title → content simple */}

      {/* Timeline */}
      <div className="relative mt-10">
        {/* vertical line */}
        <div className="absolute left-4 top-0 h-full w-px bg-gray-200" />

        <ul className="space-y-8 lg:space-y-12">
          {timelineEvents.map((event) => (
            <StoryItem key={event.id} event={event} />
          ))}
        </ul>
      </div>

      {/* Mission */}
      <motion.div
        initial="initial"
        variants={bottomUp}
        whileInView="animate"
        viewport={{ once: true }}
        className="text-lg lg:text-2xl text-gray-800 mt-10 font-semibold lg:text-left text-center"
      >
        My mission is simple: Build products that matter, from the ground up, and never stop learning.
      </motion.div>
    </div>
  );
};

export default StorySection;
