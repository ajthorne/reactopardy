import React from 'react';
import { hashHistory } from 'react-router';
import store from '../store';

const Nav = React.createClass({
  getInitialState: function() {
    // console.log(store.session.get('score'));
      return {
          session: store.session.toJSON()
      }
  },

  componentDidMount: function() {
      store.session.get();
      store.session.on('update change', () => {
          this.setState({
              session: store.session.toJSON()
          });
      })
  },

  // newGameHandler: function (evt) {
  //   hashHistory.push('/');
  //   this.setState(getInitialState());
  //   store.session.set('score', 0);
  //   console.log('Starting a new game...');
  //   // click handler for refreshing/rendering to new game
  //   // setting score back to default 0. is there a better way to do this?
  //   // not working -- reset the state?
  // },

  render: function () {
    return (
      <nav>
        <div className="score">Your score: {store.session.get('score')}</div>
        <h2>React-Pardy!</h2>
      </nav>
    )
  }
});

//to add
// <input type="button" value="New Game" onClick={this.newGameHandler}/>


export default Nav;
