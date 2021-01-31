import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import dogwalker from '../../images/undraw_Dog_walking_re_l61p.png';
import pic from '../../images/undraw_nature_fun_n9lv.png';
import '../../css/SignIn.css';

class AdoptionForm extends Component {

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
            <>
            <section class="section-container" id="contact">
                <div class="row">
                    <div class="col">
                        <img src={dogwalker} alt="dog" class="float-left" width="800px"/>
                    </div>

                    <div class="col">
                        <div class="row">
                            <form class="col s12">
                                <h2 class="d-flex justify-content-center"> <b>Adoption Request Form</b></h2>
                               
                                <div class="input-field col s4">
                                        <input placeholder="" id="first_name" type="text" class="validate"/>
                                      <label for="first_name">First Name</label>
                                </div>

                                <div class="input-field col s4">
                                   <input id="last_name" type="text" class="validate"/>
                                   <label for="last_name">Last Name</label>
                               </div>
                               <div class="input-field col s4">
                                   <input id="last_name" type="text" class="validate"/>
                                   <label for="last_name">Occupation</label>
                               </div>



                            </form>
                        </div>

                        <div class="row">
                            <div class="input-field col s12">
                                  <input id="address" type="text" class="validate"/>
                                   <label for="address">Address</label>
                             </div>
                       </div>

                       <div class="row">
                             <div class="input-field col s6">
                               <input id="city" type="text" class="validate"/>
                               <label for="city"> City</label>
                           </div>
                           <div class="input-field col s6">
                               <input id="postal_code" type="text" class="validate"/>
                               <label for="postal_code"> Postal Code</label>
                           </div>
                       </div>


                       <div class="row">
                            <div class="input-field col s12">
                                  <input id="email" type="text" class="validate"/>
                                   <label for="email">Email</label>
                             </div>
                       </div>

                       <h4 class="d-flex justify-content-center"><b> Your Family </b></h4>

                       <div class="row">
                           <h6> 1. Who are you buying the pet for?</h6>
                       <p>
                         <label>
                              <input type="checkbox" />
                                 <span> Myself </span>
                         </label>
                           <label><span></span></label>
                         <label> 
                             <input type="checkbox"/>
                             <span>Other</span> 
                         </label>
                       </p>
                       </div>


                       <div class="row">
                             <div class="input-field col s6">
                               <input id="adult" type="text" class="validate"/>
                               <label for="adult"> 2.1 Number of adults (18+)</label>
                           </div>
                           <div class="input-field col s6">
                               <input id="kids" type="text" class="validate"/>
                               <label for="kids"> 2.2 Number of kids</label>
                           </div>
                       </div>


                       <div class="row">
                           <h6> 3. Any kids visiting?</h6>
                       <p>
                         <label>
                              <input type="checkbox" />
                                 <span> Yes </span>
                         </label>
                           <label><span></span></label>
                         <label> 
                             <input type="checkbox"/>
                             <span> No</span> 
                         </label>
                       </p>
                       </div>


                       <div class="row">
                           <h6> 4. Any allergies in the family?</h6>
                       <p>
                         <label>
                              <input type="checkbox" />
                                 <span> Yes </span>
                         </label>
                           <label><span></span></label>
                         <label> 
                             <input type="checkbox"/>
                             <span> No</span> 
                         </label>
                       </p>
                       </div>


                       <div class="row">
                           <h6> 5. How busy is the family's schedule?</h6>
                       <p>
                         <label>
                              <input type="checkbox" />
                                 <span> very busy?        </span>
                         </label>
                           <label><span></span></label>
                         <label> 
                             <input type="checkbox"/>
                             <span> busy</span> 
                         </label>

                         <label> 
                             <input type="checkbox"/>
                             <span> very busy</span> 
                         </label>
                       </p>
                       </div>

                       <div class="row">
                           <h6> 6. How would you describe yourself?</h6>
                       <p>
                         <label>
                              <input type="checkbox" />
                                 <span> <p>Nervous</p>      </span>
                         </label>
                           <label><span></span></label>
                         <label> 
                             <input type="checkbox"/>
                             <span> Loud</span> 
                         </label>

                         <label> 
                             <input type="checkbox"/>
                             <span> Calm</span> 
                         </label>

                         <label> 
                             <input type="checkbox"/>
                             <span> Quiet</span> 
                         </label>
                       </p>
                       </div>
                    </div>{/*row*/}

                </div>
                <div class="row">
                    <div class="col">
                         <img src={pic} alt=""class="float-left" width="800px"/>
                    </div>
                    <div  class="col">
                    <div class="row">
                           <h6> 7. Are you planning on the following in the next month??</h6>
                       <p>
                         <label>
                              <input type="checkbox" />
                                 <span> <p>Moving</p>      </span>
                         </label>
                           <label><span></span></label>
                         <label> 
                             <input type="checkbox"/>
                             <span> Holiday</span> 
                         </label>

                         <label> 
                             <input type="checkbox"/>
                             <span> Change in Schedule</span> 
                         </label>
                       </p>
                       </div>


                       <div class="row">
                           <h6> 8. Where will your pet stay during the holiday?</h6>
                       <p>
                         <label>
                              <input type="checkbox" />
                                 <span> <p>At home with care</p>      </span>
                         </label>
                           <label><span></span></label>
                         <label> 
                             <input type="checkbox"/>
                             <span> Boarding</span> 
                         </label>

                         <label> 
                             <input type="checkbox"/>
                             <span>Other</span> 
                         </label>
                       </p> 
                       </div>

                       <h4 class="d-flex justify-content-center"> <b> Your Home</b></h4>

                       <div class="row">
                           <h6> 1. What time of home do you live in?</h6>
                       <p>
                         <label>
                              <input type="checkbox" />
                                 <span> <p>Acreage</p>      </span>
                         </label>
                           <label><span></span></label>
                         <label> 
                             <input type="checkbox"/>
                             <span> House</span> 
                         </label>

                         <label> 
                             <input type="checkbox"/>
                             <span>Apartment</span> 
                         </label>
                       </p> 
                       </div>


                       <div class="row">
                           <h6> 2. Do you: ?</h6>
                       <p>
                         <label>
                              <input type="checkbox" />
                                 <span> <p>Own</p>      </span>
                         </label>
                           <label><span></span></label>
                         <label> 
                             <input type="checkbox"/>
                             <span>Rent</span> 
                         </label>
                       </p> 
                       </div>

                       <div class="row">
                           <h6> 3. Do you have your landlord's/strata's permission to have pets ?</h6>
                       <p>
                         <label>
                              <input type="checkbox" />
                                 <span> <p>Yes</p>      </span>
                         </label>
                           <label><span></span></label>
                         <label> 
                             <input type="checkbox"/>
                             <span> No</span> 
                         </label>
                       </p> 
                       </div>


                        <p> 4. On average, how many hours will your dog be alone on:</p>
                       <div class="row">
                             <div class="input-field col s6">
                               <input id="adult" type="text" class="validate"/>
                               <label for="adult"> weekend</label>
                           </div>
                           <div class="input-field col s6">
                               <input id="kids" type="text" class="validate"/>
                               <label for="kids"> weekdays</label>
                           </div>
                       </div>


                    </div>
                </div>

            </section>
            <button><NavLink to="/home"> Submit </NavLink>  </button>
            </>

         )
    }
   
}


export default AdoptionForm;