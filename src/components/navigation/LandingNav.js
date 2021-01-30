import React, { Component } from 'react'

class LandingNav extends Component {
    render(){

        return(
            <nav>
            <div class="nav-wrapper">
                 <a href="/home" class="brand-logo"><img src={logo} alt="logo" height="60px"/></a>
                     <ul id="nav-mobile" class="right hide-on-med-and-down">
                       <li><a href="/home"><img src={pet} alt="pet" height="60px"/></a></li>
                        <li><a href="/vet"><img src={vet} alt="vet" height="60px"/></a></li>
                        <li><a href="collapsible.html"><img src={treat} alt="treat" height="60x"/></a></li>
                      </ul>
                   </div>
        </nav>
        )
    }
   
}

export default LandingNav;
