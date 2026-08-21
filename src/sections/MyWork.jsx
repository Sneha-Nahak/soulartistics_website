import React from "react";
import '../styles/MyWork.css'
import logo from '../assets/soulartistics-logo-only-B&W.png'
import { GiCeremonialMask,GiBookCover } from "react-icons/gi";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { TbCards } from "react-icons/tb";
import { TbCircleLetterTFilled } from "react-icons/tb";
import WorkCard from "../components/WorkCard";

const MyWork = () => {
  return (
    <section id="mywork"  style={{minHeight:'100vh'}}>
      <p className="mywork-headtext">My Works</p>
      <div className="mywork-hr-line"></div>
      <div className="mywork-content">
        
        <WorkCard icon={<GiCeremonialMask/>} name="Creatives" linkPath="/creatives"/>
        <WorkCard icon={<MdFaceRetouchingNatural />} name="Editing and Enhancement" linkPath="/editing-&-enhancement"/>
        <WorkCard image={logo} name="Logos" linkPath="/logos"/>
        <WorkCard icon={<TbCards />} name="Posters" linkPath="/posters"/>
        <WorkCard icon={<TbCircleLetterTFilled />} name="Typography" linkPath="/typography"/>
        <WorkCard icon={<GiBookCover />} name="Book Covers" linkPath="/book-covers"/>
        <WorkCard icon={<AiFillProduct />} name="Social Media Designs" linkPath="/social-media-designs"/>
      </div>
    </section>
  );
};

export default MyWork;
