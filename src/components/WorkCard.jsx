import React from "react";
import "../styles/WorkCard.css";
import { Link } from "react-router-dom";

const WorkCard = ({ icon, name, image, linkPath }) => {
  return (
    <div className="card-container">
      <Link to={linkPath}>
        {" "}
        {icon ? (
          <>
            <p className="symbol icon">{icon}</p>
            <p className="symbol-name">{name}</p>
          </>
        ) : (
          <>
            <img className="symbol image" src={image} alt="some-image" />
            <p className="symbol-name">{name}</p>
          </>
        )}
      </Link>
    </div>
  );
};

export default WorkCard;
