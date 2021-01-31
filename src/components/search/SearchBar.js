import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SearchData from './SearchData';

const Nav = styled.div
`
    height:100vh;
    width:50px;
    transform: translateX(442px);
    background: transparent
    justify-content: flex-start;
    align-items: center;
    color:#938383;
`

const NavIcon = styled(Link)
`

    font-size:2rem;
    margin-top:0px;
    height: 80px;
    display:flex;
    justify-content: flex-end;
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
    top: 0px;
    right:2px;
    right: ${({sidebar}) => (sidebar ? '0' : '-100%')};
    transition:250ms; 
`

const SidebarWrap = styled.div
`
float:right;
width:100%
`
function SearchBar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
  
    return (
        <>
        <Nav> 
            <NavIcon to='#'>
                <FaIcons.FaSearch onClick={showSidebar} />
            </NavIcon>
        </Nav>
        <SidebarNav sidebar={!sidebar}>
            <SidebarWrap>
                {/*add profile picture upload*/}
                 <NavIcon to='#'>
                      <AiIcons.AiOutlineClose onClick={showSidebar}/>
                 </NavIcon>
                    <SearchData/>
            </SidebarWrap>
        </SidebarNav>
        </>
    )
}

export default SearchBar;
