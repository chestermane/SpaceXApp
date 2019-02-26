
import * as actionTypes from '../actions/action-types';

const initialState = {
    loading: true,
    loaded: false
    
};

export default function(state = initialState, action) {
    switch(action.type){
        case actionTypes.LOAD_FLIGHT_DATA: return {...state, loading: false, loaded: true, flightData: action.payload}
        default: return state;
    }
    
}


