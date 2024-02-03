// 2nd career choice: plitics --> I like debating and feel strong at convincing people
//I go to the gym before work every day
//I count calories and create my diets bassed on gym objectives
//I listen to podcasts all day long
//I love economy, have read some books about it
//I live in Barcelona ? I love eggs: fats, proteins, vitamins...

import React from "react";
import { ChefIcon, DumbellIcon } from "./Icons";
import {
  BookOpenIcon,
  SpeakerWaveIcon,
  ClipboardDocumentIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import SectionTitle from "./SectionTitle";

const factsAboutMe = [
  {
    title: "2nd Career Choice",
    description:
      "Considering college majors, political science was my second choice. Convinced of my knack for debate, I envisioned myself as the James Bond of politics.",
    icon: ClipboardDocumentIcon,
  },
  {
    title: "Morning Ritual",
    description:
      "I kickstart my day with a pre-sunrise pre-work gym session. Who needs coffee when you can have endorphins?",
    icon: DumbellIcon,
  },
  {
    title: "Calories Maestro",
    description:
      "For me, sculpting diets is just another thing I do with the engineer hat. I hate the uncertainty of not knowing if I'm fueling my body right for my current goal.",
    icon: ChefIcon,
  },
  {
    title: "Constant Listener",
    description:
      "I love hearing podcasts, who needs silence when you can tune in to wisdom and wit? My favorite ones (currently) are Itnig, The All In Pod and Last Week in AI.",
    icon: SpeakerWaveIcon,
  },
  {
    title: "Literary Explorer",
    description:
      "I find immense joy in delving into inspiring books that fuel my personal growth journey, interspersed with occasional forays into the enchanting realms of fiction.",
    icon: BookOpenIcon,
  },
  {
    title: "Egg Lover",
    description:
      "If I could only eat one thing for the rest of my life, it would undoubtedly be eggs. High quality fats, proteins, vitamins...eggs have it all!",
    icon: HeartIcon,
  },
];

const FactCard = ({ title, description, icon: IconComponent }) => {
  return (
    <div className="col-span-6 bg-gray-100 rounded-lg p-12 mb-6">
      <IconComponent className="mb-8 w-14" />
      <div className="text-lg font-semibold">{title}</div>
      <p className="mt-3 text-lg font-medium text-gray-600 w-4/5">
        {description}
      </p>
    </div>
  );
};

const FactsSection = () => {
  return (
    <div className="mt-64 grid grid-cols-12 gap-x-6">
      <SectionTitle className="col-span-12" title="Random Facts" />
      <h1 className="col-span-12 text-2xl font-medium">
        Here are some random facts about me.
      </h1>
      <h1 className="col-start-1 col-span-6 text-2xl font-medium text-gray-600 mt-2 mb-8">
        Get to know me.
      </h1>
      <div className="col-span-6"></div>
      {factsAboutMe.map((fact, index) => (
        <FactCard key={index} {...fact} />
      ))}
    </div>
  );
};

export default FactsSection;
