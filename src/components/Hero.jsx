import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { hero } from "../data/content.js";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-wrapper">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {hero.greeting || "Hi, my name is"}
          </motion.p>
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {hero.name}.
          </motion.h1>
          <motion.h2
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {hero.title}
          </motion.h2>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {hero.description}
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {hero.ctaPrimary && (
              // If the CTA points to a PDF, render a native anchor with download attr
              (hero.ctaPrimary.href && hero.ctaPrimary.href.toLowerCase().endsWith('.pdf')) ? (
                <a
                  className="hero-button primary"
                  href={hero.ctaPrimary.href}
                  download
                  rel="noopener noreferrer"
                >
                  {hero.ctaPrimary.label}
                </a>
              ) : (
                <Link className="hero-button primary" to={hero.ctaPrimary.href}>
                  {hero.ctaPrimary.label}
                </Link>
              )
            )}
            {hero.ctaSecondary && (
              <Link className="hero-button secondary" to={hero.ctaSecondary.href}>
                {hero.ctaSecondary.label}
              </Link>
            )}
          </motion.div>
        </motion.div>
        {hero.socials && (
          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {hero.socials.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                {social.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;

