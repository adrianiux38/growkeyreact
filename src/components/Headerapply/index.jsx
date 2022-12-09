import React, { useState } from 'react';
import Store from './assets/store.svg';
import Computer from './assets/computer.svg';
import "./Headerapply.css";
import axios from 'axios';
import swal from 'sweetalert';
import _ from 'lodash';

export const Headerapply = () => {
    const postData = () => {
        if (
            fullName.length === 0 ||
            email.length === 0 ||
            phone.length === 0 ||
            url.length === 0 ||
            ammount.length === 0
        ){
            swal("Some data is missing!", "Fill in all the fields to continue!", "error");
        }else{
            axios.post(`http://api.growkey.io/api/companies`, {
                fullname:fullName,
                email:email,
                url:url,
                phone:phone,
                ammount:ammount
            }).then(response => {
                swal("Record stored successfully!", "", "success");

                document.getElementById('fullName').value = "";
                document.getElementById('email').value = "";
                document.getElementById('phone').value = "";
                document.getElementById('url').value = "";
            }).catch((error) => {
                if (error.response) {
                    const errors = _.get(error, 'response.data.errors', {})
                    let err = '';
                    for (var key of Object.keys(errors)) {
                        err += errors[key].toString();
                    }
                    swal("Data incorrect", err, "error");

                }
            });
        }
    }
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [url, setUrl] = useState('');
    const [ammount, setAmmount] = useState('1,000 USD - 10,000 USD');
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
                            <input type="text" id="fullName" name="fullName" onChange={(e) => setFullName(e.target.value)}/>
                        </label>
                    </div>
                    <div className='inputElement'>
                        <label>
                             Email
                            <input type="email" id="email" name="Email"  onChange={(e) => setEmail(e.target.value)}/>
                        </label>
                    </div>
                    <div className='inputElement'>
                        <label>
                            Phone
                            <input type="text" id="phone" name="phone"  onChange={(e) => setPhone(e.target.value)}/>
                        </label>
                    </div>
                    <div className='inputElement'>
                        <label>
                            URL
                            <input type="text" id="url" name="url"
                                   onChange={(e) => setUrl(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className='selectElement'>
                        Select the ammount you need to grow
                    <select
                        onChange={(e) => setAmmount(e.target.value)}
                    >
                        <option value="1,000 USD - 10,000 USD">1,000USD - 10,000 USD</option>
                        <option value="10,000USD - 50,000 USD">10,000USD - 50,000 USD</option>
                        <option value="50,000 USD - 100,000 USD">50,000 USD - 100,000 USD</option>
                        <option value="+100,000 USD">+100,000 USD</option>
                    </select>
                    </div>
                    <button id='enviaDatos' type="button" onClick={postData} >
                        Submit
                    </button>
                </form>
            </div>

        </div>
    </div>
  );
}
