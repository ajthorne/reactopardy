//holder for question click handler and li's

import { hashHistory } from 'react-router';
import React from 'react';
import CategoryModel from '../models/categorymodel';
import store from '../store';

const Question = React.createClass({
  questionHandler: function () {
    hashHistory.push(`/question/${this.props.cid}/${this.props.qindex}`)
    //cid is pulled from the id of the category
    //qindex is the question index

    // console.log(this.props.clues);
    store.categoriesCollection.get(this.props.cid).get('clues')[this.props.qindex].userViewed = true;
    //setting userViewed to true

    store.categoriesCollection.trigger('change');
    console.log(store.categoriesCollection.get(this.props.cid).get('clues')[this.props.qindex].userViewed);
  },

  render: function () {
    let viewArea;
    let viewed = store.categoriesCollection.get(this.props.cid).get('clues')[this.props.qindex].userViewed;

    if (viewed) {
      viewArea = <li></li>
  } else {
    viewArea = <li onClick={this.questionHandler}>{this.props.value}</li>
    //value is defined in the category
  }

    return (
      <div>
      {viewArea}
      </div>
    )
  }
})
export default Question;
