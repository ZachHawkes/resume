import React from "react";
import "./csprojects.css"
import { projects } from "./projects";

interface project {
   text: string
}

export const CsProjects: React.FC = () => {
   return(
      <div className="csprojects">
         <span className="bold">COMPUTER SCIENCE PROJECTS</span>
         <ul>
            {listProjects(projects)}
         </ul>
      </div>
   )
}

function listProjects(projects: project[]){
   return projects.map((project, index) =><li key={index}>{project.text}</li>)
}