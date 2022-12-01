//importar react

import {React, useState }  from 'react'
import "./Navbar.css"

//Componente Funcional 
//type = button-long-text

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className='navbar'>
            <div className="container-lg flex flexRow justifySpace">
                <div className={isOpen ? "menuOpen menuButton" : "menuButton"} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>

                </div>
                <div id = "menuHome" className={(isOpen ? 'navOpen ' : '') + "menu flex flexRow gap"}>
                    <a href="#" onClick={() => setIsOpen(!isOpen)}>Apply for a credit</a>
                    <a href="#" onClick={() => setIsOpen(!isOpen)}>Invest</a>
                    <a href="#" onClick={() => setIsOpen(!isOpen)}>Whitelist</a>
                </div>
            </div>
        </div>
    );
}
