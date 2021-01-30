import React, {Component} from 'react';
import '../../css/MainNav.css';
import { Link,  NavLink } from 'react-router-dom';
import Header from '../welcome/Header';
import logo from '../../images/logo1.png';
import pet  from '../../images/doggo.png';
import vet from '../../images/vet.png';
import treat from '../../images/treat.png';

class MainNav extends Component {
    render(){
    return(
        <>
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
 
        </>
    )
    }
}

export default MainNav;