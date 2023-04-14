import React from "react";
import "../../App.css";
import Map from "../Map";



export default function Contact() {
  return (
      <>
          <div className="contact">

              <div className='contact-background'>

                      <div className='contact-background-text'>
                          <h1>UNI design studio</h1>
                          <div>
                              <p>ul. Sobieskiego 27a </p>
                              <p> 42-286 Koszecin </p>
                              <p> Tel: +48 603491923</p>
                              <p>NIP: 6452381216</p>
                          </div>
                      </div>

                  </div>

          </div>

          <div>
              < Map />
          </div>
      </>

  );
}
