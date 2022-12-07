//importar react

import React from 'react';
import "./Quoteinvest.css";
import Moneybag from "./assets/graph.svg"

//Componente Funcional 
//type = button-long-text
//prueba

export const Quoteinvest = () => {
    return(
        <div id="quotecontainer1">
            <div id="fondo2"></div>
            <div id="quote">
                <div className="quoteText">
                    <h2>Millions of businesses are wrongfully denied funding every year</h2>
                    <p>Banks and actual institutions deny millions of businesses to receive a credit, and if not denied, these charge abusive interest rates that don’t allow for the business to grow</p>
                </div>
                <div className='quoteImage'>
                    <img src={Moneybag} alt="Diversified portfolio" />
                </div>
            </div>
        </div>
    );
}


