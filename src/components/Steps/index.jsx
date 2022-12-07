
//importar react

import React from 'react';
import "./Steps.css";
import Icono1 from "./assets/icono1.svg"
import Icono3 from "./assets/icono3.svg"
import Icono4 from "./assets/icono4.svg"
import Icono5 from "./assets/icono5.svg"
import Storevector from './assets/merchant.svg'
import {Link} from 'react-router-dom';
//Componente Funcional 
//type = button-long-text
//prueba

export const Steps = () => {
    return(
        <div className='steps'>
            <div className='contenedorPrincipal' id="titulos">
                <div className='contenedor_steps'>
                    <h2 className='titleSteps'>4 easy steps to receive your credit</h2>
                    <p className='descriptionSteps'>No need to follow lenghty procedures as with usual banks and fintechs</p>
                </div>
                <div className='contenedor_steps'>
                    <img id ="tiendaecommerce" src={Storevector} alt="ecommerce store" />
                </div>
            </div>

            <div className='contenedorColumnas'>
                <div className='columna'>   
                    <div class="item">
                        <div className='itemImage'>
                            <img id ="logofeature" src={Icono1} alt="compare and choose" />
                        </div>
                        <div className='itemText'>
                            <h2>Connect your platforms</h2>
                            <p className='itemDescription'>No paperwork needed - simply connect your online stores (such as Amazon or Shopify) and your marketing platforms (Facebook, Google or Amazon Ads)</p>
                        </div>
                    </div>
                    <div class="item">
                        <div className='itemImage'>
                            <img id ="logofeature" src={Icono4} alt="compare and choose" />
                        </div>
                        <div className='itemText'>
                            <h2>Receive the funds</h2>
                            <p className='itemDescription'>The funds will be received at your designated crypto wallet</p>
                        </div>
                    </div>
                </div>
                
                <div className='columna'>

                    <div class="item">
                        <div className='itemImage'>
                            <img id ="logofeature" src={Icono5} alt="compare and choose" />
                        </div>
                        <div className='itemText'>
                            <h2>Compare and choose</h2>
                            <p className='itemDescription'>We will offer you different credit options, compare them and select the one that fits your needs</p>
                        </div>
                    </div>

                    <div class="item">
                        <div className='itemImage'>
                            <img id ="logofeature" src={Icono3} alt="compare and choose" />
                        </div>
                        <div className='itemText'>
                            <h2>Get charged based on your sales</h2>
                            <p className='itemDescription'>One month after you received the credit, we will charge you on a daily basis based on your sales. If you sell less, we charge you less.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ctaButton'>
                <Link className="linkApply" to="/apply"><button type="button">Apply now</button></Link>
            </div>


        </div>
    );
}

