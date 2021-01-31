import React from 'react';
import logo from '../../images/logo.png';
import {CgProfile} from 'react-icons/cg';
import LandingNav from '../navigation/LandingNav';
import {Link} from 'react-router-dom';
import '../../css/Header.css';

export default function Header() {
    return (
        <>
        <div className="profileIcon">
               <Link to="/sign-in"> <CgProfile size={34}/></Link>
        </div>
        <div className="header-container" style={{marginbottom: "0px"}}>
            <div class="d-flex justify-content-center">
            <div className="logo">
                <img src={logo} al="logo"/>
                <h1><b>TRUSTY PAWS</b></h1>
            </div>
         </div>
        </div>
        </>
    )
}
