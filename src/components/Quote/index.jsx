//importar react

import React from 'react';
import "./Quote.css";
import Moneybag from "./assets/moneybag.svg"
import Background from "./assets/nuevofondo.svg"

//Componente Funcional 
//type = button-long-text
//prueba

export const Quote = () => {
    return(
        <div>
            <div id="fondo">
                <img src={Background} alt="Fondo"/>
            </div>
            <div id="quote">
                <div className="quoteText">
                    <h2>Millions of businesses are wrongfully denied funding every year</h2>
                    <p>Banks and actual institutions deny millions of businesses to receive a credit, and if not denied, these charge abusive interest rates that don’t allow for the business to grow</p>
                </div>
                <div className='quoteImage'>
                    <img src={Moneybag} alt="money baag" />
                </div>
            </div>
        </div>
    );
}

