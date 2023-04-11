import React from "react";
import {Button} from "./Button";
import './Footer.css'
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className='footer-container'>

            <section className='footer-contact'>
                <p className='footer-contact-heading'>
                    Sprawdź, jakie rozwiązania mamy dla Ciebie!
                </p>
                <p className='footer-contact-text'>

                </p>
                <div className='input-areas'>
                    <form>
                        <input type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required
                               placeholder='zostaw swój numer telefonu' id="phone" name="phone" className='footer-input'/>
                        <Button  buttonStyle='btn--outline'>Skontaktujemy się z Tobą</Button>
                    </form>
                </div>
            </section>

            <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                <Link to='/about'><h2>O firmie</h2></Link>
                </div>
                <div className="footer-link-items">
                    <Link to='/projects'><h2>Projekty</h2></Link>
                </div>
            </div>
            </div>

            <section className='social-media'>
                <div className="social-media-wrap">

                    <div className="footer-logo">
                        <Link to='/' className='social-logo'>
                            <img alt='footer logo' src='/images/Logo_uni_design.svg'/>
                        </Link>
                    </div>

                    <div className="social-icons">
                        <Link className='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link className='social-icon-link instagram'
                              to='/'
                              target='_blank'
                              aria-label='Instagram'
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </Link>
                    </div>
                </div>

            </section>
            <hr/>
            <section>
                <small className='website-rights'>UNI @ 2023</small>
            </section>


        </div>
);
}

export default Footer