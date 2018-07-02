import React , { Component } from "react";
import { connect } from "react-redux";
import DeleteBtn from "../components/DeleteIngradient";
const mapStateToProps = state => {
    return { ingredients: state.ingredients };
};

class ConnectedList extends Component{
    render(){
        return(
            <ul>
                {this.props.ingredients.map(el => (
                    <li key={el.id}>
                        {el.title}
                        <DeleteBtn value={el.id} />
                    </li>
                ))}
            </ul>
        )
    }

}

const List = connect(mapStateToProps)(ConnectedList);
export default List;