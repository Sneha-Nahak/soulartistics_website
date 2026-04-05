import React from "react";
import "../styles/About.css";
import Sneha_Image from "../assets/sneha_frame.png";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import videoBg from '../assets/about_bg_vid.mp4'

const About = () => {
  return (
    <section id="about" style={{ height: "100vh" }}>
      <video src={videoBg} autoPlay loop muted/>

      <div className="about-content">
        <div className="about-text">
          <p className="about-name">SNEHA NAHAK</p>
          <div className="about-hr-line"></div>
          <p className="about-subheadtext" >Web designer & developer</p> 
          <p className="about-subtext">
             with a creative vision. Skilled in Adobe
            Creative Suite, photo editing, and graphic design. <strong>Soulartistics</strong> is
            my space to showcase art through code and creativity.
          </p>
           <div className="about-social-links">
        <Link to='https://www.instagram.com/soulartistics' target="_blank" rel="noopener noreferrer"><FaInstagram/></Link>
        <Link to='https://github.com/Sneha-Nahak' target="_blank" rel="noopener noreferrer"><FaGithub /></Link>
         <Link to='https://www.linkedin.com/in/sneha-nahak-s3' target="_blank" rel="noopener noreferrer"><FaLinkedin /></Link>
        </div>
        </div>
       
        <img src={Sneha_Image} alt="sneha-image" />
      </div>
      <button className="about-btn"><Link to='https://portfolio-sneha-nahak.vercel.app' target="_blank" rel="noopener noreferrer">Visit my Developer Portfolio</Link></button>
    </section>
  );
};

export default About;
