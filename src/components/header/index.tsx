import React from 'react';
import "./headerStyles.css"

export const Header: React.FC = () =>{
   return(
      <div className="header">
         <h1>Zach Hawkes</h1>
         <hr></hr>
         <span className="email">zach@ifit.com</span>
      </div>
   );
}