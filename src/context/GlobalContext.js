import React, { createContext, useReducer, useEffect} from 'react';
import AppReducer from "./AppReducer";

//initial state 
const initialState = {
   favouriteList: [],
}

//create context 
export const GlobalContext = createContext(initialState);

//Global Provider: access initial state for all components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer( AppReducer, initialState);

/*will save nominees concurrently
    useEffect (() => {
       window.localStorage.setItem("nominationList", JSON.stringify(state.nominationList));
    }, [state])
*/

    //actions: when adding to nominate button
    const addPetToFavouriteList = pet =>{
        dispatch({type: "ADD_MOVIE_TO_FAVOURITELIST", payload: pet});
    }

    //to remove movies
    const removePetFromFavouriteList = (pet) => {
        dispatch({type: "REMOVE_MOVIE_FROM_NOMINATIONLIST", payload:pet});
    }

    return (
        <GlobalContext.Provider value={{
            favouriteList: state.favouriteList,
            addPetToFavouriteList,
            removePetFromFavouriteList,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )


}