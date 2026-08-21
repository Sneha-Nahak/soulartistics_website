import React from "react";
import '../styles/MyWork.css'
import { getAllPortfolioSections } from '../config/cloudinaryConfig'
import WorkCard from "../components/WorkCard";
import { GiCeremonialMask } from "react-icons/gi";

const MyWork = () => {
  const portfolioSections = getAllPortfolioSections();

  return (
    <section id="mywork" style={{minHeight:'100vh'}}>
      <p className="mywork-headtext">My Works</p>
      <div className="mywork-hr-line"></div>
      <div className="mywork-content">
        {portfolioSections.map((section) => (
          <WorkCard 
            key={section.id}
            icon={<GiCeremonialMask/>} 
            name={section.name} 
            linkPath={`/${section.id}`}
          />
        ))}
      </div>
    </section>
  );
};

export default MyWork;
