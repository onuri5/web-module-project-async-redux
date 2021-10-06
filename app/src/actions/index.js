import axios from 'axios';
import names from '../names.data';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getName = () => async dispatch => {
    dispatch(fetchStart());

    axios.get(`https://api.agify.io?name=${names[Math.floor(Math.random() * 2738)]}`)
        .then(res => {
            dispatch(fetchSuccess(res.data));
        })
        .catch(err => {
            dispatch(fetchFail(err));
        });
}

export const fetchStart = () => {
    return ({type: FETCH_START})
}

export const fetchSuccess = (obj) => {
    return ({type: FETCH_SUCCESS, payload: obj})
}

export const fetchFail = (error) => {
    return ({type: FETCH_FAIL, payload: error})
}