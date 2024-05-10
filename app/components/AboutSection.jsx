"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
        <ul className="list-disc pl-2 text-lg">
        <li>
          <strong>Languages</strong>: Python, C, HTML, SQL, CSS, JAVA, C++
        </li><br></br>
        <li>
          <strong>Technologies</strong>: Next.js, React.js, Express.js, Node.js
        </li><br></br>
        <li>
          <strong>Concepts</strong>: Data Structures, Operating System, Artificial Intelligence, Machine Learning, Neural Networks, Agile Methodology, Cloud Computing
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
        <ul className="list-disc pl-2 text-lg">
        <li>
          <strong>PES University</strong> (Expected May 2025)
          <br />
          BTech in Computer Science (GPA: 8.73 / 10.00)
          <br />
          Bangalore, Karnataka
        </li><br></br>
        <li>
          <strong>S Nijalingappa College, KLE</strong> (2021)
          <br />
          Pre-University (Percentage: 98.6) (KCET Rank: 2032)
          <br />
          Bangalore, Karnataka
        </li><br></br>
        <li>
          <strong>RNS Vidyaniketan</strong> (2019)
          <br />
          Class 10 ICSE (Percentage: 95.6)
          <br />
          Bangalore, Karnataka
        </li>
      </ul>
      
    ),
  },
  {
    title: "Hobies",
    id: "Hobies",
    content: (
        <ul className="list-disc pl-2 text-lg">
        <li>Participating in Various Hackathons</li>
        <li>Coding in various platforms like LeetCode, GFG, Coding Ninja</li>
        <li>Anchoring at Kannada Koota, PESU</li>
        <li>Singing and Playing Keyboard</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/Hero-section.png" width={500} height={500} alt="Image"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Hey there! I'm Chirag, a B.Tech student with a passion for Web Development and AIML. I love diving into new concepts and technologies, always seeking to expand my skills.          </p><br></br>
         <p className="text-base lg:text-lg">
         In addition to crafting captivating websites, I enjoy exploring the intricacies of AIML, using it to tackle complex challenges with innovative solutions. My proficiency in image processing adds depth to my skill set, enabling me to address a wide range of problems effectively.
         </p><br></br>
         <p className="text-base lg:text-lg">
         But beyond technical expertise,I'm all about teamwork. With strong leadership qualities and excellent communication skills, I foster collaboration to drive projects forward. Let's embark on this journey of exploration and growth together!
         </p>

          <div className="flex flex-row justify-start mt-8"style={{ fontSize: '2.0rem' }}>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Hobies")}
              active={tab === "Hobies"}
            >
              {" "}
              Hobies{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;