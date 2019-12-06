import React from 'react';
import '../../App.css';

export const Education: React.FC = () =>{
   return(
      <div className="flexboxContainer">
         <div className="leftColumn">
            <span className="bold">EDUCATION</span>
            <span>Utah State University</span>
            <span className="bold tabIn">B.S., Computer Science</span>
         </div>
         <div className="rightColumn">
            <span>Logan, UT</span>
            <span>May, 2021</span>
         </div>
      </div>
   )
}
