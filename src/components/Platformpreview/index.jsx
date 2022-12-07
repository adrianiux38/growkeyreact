import React from 'react';
import "./Platformpreview.css";
import Platform from "./assets/platform.svg";

export const Platformpreview = () => {
  return (
    <div id='platformpreview'>
        <h2 className='sectionTitle'>
        Start earning interest with 4 simple steps
        </h2>
        <div id="platformpreviewContainer">
            <div className='columnContainer' id="leftContainer">
                <div className='containerText right'>
                    <h2 className='containerTitle'>1. Register</h2>
                    <p>Fill in your basic information and connect your favorite crypto wallet</p>
                </div>
                <div className='containerText right'>
                    <h2 className='containerTitle'>2. Select the ecommerce</h2>
                    <p>We will offer you different ecommerce brands to invest in, each with a different size and risk</p>
                </div>
            </div>
            <div className='imageContainer'>
                <img src={Platform} alt="plant growing" />
            </div>
            <div className='columnContainer' id="rightContainer">
                <div className='containerText left'>
                    <h2 className='containerTitle'>3. Invest</h2>
                    <p>Using your regular card or in any of the accepted cryptocurrencies (ETH, AVAX, MATIC or USDT)</p>
                </div>
                <div className='containerText left'>
                    <h2 className='containerTitle'>4. Receive daily interests</h2>
                    <p>You will start earning interest directly to your wallet in USDT 24 hours after your investment is received by the merchant</p>
                </div>
            </div>
        </div>
        <div id="contenedorBoton">
            <button id="applyButton">Apply to whitelist</button>
        </div>
        
    </div>
  );
}
