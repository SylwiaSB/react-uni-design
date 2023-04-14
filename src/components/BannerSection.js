import React, {useState} from "react";
import {Button} from "./Button";

import './BannerSection.css';
import '../App.css';
import './Button.css'

function BannerSection() {

    const [bannerVisible, setBanerVisible] = useState(true)

    const toggleBanner = () => {
        setBanerVisible(!bannerVisible)
    }



    return (
        <>
            <div className='banner-container'>
                <video src='/videos/Hybrid Blue Laser & LED Light Source Handheld 3D Scanner EinScan HX - 3D Digitizing Solution.mp4'
                       autoPlay loop muted />

                { bannerVisible ? (
                <section className='banner-box-container'>
                        <h1>Odkryj nowy wymiar projektowania !</h1>

                        <div className='banner-btns'>
                            <Button
                                buttonStyle='btn--outline'
                                buttonSize='btn--large'
                                goTo={'/contact'}
                            >
                                ZAPYTAJ
                            </Button>

                            <Button
                                buttonStyle='btn--primary'
                                buttonSize='btn--large'
                                onClick={()=> toggleBanner()}
                            >
                                ZOBACZ <i
                                className='fa-solid fa-circle-play' />
                            </Button>
                        </div>

                    </section>

            ) : (<Button
                customStyle={'rel-btn'}
                buttonStyle='btn--outline'
                buttonSize='btn--medium'
                onClick={()=> toggleBanner()}
            >
                    <i className="fa-solid fa-backward-step"></i>
            </Button>)}
            </div>
        </>

    );
}

export default BannerSection