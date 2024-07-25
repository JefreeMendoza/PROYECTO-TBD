import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { Link, useLocation } from 'react-router-dom'
import './Styles/NavBar.css'
import imgMain from '../img/random.png'


function NavBar() {

    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const getLinkClass = (path) => {
        return location.pathname === path ? 'navbar-link active' : 'navbar-link';
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <>
            <div>
                <nav className='navbar-container'>
                    {/* <h1>
                        Hola mundo
                    </h1> */}

                    <div className='mavbar-left'>
                        <img className="img-main"
                            src={imgMain}
                            alt="Logo"
                        />
                    </div>

                    <div className='navbar-rigth'>
                        <GiHamburgerMenu
                            className="hamburger-icon"
                            onClick={toggleMenu}
                        />

                        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                            <li><Link to="/" className={getLinkClass('/')}>Inicio</Link></li>
                            <li><Link to="/personas" className={getLinkClass('/personas')}>Personas</Link></li>
                            <li><Link to="/talleres" className={getLinkClass('/talleres')}>Talleres</Link></li>
                            <li><Link to="/asesoramiento" className={getLinkClass('/asesoramiento')}>Asesoramiento</Link></li>
                            <li><Link to="/contacto" className={getLinkClass('/contacto')}>Contacto</Link></li>
                        </ul>
                    </div>

                </nav>
            </div>
        </>
    );
}

export default NavBar;