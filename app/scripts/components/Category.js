//map over data to return array of categories and questions
//container for single questions

import React from 'react';
import { hashHistory } from 'react-router';


const Category = React.createClass({
  questionHandler: function () {
    hashHistory.push('/question')
    // hashHistory.push(`/question/${this.props.index}`)
  },
  render: function () {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ul>
            <li onClick={this.questionHandler}>$200</li>
            <li onClick={this.questionHandler}>$400</li>
            <li onClick={this.questionHandler}>$600</li>
            <li onClick={this.questionHandler}>$800</li>
            <li onClick={this.questionHandler}>$1000</li>
          </ul>
      </div>
    )
  }
});

export default Category;
