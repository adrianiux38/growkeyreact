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
                    <h2 className='containerTitle'>A once-in-a-lifetime opportunity</h2>
                    <p>By being one of the first 1,000 whitelisted ecommerce brands, you will receive a lower interest rate and preferential payment times</p>
                </div>
                <div className='containerText right'>
                    <h2 className='containerTitle'>A once-in-a-lifetime opportunity</h2>
                    <p>By being one of the first 1,000 whitelisted ecommerce brands, you will receive a lower interest rate and preferential payment times</p>
                </div>
            </div>
            <div className='columnContainer'>
                <img src={Platform} alt="plant growing" />
                <button>Apply to whitelist</button>
            </div>
            <div className='columnContainer'>
                <div className='containerText left'>
                    <h2 className='containerTitle'>A once-in-a-lifetime opportunity</h2>
                    <p>By being one of the first 1,000 whitelisted ecommerce brands, you will receive a lower interest rate and preferential payment times</p>
                </div>
                <div className='containerText left'>
                    <h2 className='containerTitle'>A once-in-a-lifetime opportunity</h2>
                    <p>By being one of the first 1,000 whitelisted ecommerce brands, you will receive a lower interest rate and preferential payment times</p>
                </div>
            </div>
        </div>
    </div>
  );
}
