//holder for question click handler and li's

import { hashHistory } from 'react-router';
import React from 'react';

const Question = React.createClass({
  questionHandler: function () {
    hashHistory.push(`/question/${this.props.cid}/${this.props.qindex}`)
    //cid is pulled from the id of the category
    //qindex is the question index

  },

  render: function () {
    return (
      <li onClick={this.questionHandler}>{this.props.value}</li>
      //value is defined in the category
    )
  }
})
export default Question;
