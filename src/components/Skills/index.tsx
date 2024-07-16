"use client"

import { useState } from "react";
import { Tec } from "../../interfaces/types"

import { Ski } from "./styles"
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


export default function Skills() {

  const [ski, setSki] = useState<Tec[]>([
    { id: "icon0", name: "HTML5", icon: <DiHtml5 /> },
    { id: "icon1", name: "CSS3", icon: <DiCss3 /> },
    { id: "icon2", name: "JavaScript", icon: <DiJavascript1 /> },
    { id: "icon3", name: "Phyton", icon: <DiPython /> },
    { id: "icon4", name: "React", icon: <DiReact /> },
    { id: "icon5", name: "NextJs", icon: <RiNextjsLine /> },
    { id: "icon6", name: "Sass", icon: <DiSass /> },
    { id: "icon7", name: "S-C", icon: <SiStyledcomponents /> },
    { id: "icon8", name: "Git", icon: <DiGithubBadge /> },
  ]);

  return(
    <Ski id="skills">
      <div className="container">
        <h1 className="title">Skills</h1>
        <div className="skil">
          {ski.map(tech => 
            <div className="card" key={tech.id}>
              <h1 className="icon">
                {tech.icon}
              </h1>
              <h3 className="nameIcon">
                {tech.name}
              </h3>
            </div>
          )}
        </div>
        
      </div>
    </Ski>
  )
}