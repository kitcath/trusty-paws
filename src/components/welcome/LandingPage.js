import React, { Component } from 'react';
import '../../css/LandingPage.css';
import Header from './Header';
import Choices from './Choices';
import cat from '../../images/catLanding.png'
import MainNav from '../navigation/MainNav';
import LandingNav from '../navigation/LandingNav';

class LandingPage extends Component {
    render(){
    return (
        <>
        <div className="landing-container">  
            <Header/>
        </div>  

        <div className="choices-container">
            <Choices/>
        </div>
       
       <div className="utilities">
            <div class="d-flex justify-content-center">
                     <h3 class="fs-6 fw-bold"> Trusty Paws</h3>      
                
            </div> 
            <p class="text-center pe-5 ps-5">From finding local friends, to  your  
                    routinely morning walks, Trusty Paws has  thought of it and made it better. Join the community , make a new friend, connect with local 
                    & qualified vetenerians and shelters and individuals who sell quality essientials and treats.</p>

        </div>
        </>
    )
    }
}

export default LandingPage;
