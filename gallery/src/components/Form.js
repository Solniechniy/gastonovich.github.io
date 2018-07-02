import React, { Component } from "react";
import { connect } from "react-redux";
import { increment,decrement } from "../actions/index";
import {fetchUsers} from "../actions/fetching";

const mapStateToProps = state =>({
    users:state.users.users,
    loading:state.users.loading,
    error:state.users.error,
    count:state.count
});

const mapDispatchToProps = dispatch => {
    return {
        increment:()=>dispatch(increment()),
        decrement:()=>dispatch(decrement()),
        fetchUsers:(count)=>dispatch(fetchUsers(count))
    };
};

class ConnectedForm extends Component {
    constructor() {
        super();
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }
    componentDidMount(){
        let {count} = this.props;
        this.props.fetchUsers(count);
    }
    onIncrement(){
        this.props.increment();
        let {count} = this.props;
        this.props.fetchUsers(count+1);
    }
    onDecrement(){
        this.props.decrement();
        let {count} = this.props;
        this.props.fetchUsers(count-1);
    }

    render() {
        return (
            <div>
                <button onClick={this.onDecrement}>-</button>
                <button onClick={this.onIncrement}>+</button>
            </div>
        );
    }
}
const Form = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);
export default Form;