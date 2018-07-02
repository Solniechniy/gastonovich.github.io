import {FETCH_BEGIN,FETCH_FAILURE,FETCH_SUCCESS,DECREMENT,INCREMENT} from "../constants/action-types";
const initialState={
    users:[],
    loading:false,
    error:null,
    count:1
};

const rootReducer = (state=initialState, action)=>{
    switch (action.type){
        case INCREMENT:
            if(state.count<4) {
                return {...state, count: state.count + 1};
            }
            else{
                return state;
            }
        case DECREMENT:
            if(state.count>1) {
                return {...state, count: state.count - 1};
            }
            else {
                return state;
            }
        case FETCH_BEGIN:
            return{
                ...state,
                loading:true,
                error:null
            };
        case FETCH_SUCCESS:
            return{
                ...state,
                loading:false,
                users:action.payload.users
            };
        case FETCH_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload.error,
                users:[]
            };
        default:
            return state;
    }
};

export default rootReducer;