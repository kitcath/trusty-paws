import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
    display:flex;
    color:#938383;
    justify-content: space-between;
    align-items:center;
    passing:20px;
    list-style:none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover{
        background: #F0D893;
        border-left: 4px solid #FBE3D7;
        cursor:pointer;
    }
`
const SidebarLabel = styled.span
`
    margin-left:16px;

`
const DropdownLink = styled.span
`
    background: #414757;
    height:60px;
    padding-left:3rem;
    display:flex;
    align-items: center;
    text-decoration none;
    color:#938383;
    font-size:18px;

    &:hover{
        background: #632ce4;
        cursor:pointer;
    }
`
const SubMenu = ({item}) => {

    const [subNav, setSubNav] = useState(false);
    const showSubNav  = () => setSubNav(!subNav);
    return(
        <>
            <SidebarLink onClick={item.subNav && showSubNav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subNav 
                    ? item.iconOpened 
                    : item.subNav 
                    ? item.iconClosed
                     : null}
                </div>
            </SidebarLink>
            {subNav && item.subNav.map((item,index) => {
                return(
                    <DropdownLink>
                        <div>
                            {item.icon}
                            <SidebarLabel> {item.title}</SidebarLabel>
                        </div>
                    </DropdownLink>
                )
            })}
        </>
    )
}

export default SubMenu;