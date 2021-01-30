import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {RiArrowDownSLine, RiArrowDropUpLine} from 'react-icons/ri';

export const HamburgerSignedOut = [
    {
        title:"My Profile",
        icon: <AiIcons.AiFillHome/>,
        iconClosed:<RiArrowDownSLine />,
        iconOpened:<RiArrowDropUpLine />,
        subNav:[
            {
                title:"Favourite Pets ",
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title:"Settings",
                icon: <IoIcons.IoIosPaper/>,
            },
        ]
        
    }, 
   {
        title:"My Applications",
        icon: <AiIcons.AiFillHome/>,
        iconClosed:<RiArrowDownSLine />,
        iconOpened:<RiArrowDropUpLine />,
        subNav:[
            {
                title:"Application 1 ",
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title:"Application 2",
                icon: <IoIcons.IoIosPaper/>,
            },
        ]

    },
    {
        title:"Browse",
        path:"/pets",
        icon: <AiIcons.AiFillHome/>,
        iconClosed:<RiArrowDownSLine />,
        iconOpened:<RiArrowDropUpLine />,
        subNav:[
            {
                title:"Pets ",
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title:"Treats",
                icon: <IoIcons.IoIosPaper/>,
            },
        ]

    },
    {
        title:"Find Vets",
        path:"/pets",
        icon: <AiIcons.AiFillHome/>,
        iconClosed:<RiArrowDownSLine />,
        iconOpened:<RiArrowDropUpLine />,

    },
    {
        title:"My Cart",
        icon: <AiIcons.AiFillHome/>,
       iconClosed:<RiArrowDownSLine />,
        iconOpened:<RiArrowDropUpLine />,
        subNav:[
            {
                title:"Prodcut 1",
                path:"/reports/Pets",
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title:"Product 2",
                path:"/reports/favourite",
                icon: <IoIcons.IoIosPaper/>,
            },
        ]

    },
    {
       title: <button> Sign out</button>,
    }
]