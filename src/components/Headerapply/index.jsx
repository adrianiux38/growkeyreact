import React from 'react';
import Store from './assets/store.svg';
import Computer from './assets/computer.svg';
import "./Headerapply.css";

export const Headerapply = () => {
  return (
    <div id='headerinvest'>
        <div className="contenedor">
            <div id="platformPreview">
                <img src={Computer} alt="Growkey platform" />
                <img id="store" src={Store} alt="Ecommerce store" />
            </div>
            <div id="form">
                <h2>Register Now</h2>
                <form>
                    <div className='inputElement'>
                        <label>
                            Full Name
                            <input type="text" name="Full name"/>
                        </label>
                    </div>
                    <div className='inputElement'>
                        <label>
                             Email
                            <input type="text" name="Email"/>
                        </label>
                    </div>
                    <div className='inputElement'>
                        <label>
                            Phone
                            <input type="text" name="Full name"/>
                        </label>
                    </div>
                    <div className='inputElement'>
                        <label>
                            URL
                            <input type="text" name="Full name"/>
                        </label>
                    </div>
                    <div className='selectElement'>
                        Select the ammount yout want to invest
                    <select>
                        <option selected value="1,000 USD - 10,000 USD">1,000USD - 10,000 USD</option>
                        <option value="10,000USD - 50,000 USD">10,000USD - 50,000 USD</option>
                        <option selected value="50,000 USD - 100,000 USD">50,000 USD - 100,000 USD</option>
                        <option value="+100,000 USD">+100,000 USD</option>
                    </select>
                    </div>
                    <button id='enviaDatos'>
                        Submit
                    </button>
                </form>
            </div>

        </div>
    </div>
  );
}
