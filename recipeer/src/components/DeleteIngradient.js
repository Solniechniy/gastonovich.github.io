import React from "react";
import { connect } from "react-redux";
import {deleteIngredient} from "../actions";

let RemoveButton = ({value, dispatch}) => {
    return (
        <a
           onClick={() => {
               dispatch(deleteIngredient(value));
           }}>&#10005;
        </a>
    )
};
RemoveButton = connect()(RemoveButton);
export default RemoveButton;