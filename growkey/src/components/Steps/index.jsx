
//importar react

import React from 'react';
import "./Steps.css";
import Icono1 from "./assets/icono1.svg"
//Componente Funcional 
//type = button-long-text

export const Steps = () => {
    return(
        <div className='steps'>
            <h2>4 easy steps to receive your credit</h2>
            <p>No need to follow lenghty procedures as with usual banks and fintechs</p>

            <div className='contenedorColumnas'>
                <div className='columna'>   
                    <h2>Connect your platforms</h2>
                </div>
                <div className='columna'>
                    <img id ="logofeature" src={Icono1} alt="compare and choose" />
                    <h2>Compare and choose</h2>
                </div>
            </div>

            <div className='contenedorColumnas'>
                <div className='columna'>    </div>
                <div className='columna'>    </div>
            </div>


        </div>
    );
}

