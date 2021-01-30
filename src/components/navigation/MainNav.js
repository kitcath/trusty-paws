import React from 'react';
import '../../css/MainNav.css';
import { NavLink } from 'react-router-dom';

const MainNav = () =>{
    return(
       <div class="list-tem"> 
            <div className="d-flex justify-content-center">
                  <ul class="list-inline-item text-decoration-none ">
                     {/*<li class="list-inline-item" ><NavLink to='/'>PETS</NavLink></li>
                     <li class="list-inline-item"><NavLink to='/'>Toys</NavLink></li>
                      <li class="list-inline-item "><NavLink to='/'>Food</NavLink></li>
                      <li class="list-inline-item"><NavLink to='/'>Supplies</NavLink></li>
                      <li class="list-inline-item "><NavLink to='/'>Vetenerian</NavLink></li>
    <li class="list-inline-item"><NavLink to='/'>Shelters</NavLink></li>*/} 
             </ul>  
          </div>
          
        </div>
    
    )
}

export default MainNav;