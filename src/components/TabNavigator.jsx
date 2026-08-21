import React from 'react';
import '../styles/TabNavigator.css';

/**
 * TabNavigator Component
 * Reusable tab-based navigation component for switching between content categories
 * 
 * Props:
 * - tabs: array of {id, name} objects
 * - activeTab: currently active tab id
 * - onTabChange: callback function when tab is clicked
 */
const TabNavigator = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="tab-navigator-container">
      <div className="tab-buttons">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="tab-indicator" />
    </div>
  );
};

export default TabNavigator;
