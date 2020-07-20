const { actionsTypes } = require("../constants/myLocation");

const INITIAL_STATE = {
    location:{
        latitude:-22.924883, 
        longitude:-43.177567, 
    }
}

const reducers = (state = INITIAL_STATE, action) => {
    switch(action.type) {
      
        case actionsTypes.LOCATION_CREATE:
            return{location: {...state.location,latitude: action.latitude, longitude: action.longitude}  }
            default:
                return state
            
    }
}

export { reducers }
