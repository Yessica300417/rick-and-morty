import React from 'react';
import './NavbarElements.css'

import Logo from '../../Assets/Logo-fondo-negro-verde.png';
import RickAndMorty from '../../Assets/logo-rick-and-morty-sin-fondo.png'

const Navbar = () => {
    return (
        <nav className="navLogo">
            <div>
                <img className="logImg" src={Logo} alt="logo" />
                <img classname="logName" src={RickAndMorty} alt="RickAndMorty" width="30%" />
            </div>
        </nav>
    );
}

export default Navbar;