//importar react

import React from 'react'
import "./Navbar.css"

//Componente Funcional 
//type = button-long-text

export const Navbar = () => {
    return(
        <div>
            <ul id='navbar'>
                <li className="link">Get a credit</li>
                <li className="link">Invest</li>
            </ul>
        </div> 
    );
}
