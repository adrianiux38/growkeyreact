import React, { useState } from 'react';
import Store from './assets/money.svg';
import Computer from './assets/computer.svg';
import "./Headerinvest.css";
import axios from 'axios';
import swal from 'sweetalert';
import _ from "lodash";

export const Headerinvest = () => {
    const postData = () => {
        if (
            fullName.length === 0 ||
            email.length === 0 ||
            phone.length === 0 ||
            ammount.length === 0
        ){
            swal("Some data is missing!", "Fill in all the fields to continue!", "error");
        }else{
            axios.post(`http://api.growkey.io/api/investors`, {
                fullname:fullName,
                email:email,
                phone:phone,
                ammount:ammount
            }).then(response => {
                swal("Record stored successfully!", "", "success");

                document.getElementById('fullName').value = "";
                document.getElementById('email').value = "";
                document.getElementById('phone').value = "";
            }).catch((error) => {
                if (error.response) {
                    const errors = _.get(error, 'response.data.errors', {})
                    let err = '';
                    for (var key of Object.keys(errors)) {
                        err += errors[key].toString();
                    }
                    swal("Data incorrect", err, "error");

                } else {
                    swal("Server Error", "Ops! something went wrong!", "error");
                }
            });
        }
    }
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
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
                                <input type="text" id="email"  name="Email"  onChange={(e) => setEmail(e.target.value)}/>
                            </label>
                        </div>
                        <div className='inputElement'>
                            <label>
                                Phone
                                <input type="text" id="phone" name="phone"  onChange={(e) => setPhone(e.target.value)}/>
                            </label>
                        </div>
                        <div className='selectElement'>
                            Select the ammount you would like to invest
                        <select  name="ammount"
                                 onChange={(e) => setAmmount(e.target.value)}
                        >
                            <option selected value="1,000 USD - 10,000 USD">1,000USD - 10,000 USD</option>
                            <option value="10,000USD - 50,000 USD">10,000USD - 50,000 USD</option>
                            <option value="50,000 USD - 100,000 USD">50,000 USD - 100,000 USD</option>
                            <option value="+100,000 USD">+100,000 USD</option>
                        </select>
                        </div>
                        <input type="button" value="Submit" id='enviaDatos' onClick={postData} />
                    </form>
                </div>

            </div>
        </div>
    );
}

