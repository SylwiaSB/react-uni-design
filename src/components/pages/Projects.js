import React from "react";
import CardsProjects from "../CardsProjects";


import "../../App.css";
import '../../components/Cards.css';


export default function Projects() {
    return (
       <>
           <div className="projects">
               <div className='projects-background'>
                   <div className='contact-background-text'>
                       <p> Wykorzystaj nowe technologie i zobacz swoje pomysły w wersji cyfrowej!</p>
                   </div>

               </div>
           </div>
           <div>
               < CardsProjects/>
           </div>
       </>





    );
}
