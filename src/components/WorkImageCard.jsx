import React from "react";
import { HashLink } from "react-router-hash-link";

import { FaArrowCircleUp, FaArrowCircleLeft } from "react-icons/fa";
import "../styles/work_subsection/WorkImageCard.css";

const WorkImageCard = ({ imageArr }) => {
  return (
    <div className="gen-container">
      <HashLink smooth to="/#mywork" style={{zIndex:'1000'}}>
        <FaArrowCircleLeft />
        Go Back to My Work
      </HashLink>
      <div className="gen-content">
        {imageArr.map((el, ind) => (
          <img
            src={el}
            alt={`Project image ${ind + 1}`}
            key={ind}
            loading="lazy"
            className="gen-img"
          />
        ))}
      </div>
      <div className="bottom-btn-gen">
        <HashLink smooth to="#">
          <FaArrowCircleUp />
          Go to Top
        </HashLink>
      </div>
    </div>
  );
};

export default WorkImageCard;
