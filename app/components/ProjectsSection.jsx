"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "CricHub",
    description: "Crickbuzz like app for Local Tournaments",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ChiruChirag/CricHub_DBMS",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "APMC Management System",
    description: "Java Spring Boot,MVC",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ChiruChirag/Apmc-Management-system_JAVA",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Yolo v8 -Object Detection in retail",
    description: "Identification and clasification of Fruits and vegetables",
    image: "/images/projects/3.png",
    tag: ["All", "Other"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Drive Alert",
    description: "A model on which safety features including sleep detection is added(Arduino Uno,Sensors)",
    image: "/images/projects/4.png",
    tag: ["All", "Other"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Spam Email Detection",
    description: "Naive Bayes Classifier",
    image: "/images/projects/5.png",
    tag: ["All", "Other"],
    gitUrl: "https://github.com/ChiruChirag/Email_Spam_Detector",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Image Filters Website",
    description: "Different image filters using Linear Algebra Concepts(SVD,PCA)",
    image: "/images/projects/6.png",
    tag: ["All", "Other"],
    gitUrl: "https://github.com/ChiruChirag/Image-FIlters-Website",
    previewUrl: "/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Other"
          isSelected={tag === "Other"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;