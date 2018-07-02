import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addIngredient } from "../actions/index";

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: ingredient => dispatch(addIngredient(ingredient))
    };
};
class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        if(title!==''){
            this.props.addIngredient({ title, id });
            this.setState({ title: "" });
        }
    }
    render() {
        const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                {/*<button type="submit" className="btn">*/}
                    {/*SAVE*/}
                {/*</button>*/}
            </form>
        );
    }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;