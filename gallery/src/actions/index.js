import {FETCH_BEGIN,FETCH_FAILURE,FETCH_SUCCESS,DECREMENT, INCREMENT} from "../constants/action-types";



export const increment = ()=>({type:INCREMENT});
export const decrement =  () =>({type:DECREMENT});
export const fetchUsersBegin = () => ({
    type: FETCH_BEGIN
});

export const fetchUsersSuccess = users => ({
    type: FETCH_SUCCESS,
    payload: { users }
});

export const fetchUsersError = error => ({
    type: FETCH_FAILURE,
    payload: { error }
});