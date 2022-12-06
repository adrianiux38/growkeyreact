import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Headerinvest } from '../../components/Headerinvest';
import "./Invest.css";
import { Quoteapply } from '../../components/Quoteinvest';
import { Ctaapply } from '../../components/Ctaapply';
import {Footer} from "../../components/Footer";

export const Invest = () => {
  return (
    <main id='Invest'>
        <Navbar/>
        <Headerinvest/>
        <Quoteapply/>
        <Ctaapply/>
        <Footer/>
    </main>
  );
}
