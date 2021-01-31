import React, { Component } from 'react';
import dogwalker from '../../images/SignOut.png';
import '../../css/SignIn.css';
import {NavLink} from 'react-router-dom';

class SignOut extends Component {

    state={
        email:'',
        password:'',
        firstName:'',
        lastName:'',
        accountType:'',
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
                        <img src={dogwalker} alt="dog" class="float-left"/>
                    </div>

                    <div class="col">
                        <div className="space">hello</div>
                        <form className="white" onSubmit={this.handleSubmit}>

                        <div className="input-field">
                            <select class="browser-default"  id="accountType" onChange={this.handleChange}>
                              <option value="" disabled selected>Type of Account?</option>
                              <option value="user">User</option>
                              <option value="animalShelter">Animal Shelter</option>
                              <option value="Veterinarian">Veterinarian</option>
                             </select>
                        </div>

                            <div className="input-field">
                              <label htmlFor="firstName">First Name </label>
                               <input type="text" id="firstName" onChange={this.handleChange}/> 
                           </div>

                            <div className="input-field">
                               <label htmlFor="lastName">Last Name </label>
                                 <input type="text" id="lastName" onChange={this.handleChange}/> 
                            </div>

                            <div className="input-field">
                                <input type="email" id="email" onChange={this.handleChange}/>
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="input-field">
                              <label htmlFor="password">Password</label>
                              <input type="password" id="password" onChange={this.handleChange}/> 
                            </div>

                            <div className="input-field">
                              <label htmlFor="password">Confirm Password</label>
                              <input type="password" id="password" onChange={this.handleChange}/> 
                            </div>

                            <div className="input-field">
                                 <button className="btn pink lighten-1 z-depth-0"><a href="/home"> Create Account</a></button>
                           </div>

                           <div className="input-field">
                           Already have an account? <NavLink to="/login"> Sign In</NavLink>
                           </div>
                        </form>
                    </div>
                  
                </div>
            </section>
         )
    }
   
}


export default SignOut;