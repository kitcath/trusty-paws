import React, { Component } from 'react';
import '../../css/UserWelcome.css';
import walking from '../../images/undraw_Dog_walking_re_l61p.png';
class UserWelcome extends Component {
    
    render(){
        return(

            <>
                <div className="header">
                    <h1> WELCOME BACK!</h1>
                </div>

                <div className="updates">
                    Don't forget to walk your dog!
                    <img src={walking} alt="walk" height="400px" float="right"/>
                </div>
            </>

        )
    }
    
}

export default UserWelcome;
