import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import '../styles/ProjectCard.css';

/**
 * ProjectCard Component
 * Displays individual project information with thumbnail, skills and Behance link
 * 
 * Props:
 * - project: object with {projectName, description, skills[], image, behanceLink}
 */
const ProjectCard = ({ project }) => {
  const { projectName, description, skills, image, behanceLink } = project;

  return (
    <div className="project-card">
      {/* Project Thumbnail */}
      {image && (
        <div className="project-image">
          <img src={image} alt={projectName} loading="lazy" />
        </div>
      )}

      <div className="project-header">
        <h3 className="project-name">{projectName}</h3>
        <a
          href={behanceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="behance-link"
          aria-label={`View ${projectName} on Behance`}
        >
          <FiExternalLink />
        </a>
      </div>

      <p className="project-description">{description}</p>

      <div className="project-skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
