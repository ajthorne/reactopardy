//container for single questions

import React from 'react';
import { hashHistory } from 'react-router';
import Question from './Question';


const Category = React.createClass({
  render: function () {
    // console.log(this.props.clues);
    return (
      <div className="individual-category">
        <h3>{this.props.title}</h3>
        <ul>
            <Question cid={this.props.cid} viewed={this.props.clues[0]} qindex={0} value={200}/>
            <Question cid={this.props.cid} viewed={this.props.clues[1]} qindex={1} value={400}/>
            <Question cid={this.props.cid} viewed={this.props.clues[2]} qindex={2} value={600}/>
            <Question cid={this.props.cid} viewed={this.props.clues[3]} qindex={3} value={800}/>
            <Question cid={this.props.cid} viewed={this.props.clues[4]} qindex={4} value={1000}/>
        </ul>
      </div>
    )
  }
});

// <Question cid={this.props.cid} viewed={this.props.clues[0].userViewed} qindex={0} value={200}/>

export default Category;
