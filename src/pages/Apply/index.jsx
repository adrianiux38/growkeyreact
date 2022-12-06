import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Headerapply } from '../../components/Headerapply';
import "./Apply.css";
import { Quoteapply } from '../../components/Quoteapply';
import { Ctaapply } from '../../components/Ctaapply';
import {Footer} from "../../components/Footer";
import { Platformpreview } from '../../components/Platformpreview';

export const Apply = () => {
  return (
    <main id='Apply'>
        <Navbar/>
        <Headerapply/>
        <Quoteapply/>
        <Platformpreview/>
        <Ctaapply/>
        <Footer/>
    </main>
  );
}
