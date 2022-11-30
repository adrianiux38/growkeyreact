//importar react

import { React, useState } from 'react';
import "./Faq.css";
import Arrow from "./assets/arrowdown.svg";
import Results from "../../components/Results";


//Componente Funcional 
//type = button-long-text
//prueba

export const Faq = () => {
    {/*const [showResults, setShowResults] = React.useState(0)
        { showResults ? <Results /> : null }
*/}

    const [showResults, setShowResults] = useState(0)
    const [displayResult, setDisplay] = useState(false)

    const handleClick = event => {
        setShowResults(event.currentTarget.id);
        setDisplay(!displayResult);
    }
    
    return (
        <div id="faqsection">
            <div className='faqtitle'>
                <h2>FAQ</h2>
            </div>
            <div className='faqscontainer'>
                <button className="buttonfaq" type="button" id="1" onClick={handleClick}>
                    <div className="questionfaq">
                        <p>How does it work?</p>
                    </div>
                    <div className="imagefaq">
                        <img src={Arrow} alt="arrow down"></img>
                    </div>
                </button>
                { showResults === "1" && displayResult ? <Results id={showResults}/> : null }
                
                <button className="buttonfaq" type="button" id="2" onClick={handleClick}>
                    <div className="questionfaq">
                        <p>What are the risks of receiving a credit in crypto?</p>
                    </div>
                    <div className="imagefaq">
                        <img src={Arrow} alt="arrow down"></img>
                    </div>    
                </button>
                { showResults === "2" && displayResult ? <Results id={showResults}/> : null }

                <button className="buttonfaq" type="button" id="3" onClick={handleClick}>
                    <div className="questionfaq">
                        <p>How can I repay my credit?</p>
                    </div>
                    <div className="imagefaq">
                        <img src={Arrow} alt="arrow down"></img>
                    </div>    
                </button>
                { showResults === "3" && displayResult ? <Results id={showResults}/> : null }

                <button className="buttonfaq" type="button" id="4" onClick={handleClick}>
                    <div className="questionfaq">
                        <p>What happens if I can't pay back my credit?</p>
                    </div>
                    <div className="imagefaq">
                        <img src={Arrow} alt="arrow down"></img>
                    </div>    
                </button>
                { showResults === "4" && displayResult ? <Results id={showResults}/> : null }

                <button className="buttonfaq" type="button" id="5" onClick={handleClick}>
                    <div className="questionfaq">
                        <p>How to get my first credit fast?</p>
                    </div>
                    <div className="imagefaq">
                        <img src={Arrow} alt="arrow down"></img>
                    </div>    
                </button>
                { showResults === "5" && displayResult ? <Results id={showResults}/> : null }
                
            </div>
            
        </div>
    )
}


