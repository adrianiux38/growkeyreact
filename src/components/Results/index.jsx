import React from "react";
import "./Results.css"

const Results = ({id})  => {

    return(
        <div id="results" className="search-results">
            { id === "1" ? <p> We will charge you depending on your sales, if your sales are not doing great we won't charge you a big ammount. There is a minimum and maximum amount we can charge you per day.</p> :null }
            { id === "2" ? <p>All your credits are given to you in the most trusted stablecoins of the industry, this is a cryptocurrency that is peged to your local currency (e.g. BUSD) </p> :null }
            { id === "3" ? <p>You will receive preauthorized to the bank account(s) where receive your sales from your different income streams like Shopify, Amazon, ebay, Mercado libre, etc. We charge you depending on your sales, if your sales are low so will our charges. </p> :null }
            { id === "4" ? <p>We do not proceed legally against you, however you would be losing the oportunity to receive another credit or get help from our team to keep growing your business, having to go back to banks or institutions with unbelievable interest rates</p> :null }
            { id === "5" ? <p>In a mater of minutes you could be in the eyes of thousands of investors to receive a credit, all you have to do is connect your income stream like Shopify or marketplaces (all your data has military encryption and we just access your sales history) and your ad accounts such as Google, Facebook or Tiktok ads. 3 minutes after you will receive different investment offers with a specific amount, interest rate and payment time</p> :null }
        </div> 
        );
    
        
}

export default Results; 
