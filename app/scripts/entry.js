import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import Nav from './components/Nav';
import Category from './components/Category';
import QuestionSingle from './components/QuestionSingle';
import Gameboard from './components/Gameboard';

const App = React.createClass({
  render: function () {
    return (
      <div className='main-content'>
        <Nav />
        {this.props.children}
      </div>
    )
  }
});

const GameRouter = (
  <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Gameboard}/>
        <Route path="/question/:cid/:qindex" component={QuestionSingle}/>
      </Route>
  </Router>
)

ReactDOM.render(GameRouter, document.querySelector('.container'));
