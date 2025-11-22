const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="section-heading">
    <div>
      {eyebrow && <p className="pill">{eyebrow}</p>}
      <h2>{title}</h2>
    </div>
    {description && <p className="text-muted">{description}</p>}
  </div>
);

export default SectionHeading;

