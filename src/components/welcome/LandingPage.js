import React from 'react';
import '../../css/LandingPage.css';
import Header from './Header';
import Choices from './Choices';
import cat from '../../images/catLanding.png'
import MainNav from '../navigation/MainNav';

export default function LandingPage() {
    return (
        <>
        <div className="landing-container">
            <Header/>
            {/*<MainNav/>*/}
        </div>  

        <div className="choices-container">
            <Choices/>
        </div>
            {/*}
            <div class="post-container">
                <div className="post-thumb"><img src={cat} alt="cat" class="float-right"/></div>
                <div class="post-content">
                    <h3 className="post-title"> Make a New Friend.</h3>
                    <button className="adopt-btn"> Adopt Now!</button>
                </div>
            </div>
            */}


        {/*<div className="divider"></div>*/}
        <div className="spacing"> helloo</div>
       
       <div className="utilities">
            <div class="d-flex justify-content-center">
                     <h3 class="font-weight-bold"> Trusty Paws</h3>      
                
            </div> 

            <p class="text-center">From finding local friends, to  your  
                    routinely morning walks , . Trusty Paws has  thought of it </p>
            <p class="text-center">and made it better. Join the community , make a new friend, connect with local 
                    & qualified vetenerians and shelters and individuals who sell quality essientials and treats.</p>
            <div className="paragraph">
                 <h5>hi</h5>
            </div> 
        </div>
        </>
    )
}
