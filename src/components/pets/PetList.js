import React, {useContext} from 'react';
import '../../css/PetList.css';
import {BiHeartCircle} from 'react-icons/bi';
import { GlobalContext } from '../../context/GlobalContext';
import {NavLink} from 'react-router-dom';

export const PetList = ({pets}) => {
    const {
        addPetToFavouriteList,
        favouriteList,
    } = useContext(GlobalContext)


    const checkExist = (aPet) => {
        let isDisabled = favouriteList.find(o => o.imdbID === aPet.imdbID);
        const storedPet = isDisabled ? true : false;
        return storedPet;
    }

    if (! pets || pets.length === 0){
        return (
            <div>
            </div>
        );  
    }else{
        return pets.map(aPet =>{
            const checkPet= checkExist (aPet); 
            return(
                <div className="image-container" key={aPet.imdbID}>
                    <div className="card">
                        <div className="image">
                            <img src={aPet.Poster}   alt="poster" style={{width: "300px", height:"400px"}}/>
                            <h6 className="title"> {aPet.Title}, <i> {aPet.Year} </i> </h6>
                        </div>
                        <div className="overlay">
                              <button 
                              className="btn-adoption"
                              > 
                              <NavLink to="/AdoptionRequest">
                                Request Adoption  
                              </NavLink>
                              
                               </button>

                               <button 
                              className="btn-add"
                              disabled = {checkPet}
                              onClick = {() => addPetToFavouriteList}
                              > <BiHeartCircle size={32}/>
                               </button>
                        </div>   
                    </div>
                  
                </div>
            )
            
        })
    }
}
