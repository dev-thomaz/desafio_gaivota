const { actionsTypes } = require("../constants/locations");

const INITIAL_STATE = {
    locations:[]
}

const reducers = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionsTypes.LOCATION_DELETE:
            return {...state }
        case actionsTypes.LOCATION_CREATE:
            return {...state,  locations: [...state.locations, action.location] }
            default:
                return state
            
    }
}

export { reducers }