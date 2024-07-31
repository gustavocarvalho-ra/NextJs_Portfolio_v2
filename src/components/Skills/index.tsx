"use client"

import { useState } from "react";
import { Tec } from "../../interfaces/types"
import { Ski } from "./styles"

import { motion } from "framer-motion";

import {
  DiHtml5,
  DiCss3,
  DiReact,
  DiSass,
  DiJavascript1,
  DiPython,
  DiGithubBadge
} from 'react-icons/di'
import { RiNextjsLine } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";


export default function Skills() {

  const [ski, setSki] = useState<Tec[]>([
    { id: "icon0", name: "HTML5", icon: <DiHtml5 /> },
    { id: "icon1", name: "CSS3", icon: <DiCss3 /> },
    { id: "icon2", name: "JavaScript", icon: <DiJavascript1 /> },
    { id: "icon3", name: "Python", icon: <DiPython /> },
    { id: "icon4", name: "TypeScript", icon: <BiLogoTypescript /> },
    { id: "icon5", name: "React", icon: <DiReact /> },
    { id: "icon6", name: "NextJs", icon: <RiNextjsLine /> },
    { id: "icon7", name: "Sass", icon: <DiSass /> },
    { id: "icon8", name: "Styled-C", icon: <SiStyledcomponents /> },
    { id: "icon9", name: "Git", icon: <DiGithubBadge /> },
  ]);

  return(
    <Ski id="skills">
      <div className="container">
        <h1 className="title">Skills</h1>
        <div className="skil">
          {ski.map(tech => 
            <motion.div 
              className="card" 
              key={tech.id}
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20
              }}>
              <h1 className="icon">
                {tech.icon}
              </h1>
              <h3 className="nameIcon">
                {tech.name}
              </h3>
            </motion.div>
          )}
        </div>
        
      </div>
    </Ski>
  )
}