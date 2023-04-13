import React from "react";
import {Button} from "./Button";

import './BannerSection.css';
import '../App.css';
import './Button.css'

function BannerSection() {
    return (
        <div className='banner-container'>
            <video src='/videos/Hybrid Blue Laser & LED Light Source Handheld 3D Scanner EinScan HX - 3D Digitizing Solution.mp4' autoPlay loop muted />
           <section className='banner-box-container'>
               <h1>Odkryj nowy wymiar projektowania !</h1>

               <div className='banner-btns'>
                   <Button
                       className='btns'
                       buttonStyle='btn--outline'
                       buttonSize='btn--large'
                   >
                       ZAPYTAJ
                   </Button>

                   <Button
                       className='btns'
                       buttonStyle='btn--primary'
                       buttonSize='btn--large'
                   >
                       ZOBACZ <i
                       className='fa-solid fa-circle-play' />
                   </Button>
           </div>

            </section>
        </div>
    );
}

export default BannerSection