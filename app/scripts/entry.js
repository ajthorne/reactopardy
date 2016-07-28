import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory, Route } from 'react-router';
import Nav from './components/Nav';
import Category from './components/Category';
import QuestionSingle from './components/QuestionSingle';
import Gameboard from './components/Gameboard';

const App = React.createClass({
  render: function () {
    return (
      <div className='main-content'>
        <Nav />
        <Gameboard />
        {this.props.children}
      </div>
    )
  }
});

const GameRouter = (
  <Router history={hashHistory}>
      <Route path="/" component={App}>
      </Route>
      <Route path="/question" component={QuestionSingle}/>
  </Router>
)


// future child of App
// <Route path="/" component={Gameboard}>

// future route for single question
// <Route path="/question/:id" component={QuestionSingle}/>

ReactDOM.render(GameRouter, document.querySelector('.container'));
