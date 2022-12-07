//importar react

import {React, useState }  from 'react'
import "./Navbar.css"
import Logo from "./assets/logo.svg"
import {Link} from 'react-router-dom';

//Componente Funcional 
//type = button-long-text

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className='navbar'>
                <div className="container-lg flex flexRow justifySpace">
                    <Link to='/'>
                        <div className='contNav'>
                            <img src={Logo} alt="logo" />
                        </div>
                    </Link>
                    <div className='contNav' id="logocont">
                        <div className={isOpen ? "menuOpen menuButton" : "menuButton"} onClick={() => setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div id = "menuHome" className={(isOpen ? 'navOpen ' : '') + "menu flex flexRow gap"}>
                    <Link to="/apply" onClick={() => setIsOpen(!isOpen)}>Apply for a credit</Link>
                    <Link to="/invest" onClick={() => setIsOpen(!isOpen)}>Invest</Link>
                </div>
            </div>
        </div>
    );
}
