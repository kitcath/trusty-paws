import React, {Component} from 'react';
import '../../css/MainNav.css';
import { Link,  NavLink } from 'react-router-dom';
import Header from '../welcome/Header';

class MainNav extends Component {
    render(){
    return(
        <>
        <Header/>
       <div class="list-tem"> 
            <div className="d-flex justify-content-center">
                  <ul class="list-inline-item text-decoration-none ">
                     <li class="list-inline-item" ><Link to='/'>Pets</Link></li>
                     <li class="list-inline-item"><NavLink to='/'>Toys</NavLink></li>
                      <li class="list-inline-item "><NavLink to='/'>Food</NavLink></li>
                      <li class="list-inline-item"><NavLink to='/'>Supplies</NavLink></li>
                      <li class="list-inline-item "><NavLink to='/'>Vetenerian</NavLink></li>
                      <li class="list-inline-item"><NavLink to='/'>Shelters</NavLink></li> 
             </ul>  
          </div> 
        </div>  
        </>
    )
    }
}

export default MainNav;