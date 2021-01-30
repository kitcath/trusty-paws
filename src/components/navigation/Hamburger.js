import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {HamburgerSignedIn, HamburgerSignedOut} from './HamburgerSignedIn';
import SubMenu from './HamburgerSubMenu';
import logo from '../../images/logo.png';

const Nav = styled.div
`
    height:80px;
    background:#FEEADE;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color:#938383;
`

const NavIcon = styled(Link)
`
    margin-left:2rem;
    font-size:2rem;
    height: 80ox;
    display:flex;
    justify-content: flex-start;
    align-items: center; 

`
const SidebarNav = styled.nav
`
    background:#FEEADE;
    color:#938383;
    width:250px;
    height:100vh;
    float:right;
    position:fixed;
    justify-content: center;
    top:0px;
    left:2px;
    transition:250ms; 
`

const SidebarWrap = styled.div
`
float:right;
width:100%
`
function Hamburger() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
  
    return (
        <>
        <SidebarNav>
            <span>
                 <img src={logo} alt="logo" height="50px"/>
            <h4> Trusty Paws</h4>
            </span>
           
            <SidebarWrap>
                 {HamburgerSignedOut.map((item, index) => {
                    return <SubMenu item={item} key={index}/>
                 })}
            </SidebarWrap>
        </SidebarNav>
        </>
    )
}

export default Hamburger;
