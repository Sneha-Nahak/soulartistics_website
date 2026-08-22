import React, { useState, useEffect } from 'react';
import '../styles/LoadingScreen.css';

const LoadingScreen = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      setProgress(100);
      return;
    }

    setProgress(0);
    
    // Simulate progress bar animation
    const interval = setInterval(() => {
      setProgress(prev => {
        // Slow down as it approaches 100
        if (prev < 30) return prev + Math.random() * 30;
        if (prev < 60) return prev + Math.random() * 15;
        if (prev < 90) return prev + Math.random() * 8;
        if (prev < 95) return prev + Math.random() * 3;
        return prev + 0.5;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [isLoading]);

  if (!isLoading && progress >= 100) {
    return null;
  }

  return (
    <div className="loading-screen">
      <div className="loading-container">
        <div className="loading-logo">
          <span className="logo-text">Soulartistics</span>
        </div>

        <div className="progress-container">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <div className="progress-text">{Math.round(Math.min(progress, 100))}%</div>
        </div>

        <p className="loading-message">Ready to dive into design world......</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
