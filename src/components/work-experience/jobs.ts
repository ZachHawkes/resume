export interface IJob {
   title: string;
   dates: string;
   employer: string;
   statements: string[];
   location: string;
}

export const jobs: IJob[] = [
   {
      title: "Software QA Tester",
      employer: "iFit",
      location: "Logan, UT", 
      dates: "Feb 2018 - Present", 
      statements: [
         "Worked with developers to diagnose flaws in software and identify potential solutions",
         "Developed comprehensive testing plans to identify flaws within software",
         "Created automated tests to enhance testing coverage and efficiency",
         "Trained with a senior developer to create a microservice which identifies the location of an ip address and coded other solutions using technology currently used by iFit"
      ]
   },
   {
      title: "Knowledge Base Specialist",
      employer: "ICON Health and Fitness",
      location: "Logan, UT", 
      dates: "Jan 2015 - Feb 2018", 
      statements: [
         "Authored training material to help customer service agents to diagnose fitness equipment problems on the phone",
         "Taught new customer service agents in a classroom environment how to diagnose issues with fitness equipment, use computer systems, and successfully handle customers",
         "Developed an employee management system using Ruby on Rails and created an online document repository using PHP and Javascript",
         "Assisted new agents while they were on the phone with customers",
         "Managed users and created content for a Learning Management System which was used to train current and new customer service agents",
         "Created and maintained an online computer test for potential new employees using PHP and Javascript"
      ]
   }
]