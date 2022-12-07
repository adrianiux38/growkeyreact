import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Headerinvest } from '../../components/Headerinvest';
import "./Invest.css";
import { Quoteinvest} from '../../components/Quoteinvest';
import {Footer} from "../../components/Footer";
import { Platformpreview } from '../../components/Platformpreview';

export const Invest = () => {
  return (
    <main id='Invest'>
        <Navbar/>
        <Headerinvest/>
        <Quoteinvest/>
        <Platformpreview/>
        <Footer/>
    </main>
  );
}
