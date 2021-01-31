import React, { Component } from 'react';
import logo from '../../images/logo1.png';
import profile  from '../../images/profile-icon.png';
import {Link } from 'react-router-dom'


class LandingNav extends Component {
    render(){

        return(
            <>
            <nav class=" #ffcdd2 red lighten-4">
            <div class="nav-wrapper ">
                 <a href="/home" class="brand-logo"></a>
                     <ul id="nav-mobile" class="right hide-on-med-and-down">
                       <li><Link to="/sign-in"><img src={profile} alt="profile-icon" height="40px" /></Link></li>
                      </ul>
                   </div>
        </nav>
        </>
        )
    }
   
}

export default LandingNav;
