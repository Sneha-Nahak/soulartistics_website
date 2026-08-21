import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaArrowCircleUp } from 'react-icons/fa';
import TabNavigator from '../components/TabNavigator';
import ProjectCard from '../components/ProjectCard';
import {
  getAllCategories,
  getProjectsByCategory,
} from '../config/cloudinaryConfig';
import '../styles/UIUXBranding.css';

const UIUXBranding = () => {
  const categories = getAllCategories();
  const [activeTab, setActiveTab] = useState(categories[0]?.id || 'uiux-design');

  // Get projects for the active category
  const projects = getProjectsByCategory(activeTab);

  return (
    <div className="uiux-branding-container">
      {/* Tab Navigation */}
      <TabNavigator
        tabs={categories.map((cat) => ({ id: cat.id, name: cat.name }))}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Category Description */}
      <div className="category-info">
        {categories.map(
          (cat) =>
            cat.id === activeTab && (
              <p key={cat.id} className="category-description">
                {cat.description}
              </p>
            )
        )}
      </div>

      {/* Projects Display */}
      <div className="projects-container">
        {projects.length > 0 ? (
          <>
            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            {/* Go to Top Button */}
            <div className="go-to-top">
              <HashLink smooth to="#">
                <FaArrowCircleUp />
                Go to Top
              </HashLink>
            </div>
          </>
        ) : (
          <div className="no-content">
            <p>No projects available for this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UIUXBranding;
