//container for single questions

import React from 'react';
import { hashHistory } from 'react-router';
import Question from './Question';


const Category = React.createClass({
  render: function () {
    return (
      <div className="individual-category">
        <h3>{this.props.title}</h3>
        <ul>
            <Question cid={this.props.cid} qindex={0} value={200}/>
            <Question cid={this.props.cid} qindex={1} value={400}/>
            <Question cid={this.props.cid} qindex={2} value={600}/>
            <Question cid={this.props.cid} qindex={3} value={800}/>
            <Question cid={this.props.cid} qindex={4} value={1000}/>
          </ul>
      </div>
    )
  }
});

export default Category;
