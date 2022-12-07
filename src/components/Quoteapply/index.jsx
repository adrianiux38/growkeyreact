import React from 'react';
import "./Quoteapply.css";
import Planta from "./assets/planta.svg";

export const Quoteapply = () => {
  return (
    <div id='quoteapply'>
        <div className='containerQuote'>
            <h2>A once-in-a-lifetime opportunity</h2>
            <p>By being one of the first 1,000 whitelisted ecommerce brands, you will receive a lower interest rate and preferential payment times</p>
            <a href="#headerinvest" className='linkApply'><button>Apply to witelist</button></a>
        </div>
        <div className='containerImage'>
            <img src={Planta} alt="plant growing" />
        </div>
    </div>
  );
}
