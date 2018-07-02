import React from "react";
import { connect } from "react-redux";


const mapStateToProps = state => {
    return {
        users:state.users,
        count:state.count,
        loading:state.loading
    };
};
const ConnectedList = ({ users,count,loading }) => (
    <div className={'cards'}>
        {!loading ?
            <ul>
                {users.map(el => (
                    <li key={el.id}>
                        <h3>{el.name}</h3>
                        <h4>{el.surname}</h4>
                        <p>{el.desc}</p>
                    </li>
                ))}
            </ul>:
            <div className={'loading'}><img src={require("../img/loading_icon-06-512.png")} /></div>
        }
        <p>{count}</p>
    </div>
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;