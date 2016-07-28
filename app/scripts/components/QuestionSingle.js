import React from 'react';
import { hashHistory } from 'react-router';


const QuestionSingle = React.createClass({
  getInitialState: function () {
    return { userAnswered: false }
  },

  submitAnswer: function () {
    this.setState({userAnswered: true});
    console.log(this.refs.answer.value);
    console.log('You submitted an answer!');
  },

  render: function () {
    let answerArea;

    if (this.state.userAnswered) {
      answerArea = <p>Wranglers</p>
    } else {
      answerArea = (<div>
      <input type="text" placeholder="Enter your answer" ref="answer"/>
      <input className="submitAnswer" onClick={this.submitAnswer} type="submit" value="Submit"/>
      </div>)
    }

    return (
      <form>
          <li>In the Old West they were in charge of horses, on a movie set in charge of chickens</li>
          {answerArea}
      </form>
    )
  }
});

export default QuestionSingle;

//to add --
//if correct/match --color: green, console.log('correct!')
//else --color: red, console.log('wrong!')
