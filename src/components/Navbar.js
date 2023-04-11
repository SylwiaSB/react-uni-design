import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Button} from "./Button";

import './Navbar.css';


function Navbar () {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (

        <>
            <nav className='navbar'>

                <div className='navbar-container'>

                    <Link to='/'
                          onClick={closeMobileMenu}>
                        <img className='navbar-logo' src='/images/Logo_uni_design.svg' alt='Logo'/>
                    </Link>


                    <div className='menu-icon' onClick={handleClick}>
                        <i className={ click ? 'fas fa-times' : 'fas fa-bars'}> </i>
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className='nav-item'>
                            <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                                PROJEKTY
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                               O FIRMIE
                            </Link>
                        </li>

                        <li>
                            <Link to='/contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                                KONTAKT
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>KONTAKT</Button>}
                </div>
            </nav>
        </>
    ) ;
            }

export default Navbar;