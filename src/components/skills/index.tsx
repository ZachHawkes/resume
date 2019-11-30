import React from "react";
import "../../App.css";

interface IProps {
   knowledgeable: string[];
   familiar: string[];
}

export const Skills: React.FC<IProps> = ({knowledgeable, familiar}: IProps) =>{
   return (
      <div className="sectionTitle">
         <span className="bold">Relevant Skills</span><br></br>
         <span>Knowledgeable in:</span>
         <div className="tabIn">
            {knowledgeable.map((skill)=>{
               return <span className="skills">{skill}</span>;
            })}
         </div>
         <span>Familiar with:</span>
         <div className="tabIn">
            {familiar.map((skill)=>{
               return <span className="skills">{skill}</span>;
            })}
         </div>
      </div>
   )
}