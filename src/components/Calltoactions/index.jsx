//importar react

import React from 'react';
import "./Calltoactions.css";
import Businesses from "./assets/businesses.svg"
import Lenders from "./assets/lenders.svg"
import {Link} from 'react-router-dom';
//Componente Funcional 
//type = button-long-text
//prueba

export const Calltoactions = () => {
    return(
        <div id="calltoactions">
            <div className='ctaTitle'>
                <h1>Creating a better world for funding businesses</h1>
            </div>
            <div id="ctacontainer">
                <div className='cta'>
                    <img src={Businesses} alt="for businesses" />
                    <h2>For Bussinesses</h2>
                    <p>Using technology and advanced algorithms, we optimize existing funding and unlock funding for millions of otherwise overlooked businesses</p>
                    <Link to="/apply" className='linkButton'>Get a credit</Link>
                </div>
                <hr/>        
                <div className='cta'>
                    <img src={Lenders} alt="for lenders" />
                    <h2>For lenders</h2>
                    <p>We open up an entirely new market segment to lenders using advanced algorithms and by cross-checking previously unfundable businesses</p>
                    <Link to="/invest" className='linkButton'>Join us</Link>
                </div>
            </div>
            
        </div>
    );
}

