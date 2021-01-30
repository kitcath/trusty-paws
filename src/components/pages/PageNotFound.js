import React, {Component} from 'react';
import image from '../../images/page-not-found.png';
import MainNav from '../navigation/MainNav';

class PageNotFound extends Component {
    render(){
     return (
         <>
         <MainNav/>
        <div class="d-flex justify-content-center">
            <img src={image}   alt="404-page-not found"/>
        </div>
        </>
     )
    }
}

export default PageNotFound;

