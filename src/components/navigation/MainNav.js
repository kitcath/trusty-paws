import React, {Component} from 'react';
import '../../css/MainNav.css';
import { Link,  NavLink } from 'react-router-dom';
import Header from '../welcome/Header';
import Hamburger from './Hamburger';

class MainNav extends Component {
    render(){
    return(
        <>
        <div className="side-bar">
            <Hamburger/>     
        </div>
    
 
        </>
    )
    }
}

export default MainNav;