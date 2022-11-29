
//importar react

import React from 'react';
import "./Store.css"
import Storevector from './assets/merchant.svg'


//Componente Funcional 
//type = button-long-text

export const Store = () => {
    return(
        <div className='scoreContainer'>
           <img id ="tiendaecommerce" src={Storevector} alt="ecommerce store" />
        </div>
    );
}

