import { motion } from "framer-motion";
import { contact } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";

const Contact = () => (
  <section id="contact" className="contact-section">
    <SectionHeading
      eyebrow="Contact"
      title="Get in Touch"
      description="Have a project in mind or want to collaborate? Let's connect!"
    />
    <div className="contact-container">
      {/* Send a Message Form */}
      <motion.div
        className="contact-form-card"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="contact-form-title">Send a Message</h3>
        <p className="contact-form-description">Fill out the form below and I'll get back to you soon.</p>
        
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="Your name"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="your.email@example.com"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              placeholder="Your message..."
              rows="6"
              required
            ></textarea>
          </div>
          
          <button type="submit" className="form-submit-btn">
            Send Message
          </button>
        </form>
      </motion.div>

      {/* Direct Contact Info */}
      <motion.div
        className="contact-info-card"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="contact-info-title">Direct Contact</h3>
        <p className="contact-info-description">Reach out through your preferred channel.</p>
        
        <div className="contact-methods">
          <a href={`mailto:${contact.email}`} className="contact-method">
            <div className="contact-method-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M2.5 6.66667L10 11.6667L17.5 6.66667M3.33333 15H16.6667C17.5871 15 18.3333 14.2538 18.3333 13.3333V6.66667C18.3333 5.74619 17.5871 5 16.6667 5H3.33333C2.41286 5 1.66667 5.74619 1.66667 6.66667V13.3333C1.66667 14.2538 2.41286 15 3.33333 15Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span>{contact.email}</span>
          </a>
          
          <a href="https://www.linkedin.com/in/omnish-kasundra/" target="_blank" rel="noopener noreferrer" className="contact-method">
            <div className="contact-method-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M13.3333 6.66667C14.6594 6.66667 15.9312 7.19405 16.8689 8.13112C17.8065 9.0682 18.3333 10.34 18.3333 11.6667V17.5H15V11.6667C15 11.2246 14.8244 10.8007 14.5118 10.4882C14.1993 10.1756 13.7754 10 13.3333 10C12.8913 10 12.4674 10.1756 12.1548 10.4882C11.8423 10.8007 11.6667 11.2246 11.6667 11.6667V17.5H8.33333V11.6667C8.33333 10.34 8.86012 9.0682 9.79781 8.13112C10.7355 7.19405 12.0073 6.66667 13.3333 6.66667V6.66667Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 7.5H1.66667V17.5H5V7.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.33333 5C4.25381 5 5 4.25381 5 3.33333C5 2.41286 4.25381 1.66667 3.33333 1.66667C2.41286 1.66667 1.66667 2.41286 1.66667 3.33333C1.66667 4.25381 2.41286 5 3.33333 5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span>linkedin.com/in/omnish-kasundra/</span>
          </a>
          
          <a href="https://github.com/omnish111" target="_blank" rel="noopener noreferrer" className="contact-method">
            <div className="contact-method-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C17.137 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span>github.com/omnish111</span>
          </a>
          
          <a href={`tel:${contact.phone}`} className="contact-method">
            <div className="contact-method-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M18.3333 14.1V16.6C18.3344 16.8321 18.2867 17.0618 18.1936 17.2745C18.1005 17.4871 17.9643 17.678 17.7933 17.8346C17.6223 17.9912 17.4203 18.1101 17.2005 18.1844C16.9808 18.2587 16.7479 18.2867 16.5167 18.2667C13.9523 17.9877 11.4892 17.1054 9.32499 15.6917C7.31151 14.3982 5.60182 12.6885 4.30832 10.675C2.88748 8.50213 2.00502 6.02779 1.73332 3.45C1.71339 3.21939 1.74113 2.98708 1.81501 2.76775C1.88889 2.54843 2.00734 2.34677 2.16332 2.17577C2.31929 2.00478 2.50974 1.86823 2.72201 1.77463C2.93427 1.68102 3.16357 1.63289 3.39499 1.63333H5.89499C6.2687 1.62973 6.63114 1.75325 6.92099 1.98362C7.21083 2.21398 7.40704 2.53626 7.46166 2.89167C7.56332 3.60183 7.73415 4.29767 7.97166 4.975C8.06832 5.25 8.08705 5.54581 8.02499 5.83167C7.96293 6.11753 7.82249 6.38258 7.61666 6.59167L6.52499 7.68333C7.74581 9.77403 9.39263 11.4209 11.4833 12.6417L12.575 11.55C12.7841 11.3441 13.0491 11.2037 13.335 11.1416C13.6208 11.0796 13.9166 11.0983 14.1917 11.195C14.869 11.4325 15.5648 11.6033 16.275 11.705C16.6355 11.7608 16.9617 11.9616 17.1934 12.2577C17.425 12.5539 17.5463 12.9227 17.5333 13.3V14.1Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span>{contact.phone}</span>
          </a>
        </div>
        
        <div className="location-section">
          <h4 className="location-title">Location</h4>
          <p className="location-text">{contact.location}</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Contact;

