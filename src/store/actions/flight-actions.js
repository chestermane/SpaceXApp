import axios from 'axios';
import * as actionTypes from './action-types';


export const setFlightData = (flightData) => {
    return {
        type: actionTypes.LOAD_FLIGHT_DATA,
        payload: flightData
    }
}

export const loadFlightData = () => {
    return dispatch => {
        axios.get('https://api.spacexdata.com/v3/launches').then( response => {
            dispatch(setFlightData(response.data));
        }).catch(error => {
            console.log(error);
        })

    }
}