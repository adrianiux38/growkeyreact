
//importar react

import React from 'react'
import "./Header.css"
import {Link} from 'react-router-dom';

//Componente Funcional 
//type = button-long-text

export const Header = () => {
    return(
        <div className='headerBanner'>
            <div className='headerTitle'>
                <h1 id="titleHeader">
                    Apply to  <span> get a credit</span> grow your ecommerce
                </h1>
                <p className='textHeader'>We help you grow your ecommerce with an instant credit at an interest rate that fits your needs</p>
                <div className='botones'>
                    <Link className='boton' to="/apply" id='boton1'>Apply for a credit</Link>
                    <Link className='boton' to="/invest" id='boton2'>Lend</Link>
                </div>
            </div>
            <div className='platformPreview'></div>
        </div>
    );
}


