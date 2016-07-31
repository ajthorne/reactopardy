import React from 'react';
import { hashHistory } from 'react-router';
import store from '../store';

const QuestionSingle = React.createClass({
  getInitialState: function () {
    return { userAnswered: false,
             userCorrect: null,
            //  answer: store.categoriesCollection.get(this.props.params.cid).get('clues')[this.props.params.qindex].answer
           }
  },
  // componentWillReceiveProps: function(nextProps) {
  //  compare this.props to nextProps
  // },

  backGameHandler: function (evt) {
    hashHistory.push('/');
    console.log('Back to Gameboard');
  },

  submitAnswer: function () {
    this.setState({userAnswered: true});
    console.log('Your answer:', this.refs.answer.value);
    // console.log('You submitted an answer!');

    let answer = store.categoriesCollection.get(this.props.params.cid).get('clues')[this.props.params.qindex].answer;
    let value = (store.categoriesCollection.get(this.props.params.cid).get('clues')[this.props.params.qindex].value) * 2;
    let startValue = store.session.get('score')
    let points;

    if (this.refs.answer.value === answer) {
      this.setState({userCorrect: true});
      // console.log(this.state);
      console.log('CORRECT, YOU GOT IT!');
      points = Number(startValue += value)
      store.session.set('score', points)
      console.log('Your points', points);


    } else {
      this.setState({userCorrect: false});
      console.log('WRONG, YOU MISSED IT!');
      points = Number(startValue -= value)
      store.session.set('score', points)
      console.log('Your points', points);
    }
  },

  render: function () {
    console.log(this.state);
    let answerArea;
    let question = store.categoriesCollection.get(this.props.params.cid).get('clues')[this.props.params.qindex].question;
    let answer = store.categoriesCollection.get(this.props.params.cid).get('clues')[this.props.params.qindex].answer;
    let value = (store.categoriesCollection.get(this.props.params.cid).get('clues')[this.props.params.qindex].value) * 2;
    let color = this.state.userCorrect ? '#30D432' : 'red';
    //shorthand for if/else statement

    console.log(question);
    console.log(answer);
    // console.log(this.state.userCorrect);

    if (this.state.userAnswered) {
      answerArea = <p className="show-answer" style={{color: color}}>{answer}</p>
    } else {
      answerArea = (<div className="answer-container">
      <input className="answer-input" type="text" placeholder="Enter your answer" ref="answer"/>
      <input className="submitAnswer" onClick={this.submitAnswer} type="submit" value="Submit"/>
      </div>)
    }

    return (
      <div>
        <form className="question-container">
            <span className="point-value">Points: {value}</span>
            <h2>{question}</h2>
            {answerArea}
        </form>
        <div className="back-input-holder">
          <input className="back-input" type="button" value="Back to Game" onClick={this.backGameHandler}/>
        </div>
      </div>
    )
  }
});

export default QuestionSingle;

// <i className="fa fa-arrow-circle-left"></i>
