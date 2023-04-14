import React from "react";
import "../../App.css";
import CardsAbout from "../CardsAbout";

export default function About() {
  return (
      <>
          <div className="about">
              <div className='about-background'>
                  <div className='about-background-text'>
                      <p>"Nie trać czasu na tradycyjne metody projektowania!
                          Skorzystaj z zaawansowanych technologii 3D i inżynierii odwrotnej."
                      </p>
                  </div>
              </div>
          </div>

          <div>
              < CardsAbout/>
          </div>
      </>

  );
}

