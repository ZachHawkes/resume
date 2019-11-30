import React from "react";
import "../../App.css";
import { IJob } from "./jobs"

interface IJobProps {
   job: IJob;
}

export const JobHistory: React.FC<IJobProps> = ({job}: IJobProps) =>{
   return(
      <div className="jobContainer">
         <div className="flexboxContainer">
            <div className="leftColumn">
               <span className="bold tabIn">{job.employer}</span>
               <span className="tabIn">{job.title}</span>
            </div>
            <div className="rightColumn tabIn">
               <span>{job.dates}</span>
               <span>{job.location}</span>
            </div>
         </div>
         <ul className="tabIn">
            {job.statements.map((statement, index)=> <li key={index * 10}>{statement}</li>)}
         </ul>
      </div>
   );
}
