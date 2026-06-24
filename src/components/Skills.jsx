import { motion } from "framer-motion";
import { skills } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";

const SkillSection = ({ title, items, index }) => (
  <motion.div
    className="skill-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <h3 className="skill-card-title">{title}</h3>
    <div className="skill-items">
      {items.map((item) => (
        <span key={item} className="skill-item">
          {item}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => (
  <section id="skills" className="skills-section">
    <SectionHeading
      eyebrow="Skills"
      title="Technologies I Work With"
      description="A comprehensive overview of the tools, technologies, and frameworks I use to build modern web applications."
    />
    <div className="skills-grid">
      {Object.entries(skills).map(([category, items], index) => (
        <SkillSection key={category} title={category} items={items || []} index={index} />
      ))}
    </div>
  </section>
);

export default Skills;

