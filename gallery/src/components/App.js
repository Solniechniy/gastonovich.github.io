import React from "react";
import List from "../components/List";
import Form from "../components/Form";
import './App.css';

const App = () => (
    <div>
        <div className={'title'}>
            <h2>Users</h2>
            <List />
        </div>
        <div className={'controls'}>
            <Form />
        </div>
    </div>
);
export default App;