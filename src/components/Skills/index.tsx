"use client"

import { useState } from "react";
import { Tec } from "../../interfaces/types"

import { Ski } from "./styles"
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiSass,
  DiJavascript1,
  DiJavascript,
  DiPython,
  DiGithubBadge
} from 'react-icons/di'


export default function Skills() {

  const [ski, setSki] = useState<Tec[]>([
    { id: "icon0", name: "HTML5", icon: <DiHtml5 /> },
    { id: "icon1", name: "CSS3", icon: <DiCss3 /> },
    { id: "icon2", name: "JavaScript", icon: <DiJavascript1 /> },
    { id: "icon3", name: "React", icon: <DiReact /> },
    { id: "icon4", name: "Sass", icon: <DiSass /> },
    { id: "icon5", name: "Phyton", icon: <DiPython /> },
    { id: "icon6", name: "Git", icon: <DiGithubBadge /> },
  ]);

  return(
    <Ski id="skills">
      <div className="container">
        <div className="skil">
          {ski.map(tech => 
            <div className="card" key={tech.id}>
              {tech.icon}
              <h3 className="nameIcon">{tech.name}</h3>
            </div>
          )}
        </div>
        <h1 className="title">Skills</h1>
      </div>
    </Ski>
  )
}