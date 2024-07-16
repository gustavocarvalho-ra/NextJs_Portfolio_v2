"use client"

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

  const skill = [
    { id: "icon", name: "HTML5", icon: <DiHtml5 /> },
    { id: "icon", name: "CSS3", icon: <DiCss3 /> },
    { id: "icon", name: "JavaScript", icon: <DiJavascript1 /> },
    { id: "icon", name: "React", icon: <DiReact /> },
    { id: "icon", name: "Sass", icon: <DiSass /> },
    { id: "icon", name: "Phyton", icon: <DiPython /> },
    { id: "icon", name: "Git", icon: <DiGithubBadge /> },
  ];

  return(
    <Ski id="skills">
      <div className="container">
        <div className="skil">
          {skill.map(tech => {
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-icon">
                <h3>{tech.name}</h3>
              </div>
            </div>
          })}
        </div>
        <h1 className="title">Skills</h1>
      </div>
    </Ski>
  )
}