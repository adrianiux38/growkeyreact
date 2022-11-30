//importar react

import React from 'react';
import "./Faq.css";
import Arrow from "./assets/arrowdown.svg";

//Componente Funcional 
//type = button-long-text
//prueba




export const Faq = () => {
    {/*const [showResults, setShowResults] = React.useState(0)
        { showResults ? <Results /> : null }
*/}

    const [showResults, setShowResults] = React.useState(0)
    var idBoton;

    const handleClick = event => {
        setShowResults(event.currentTarget.id);
        idBoton = event.currentTarget.id;
        console.log(event.currentTarget.id);
    }
    
    return (
        <div id="faqsection">
            <div className='faqtitle'>
                <h2>FAQ</h2>
            </div>
            <div className='faqscontainer'>
                <button className="buttonfaq" type="button" id="1" onClick={handleClick}>
                    <div className="questionfaq">
                        <p>How to invest?</p>
                    </div>
                    <div className="imagefaq">
                        <img src={Arrow} alt="arrow down"></img>
                    </div>
                </button>
                { showResults === "1" ? <Results id="1"/> : null }
                
                <button className="buttonfaq" type="button" id="2" onClick={handleClick}>
                    <div className="questionfaq">
                        <p>What are the risks of receiving a credit in crypto?</p>
                    </div>
                    <div className="imagefaq">
                        <img src={Arrow} alt="arrow down"></img>
                    </div>    
                </button>
                <button className="buttonfaq" type="button" id="3" onClick={handleClick}>
                    <div className="questionfaq">
                        <p>What are the risks of receiving a credit in crypto?</p>
                    </div>
                    <div className="imagefaq">
                        <img src={Arrow} alt="arrow down"></img>
                    </div>    
                </button>
                <button className="buttonfaq" type="button" id="4" onClick={handleClick}>
                    <div className="questionfaq">
                        <p>What are the risks of receiving a credit in crypto?</p>
                    </div>
                    <div className="imagefaq">
                        <img src={Arrow} alt="arrow down"></img>
                    </div>    
                </button>
                <button className="buttonfaq" type="button" id="5" onClick={handleClick}>
                    <div className="questionfaq">
                        <p>What are the risks of receiving a credit in crypto?</p>
                    </div>
                    <div className="imagefaq">
                        <img src={Arrow} alt="arrow down"></img>
                    </div>    
                </button>
                
            </div>
            
        </div>
    )
}


function Results(id) {
    console.log("el id es " + id);
    if(id==="1"){
        return(
            <div id="results" className="search-results">
                <p> We will charge you depending on your sales, if your sales are not doing great we won't charge you a big ammount. There is a minimum and maximum amount we can charge you per day.</p>
            </div> 
            );
    }
       
}
