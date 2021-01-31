import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import dogwalker from '../../images/forgotPassword.png';
import '../../css/SignIn.css';

class PasswordRecovery extends Component {

    state={
        email:'',
        password:'',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render(){
         return (

            <section class="section-container" id="contact">
                <div class="row">
                    <div class="col">
                        <img src={dogwalker} alt="dog" class="float-left" height="600px"/>
                    </div>
                    <div class="col">
                        <div className="space">hello</div>
                        <form className="white" onSubmit={this.handleSubmit}>
                            <label> Sign In</label>
                            <div className="input-field">
                                <input type="email" id="email" onChange={this.handleChange}/>
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="input-field">
                              <label htmlFor="password"> New Password</label>
                              <input type="password" id="password" onChange={this.handleChange}/> 
                            </div>

                            <div className="input-field">
                                 <button className="btn pink lighten-1 z-depth-0"><NavLink to="/"> Submit</NavLink></button>
                           </div>

                           <div className="input-field">
                           Don't have an account? <NavLink to="/signup"> Create Account</NavLink>
                           </div>
                        </form>
                    </div>

                </div>
            </section>
         )
    }
   
}


export default PasswordRecovery;