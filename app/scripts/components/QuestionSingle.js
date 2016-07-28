import React from 'react';
import { hashHistory } from 'react-router';
import store from '../store';

const QuestionSingle = React.createClass({
  getInitialState: function () {
    return { userAnswered: false }
  },

  submitAnswer: function () {
    this.setState({userAnswered: true});
    console.log(this.refs.answer.value);
    console.log('You submitted an answer!');

    let answer = store.categoriesCollection.get(this.props.params.cid).get('clues')[this.props.params.qindex].answer;

    if (this.refs.answer.value === answer) {
      console.log('CORRECT, YOU GOT IT!');
    } else {
      console.log('WRONG, YOU MISSED IT!');
    }
  },

  render: function () {
    let answerArea;
    let question = store.categoriesCollection.get(this.props.params.cid).get('clues')[this.props.params.qindex].question;
    let answer = store.categoriesCollection.get(this.props.params.cid).get('clues')[this.props.params.qindex].answer;
    let value = (store.categoriesCollection.get(this.props.params.cid).get('clues')[this.props.params.qindex].value) * 2;

    console.log(question);
    console.log(answer);

    if (this.state.userAnswered) {
      answerArea = <p>{answer}</p>
    } else {
      answerArea = (<div>
      <input type="text" placeholder="Enter your answer" ref="answer"/>
      <input className="submitAnswer" onClick={this.submitAnswer} type="submit" value="Submit"/>
      </div>)
    }

    return (
      <form>
          <h2>{question}</h2>
          <span>Points: {value}</span>
          {answerArea}
      </form>
    )
  }
});

export default QuestionSingle;

//to add --
//if correct/match --color: green, console.log('correct!')
//else --color: red, console.log('wrong!')
