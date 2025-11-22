import { motion } from "framer-motion";
import { projects } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";
import ProjectCard from "./ProjectCard.jsx";

const Projects = () => (
  <section id="projects" className="projects-section">
    <SectionHeading
      eyebrow="Projects"
      title="Things I've Built"
      description="A collection of projects showcasing my skills in design, development, and problem-solving."
    />
    <div className="projects-grid">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;

