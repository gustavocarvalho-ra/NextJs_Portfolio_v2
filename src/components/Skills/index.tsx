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
        <h1 className="title">Skills</h1>
      </div>
    </Ski>
  )
}