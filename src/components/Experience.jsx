import { motion } from "framer-motion";
import { experience } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";

const Experience = () => (
  <section id="experience" className="experience-section">
    <SectionHeading
      eyebrow="Experience"
      title="Where I've Worked"
      description="A journey through my professional experience, building products and solving complex problems."
    />
    <div className="timeline">
      {experience.map((item, index) => (
        <motion.article
          key={item.company}
          className="timeline-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="timeline-header">
            <div className="timeline-role-info">
              <h3>{item.role}</h3>
              <p className="timeline-company">{item.company}</p>
            </div>
            <span className="timeline-period">{item.period}</span>
          </div>
          <p className="timeline-summary">{item.summary}</p>
          {item.highlights && item.highlights.length > 0 && (
            <div className="timeline-highlights">
              <p className="highlights-label">Key Achievements:</p>
              <ul className="highlights-list">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}
        </motion.article>
      ))}
    </div>
  </section>
);

export default Experience;

