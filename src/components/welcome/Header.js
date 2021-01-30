import React from 'react';
import logo from '../../images/logo.png';

export default function Header() {
    return (
        <div className="header-container" style={{margin: "0px"}}>
            <div class="d-flex justify-content-center">
            <div className="logo">
                <img src={logo} al="logo"/>
            </div>
         </div>
        </div>
        
    )
}
