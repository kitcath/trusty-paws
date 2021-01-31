import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import dogwalker from '../../images/SignIn.png';
import '../../css/SignIn.css';
import fire from '../../firebase';

class SignIn extends Component {

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
    }

    render(){
         return (

            <section class="section-container" id="contact">
                <div class="row">
                    <div class="col">
                        <img src={dogwalker} alt="dog" class="float-left"/>
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
                              <label htmlFor="password">Password</label>
                              <input type="password" id="password" onChange={this.handleChange}/> 
                            Forgot <NavLink to="recover-password">Password?</NavLink>
                            </div>

                            <div className="input-field">
                                 <button className="btn pink lighten-1 z-depth-0 text-decoration-none"><NavLink to="/home">Login</NavLink></button>
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


export default SignIn;