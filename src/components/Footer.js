import React from "react";
// import {Button} from "./Button";
import './Footer.css'
import {Link} from "react-router-dom";

function Footer() {
    return (

        <div className='footer-container'>

            <section className='footer-contact'>
                <h1 className='footer-contact-heading'>
                    Sprawdź, jakie rozwiązania mamy dla Ciebie!
                </h1>

                <div>

                    <form action="/action_page.php" className='input-areas'>
                        <input type='text' required
                               placeholder='Imię' id="fname" name="fname" className='footer-input'/>

                        <input type='text'
                                   placeholder='Nazwisko' id="lname" name="lname" className='footer-input'/>

                        <input type='tel' pattern="[0-9]{3}[0-9]{3}[0-9]{3}" required
                               placeholder='numer telefonu' id="phone" name="phone" className='footer-input'/>

                        <input type="submit" value="Skontaktujemy się z Tobą" className='footer-input-button'></input>

                    </form>
                </div>
            </section>

            <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                <Link to='/about'><p>O firmie</p></Link>
                </div>
                <div className="footer-link-items">
                    <Link to='/projects'><p>Projekty</p></Link>
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

            <section className='website-rights-line'>
            <hr/>
                <small className='website-rights'>UNI @ 2023</small>
            </section>


        </div>
);
}

export default Footer