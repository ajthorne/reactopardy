//parent to category components
//map over data to return array of categories and questions
//container for categories and questions

import React from 'react';
import Category from './Category';
import store from '../store';

const Gameboard = React.createClass({
    getInitialState: function() {
        return {
            categoriesCollection: store.categoriesCollection.toJSON()
        }
    },

    componentDidMount: function() {
        store.categoriesCollection.getCollection();
        //custom function to send ajax requests/'get' data
        store.categoriesCollection.on('update change', () => {
            this.setState({
                categoriesCollection: store.categoriesCollection.toJSON()
            });
        })
    },
    render: function() {
        let categories = this.state.categoriesCollection.map((category, i, arr) => {
          let index = i
            // console.log(category.title);
            // console.log(category);
            // console.log(category.id);
            return (
                <Category key={i} clues={category.clues[index]} cid={category.id} title={category.title}/>
            );
        })
        return (
          <div className="category-container">
            {categories}
          </div>
        )
    }
});

export default Gameboard;
