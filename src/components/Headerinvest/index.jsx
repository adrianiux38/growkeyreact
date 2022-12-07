import React from 'react';
import Store from './assets/money.svg';
import Computer from './assets/computer.svg';
import "./Headerinvest.css";

export const Headerinvest = () => {

    const handleChange = ({event}) => {
        this.setState({[event.target.name]: event.target.value});
        }
     
    const handleSubmit = ({event}) => {
    
    fetch('http://localhost:3000/store-data', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
        }).then(function(response) {
        console.log(response)
        return response.json();
        });
    
    event.preventDefault();
    }
    
    return (
        <div id='headerinvest'>
            <div className="contenedor">
                <div id="platformPreview">
                    <img src={Computer} alt="Growkey platform" />
                    <img id="store" src={Store} alt="Ecommerce store" />
                </div>
                <div id="form">
                    <h2>Register Now</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='inputElement'>
                            <label>
                                Full Name
                                <input type="text" name="name" onChange={handleChange}/>
                            </label>
                        </div>
                        <div className='inputElement'>
                            <label>
                                Email
                                <input type="text" vallue="email" name="Email"/>
                            </label>
                        </div>
                        <div className='inputElement'>
                            <label>
                                Phone
                                <input type="text" name="Full name"/>
                            </label>
                        </div>
                        <div className='selectElement'>
                            Select the ammount yout would like to receive
                        <select>
                            <option selected value="1,000 USD - 10,000 USD">1,000USD - 10,000 USD</option>
                            <option value="10,000USD - 50,000 USD">10,000USD - 50,000 USD</option>
                            <option selected value="50,000 USD - 100,000 USD">50,000 USD - 100,000 USD</option>
                            <option value="+100,000 USD">+100,000 USD</option>
                        </select>
                        </div>
                        <input type="submit" value="Submit" id='enviaDatos'/>
                    </form>
                </div>

            </div>
        </div>
    );
}

