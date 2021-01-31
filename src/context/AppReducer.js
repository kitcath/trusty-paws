//the app reducer

export default (state, action ) =>{
    switch(action.type){
        case "ADD_PET_TO_FAVOURITELIST":
            return {
                ...state,
                nominationList:[action.payload, ...state.nominationList],
                };
        default:
            return state;
    }
}