import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
    let arr=[];
    for(let k=0;k<state.dishes.length;k++){
        let flag=null;
        for(let p=0;p<state.ingredients.length;p++){
            if(state.dishes[k].ingredients.includes(state.ingredients[p].title)){
                flag=true;
            }
            else {
                console.log('else');
                flag=false;
                break;
            }
        }
        if(flag){
            arr.push(state.dishes[k]);
        }
    }
    return {
        dishes: arr
    };
};
const ConnectedList = ({ dishes}) => (
    <ul className="">
        {dishes.map(el => (
            <li className="" key={el.id}>
                <div className={'dishesItem'}>
                    <img src={''} />
                    <div>
                        <h2>{el.name}</h2>
                        <h3>Time to cook: {el.time}</h3>
                        <h3>You need:</h3>
                        <ul>
                            {
                                el.ingredients.map(ing=>(
                                    <li key={el.ingredients.indexOf(ing)}>
                                        {ing}
                                    </li>
                                )
                                )
                            }
                        </ul>
                    </div>
                </div>
            </li>

        ))}
    </ul>
);
const DishesList = connect(mapStateToProps)(ConnectedList);
export default DishesList;