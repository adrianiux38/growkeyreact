import React from "react";
import "./Footer.css"; 
import Logo from "./assets/logo.svg";
import Mailicon from "./assets/mailicon.svg";
import Phoneicon from "./assets/phoneicon.svg";
import Locationicon from "./assets/locationicon.svg";

export const Footer = ()  => {
    return(
        <div id="footer">
            <div id="footercontainer">
                <div className="footercolumn1">
                        <img src={Logo} alt="Logo Growkey"/>
                </div>
                <div className="footercolumn2">
                        <p>Contact us</p>
                        <div className="contactInfo">
                            <img src={Mailicon} alt="Logo Growkey"/>
                            <a className="details" href="mailto:adrian.gutierrez@growkey.io">adrian.gutierrez@growkey.io</a>
                        </div>
                        <div className="contactInfo">
                            <img src={Phoneicon} alt="Logo Growkey"/>
                            <a className="details" href="tel:+527331258324”>+527331258324">+52-733-125-83-24</a>
                        </div>
                        <div className="contactInfo">
                            <img src={Locationicon} alt="Logo Growkey"/>
                            <a className="details" href="tel:+527331258324”>+527331258324">+52-733-125-83-24</a>
                        </div>
                </div>
                <div className="footercolumn2">
                        <p>Menu</p>
                        <div className="contactInfo menulink">
                            <a href="#">Home</a>
                        </div>
                        <div className="contactInfo menulink">
                            <a href="#">Get credit</a>
                        </div>
                        <div className="contactInfo menulink">
                            <a href="#">Invest</a>
                        </div>
                </div>
           </div>
        </div> 
        );
}