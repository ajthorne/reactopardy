import React from 'react';
import { hashHistory } from 'react-router';
// import { Link } from 'react-router';

const Nav = React.createClass({
  newGameHandler: function (evt) {
    hashHistory.push('/');
    console.log('Starting a new game...');
    //click handler for refreshing/rendering to new game
  },

  render: function () {
    return (
      <nav>
        <input type="button" value="New Game" onClick={this.newGameHandler}/>
        <h2>React-Pardy!</h2>
        <div className="score">Your score: </div>
      </nav>
    )
  }
});

//to add
// <img src='question-icon'/>

export default Nav;
