const ProjectCard = ({ project }) => (
  <article className="project-card">
    <div className="project-header">
      <div className="project-badge">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 0L10.163 5.837L16 8L10.163 10.163L8 16L5.837 10.163L0 8L5.837 5.837L8 0Z"
            fill="currentColor"
          />
        </svg>
        Featured Project
      </div>
      <h3 className="project-title">{project.title}</h3>
      {Array.isArray(project.description) ? (
        <ul className="project-description project-description-list">
          {project.description.map((point, i) => (
            <li key={i}>• {point}</li>
          ))}
        </ul>
      ) : (
        <p className="project-description">{project.description}</p>
      )}
    </div>
    <div className="project-footer">
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="project-links">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            aria-label={`View ${project.title} live`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 2L6 10M14 2L9 2M14 2L14 7M2 2H6M2 14H6M2 2V6M14 14L6 6M14 14L9 14M14 14L14 9M2 14V10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Live
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            aria-label={`View ${project.title} code`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12C3.5 11 2 9.5 1 7C2.5 5.5 4 4.5 6 4M10 4C12.5 5 14 6.5 15 9C13.5 10.5 12 11.5 10 12M10 4C9.5 3.5 8.5 3 7.5 3C7 2.5 6.5 2 6 2M10 4C10.5 3.5 11.5 3 12.5 3C13 2.5 13.5 2 14 2M6 4C5.5 4.5 4.5 5 3.5 5.5C2.5 6 1.5 6.5 1 7M6 12C6.5 11.5 7.5 11 8.5 10.5C9.5 10 10.5 9.5 11 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Code
          </a>
        )}
      </div>
    </div>
  </article>
);

export default ProjectCard;

