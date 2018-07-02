import React, { Component } from 'react';
import './App.css';
import ArticlesList from './components/IngredientsList';
import Form from './components/Form';
import DishesList from './components/DishesList';

class App extends Component {
  render() {
    return (
        <div className={'flexBox'}>
            <div className={'LeftSection'}>
                <h1>Recipeer</h1>
                <h3>Just try!</h3>
            </div>
            <div className={'RightSection'}>
                <div className="">
                    <h1>Add new ingredient!</h1>
                    <Form />
                </div>
                <div className={'Ingredients'}>
                    <h2>Ingredients:</h2>
                    <ArticlesList />
                </div>
                <div className={'Dishes'}>
                    <DishesList />
                </div>
            </div>
        </div>
    );
  }
}

export default App;
