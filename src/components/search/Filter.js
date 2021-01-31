import { render } from '@testing-library/react'
import React from 'react'

function Filter() {
    render()
    return (
        <>

    <h6 style={{margin:"10px"}}> Gender</h6>
        <div className="input-field col s12">
              <select class="browser-default"  id="accountType" >
                 <option value="user">Male </option>
                  <option value="animalShelter">Female</option>
              </select>
        </div>

        <h6 style={{margin:"10px"}}> Age</h6>
        <div className="input-field col s12">
              <select class="browser-default"  id="accountType" >
                 <option value="user"> Baby </option>
                  <option value="animalShelter">Adult </option>
                  <option value="animalShelter">Senior </option>
              </select>
        </div>
         
        <h6 style={{margin:"10px"}}> Species</h6>
        <div className="input-field col s12">
              <select class="browser-default"  id="accountType" >
                 <option value="user"> Dog </option>
                  <option value="animalShelter">Cat</option>
              </select>
        </div>

        <h6 style={{margin:"10px"}}> Size</h6>
        <div className="input-field col s12">
              <select class="browser-default"  id="accountType" >
                 <option value="user"> Small </option>
                  <option value="animalShelter">Medium</option>
                  <option value="animalShelter">Large</option>
              </select>
        </div>

        <h6 style={{margin:"10px"}}> Location</h6>
        <div className="input-field col s12">
              <select class="browser-default"  id="accountType" >
                 <option value="user"> Anywhere</option>
                  <option value="animalShelter">Canada</option>
                  <option value="animalShelter"> Close to me </option>
              </select>
        </div>
        

            
        </>
    )
}

export default Filter
