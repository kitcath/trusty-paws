import React, { Component } from 'react';
import goodDog from '../../images/undraw_good_doggy_4wfq.png';
import Filter from './Filter';
import Search from './Search';

class SearchData extends Component {
    render(){
     return (
         <>
          <img src={goodDog} alt="good dog" width="200px" height="150px" justify-content="center"/>
         <Search/>
         <Filter/>
            
         </>
    
     )
    }
    
 
}

export default SearchData
