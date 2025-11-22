import React from "react";
import { professionalSummary } from "../data/content.js";

const ProfessionalSummary = () => {
  return (
    <section id="professional-summary" className="professional-summary">
      <div className="container">
        <h3 className="section-heading">Professional Summary</h3>
        <p className="summary-text">{professionalSummary}</p>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
