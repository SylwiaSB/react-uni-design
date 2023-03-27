import React from "react";
import {Button} from "./Button";

import './BannerSection.css';
import '../App.css';
import './Button.css'

function BannerSection() {
    return (
        <div className='banner-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>

            <div className='banner-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>

                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    WATCH TRAILER <i
                    className='fa-solid fa-circle-play' />
                </Button>
            </div>
        </div>
    );
}

export default BannerSection