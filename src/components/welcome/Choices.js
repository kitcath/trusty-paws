import React from 'react';
import doggo from '../../images/doggo.png';
import treat from '../../images/treat.png';
import vet from '../../images/vet.png';
import {Link} from 'react-router-dom'

export default function Choices(){
    
    return(
      <>
      <div class="d-flex justify-content-around pt-5" >
        <div className="Dog">
            <img src={doggo} alt="Doggo" />
            <div class="d-flex justify-content-around mt-1" >
            </div>
        </div>

        <div className="Vet">
            <img src={vet} alt="Vet" />
            <div class="d-flex justify-content-around mt-1" >
            </div>
        </div>

        <div className="Treat">
            <img src={treat} alt="Treat" />
            <div class="d-flex justify-content-around mt-1" >
            </div>
        </div>
        
      </div>

      <div class="d-flex justify-content-around" >
        <p class="fw-bold">
          PETS
        </p>

        <p class="fw-bold">
          VETS
        </p>

        <p class="fw-bold">
          STORE
        </p>
      </div>

      <div class="d-flex justify-content-around p-3 mt-4">
        <p class="fw-bolder">Make A New Friend</p>

        <p class="fw-bolder">Find Nearby Clinics</p>

        <p class="fw-bolder">Treat Your Pet</p>
      </div>

      <div class="d-flex justify-content-around">
      <button className="btn"><Link to="/pets"> Adopt Now </Link>
      </button>

      <button className="btn"><Link to="/vets">View Now</Link>
      </button>

      <button className="btn"><Link to="/treats">Shop Now</Link>
      </button>
      </div>
      </>
    );
}
