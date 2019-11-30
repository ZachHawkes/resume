import React from "react";
import { jobs, IJob } from "./jobs";
import { JobHistory } from "./jobHistory";
import "./work-experience.css"


export const WorkExperience: React.FC = () => {
   return(
      <div className="workExperience">
         <span className="bold">RELEVANT WORK EXPERIENCE</span>
         {listJobs(jobs)}
      </div>
   )
}

function listJobs(jobs: IJob[]){
   return jobs.map((job, index)=> <JobHistory key={index} job={job} />)
}