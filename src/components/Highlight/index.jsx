import React from 'react'
import "./Highlight.css"
import Highlightimage from './assets/highlight.svg'

//Componente Funcional 
//type = button-long-text

export const Hightlight = () => {
    return(
        <div className='highlightContainer'>
            <div className="rectangle">
                <div className="subrectangle">
                    <img src={Highlightimage} alt="ecommerce growth" />
                </div>
                <div className="subrectangle">
                    <h2>Making your business dreams possible</h2>
                    <p>We do not just give you the economic means you need to accomplish it, but we also also give you personalized reccomendations to help you get the most out of it</p>
                    <button className='boton' type='button' id='boton1'>Apply Now</button>
                </div>
            </div>
        </div>
    );
}