import React from "react";
import CardsProjects from "../CardsProjects";


import "../../App.css";
import '../../components/Cards.css';


export default function Projects() {
    return (
       <>
           <div className="projects">
               <div className='projects-background'>
                   <div className='projects-background-text'>
                       <p> WYKORZYSTAJ NOWE TECHNOLOGIE
                       I ZOBACZ SWOJE PRODUKTY W WERSJI CYFROWEJ!</p>
                   </div>

               </div>
           </div>
           <div>
               < CardsProjects/>
           </div>
       </>





    );
}
