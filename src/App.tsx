import React from 'react';
import './App.css';
import { Header } from "./components/header/index"
import { Education } from "./components/education/index"
import { CsProjects } from "./components/csprojects/index"
import { WorkExperience } from "./components/work-experience/index"
import { Skills } from "./components/skills/index";
import { RelevantSkills } from "./components/skills/skills"

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <Education />
      <CsProjects />
      <WorkExperience />
      <Skills knowledgeable={RelevantSkills.knowledgable} familiar={RelevantSkills.familiar}></Skills>
    </div>
  );
}

export default App;
