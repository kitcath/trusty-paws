import React from 'react'
import MainNav from '../navigation/MainNav';
import Search from '../search/Search'
import SearchBar from '../search/SearchBar';
import UserWelcome from './UserWelcome';
import picture from '../../images/picture.png';


const Dashboard = () => {
    return (
        <div>
           
           <section class="section-container">
               <div class="row">
                   <div class="col s1">
                         <MainNav/> 
                   </div>

                   <div class="col s2">
                      <Search/>
                   </div>

                   <div class="col s10">
                        <SearchBar/>     
                   </div>
               </div>
           </section>
          
            <Search/>
        </div>
    )
}

export default Dashboard;
