
//importar react

import React from 'react'
import "./Features.css"
import Feature1 from './assets/instant.svg'
import Feature2 from './assets/payable.svg'
import Feature3 from './assets/personalized.svg'
import Feature4 from './assets/uncollateralized.svg'

//Componente Funcional 
//type = button-long-text

export const Features = () => {
    return(
        <div className='features'>
            <h2 className='featuresTitle'>The key to grow your ecommerce</h2>
            <div id="featuresDescription">
                <div className='feature'>
                    <img src={Feature1} alt="instant" />
                    <h3> Instant </h3>
                    <p>Receive a credit in under24 hours</p>
                </div>
                <div className='feature'>
                    <img src={Feature3} alt="payable" />
                    <h3> Tailored </h3>
                    <p>We offer you an interest rate and amount based on your ecommerce ad spent history</p>
                </div>
                <div className='feature'>
                    <img src={Feature4} alt="personalized" />
                    <h3> Uncollateralized </h3>
                    <p>You don'`t need to leave a collateral or have the “right” credit score that most banks and fintechs ask for</p>
                </div>
                <div className='feature'>
                    <img src={Feature2} alt="uncollateralized" />
                    <h3> Payable </h3>
                    <p>You pay depending on your sales, if your sales are slow so will your payments</p>
                </div>
            </div>
        </div>
    );
}

