import {ADD_INGREDIENT,DELETE_INGREDIENT,SHOW_DETAILS,HIDE_DETAILS} from '../constants/action-types';
const initialState = {
    ingredients:[],
    dishes:[
        {
            id:1,
            name:'Eggs with bacon',
            time:10,
            ingredients:['egg','bacon'],
            description:['','','',],
            img:''
        },
        {
            id:2,
            name:'Rise with milk',
            time:20,
            ingredients:['milk','rise','',''],
            description:['','','',],
            img:''
        },
        {
            id:3,
            name:'Fried potato',
            time:10,
            ingredients:['potato','cheese','',''],
            description:['','','',],
            img:''
        }

    ]
};

const rootReducer = (state = initialState, action)=> {
    switch (action.type){
        case ADD_INGREDIENT: //do checking existed ingredient
                return { ...state, ingredients: state.ingredients.concat(action.payload)};
        case DELETE_INGREDIENT:
            let index = state.ingredients.find(function (obj){return obj.id===action.payload;}).id;
            return { ...state, ingredients: state.ingredients.filter(function (obj) {return obj.id!==index;})};

        default:
            return state;
    }
};
export default rootReducer;