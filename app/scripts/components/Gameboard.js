//parent to category components

//map over data to return array of categories and questions
//container for single questions

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
        store.categoriesCollection.fetch();
        store.categoriesCollection.on('update change', () => {
            this.setState({
                categoriesCollection: store.categoriesCollection.toJSON()
            });
        })
    },
    render: function() {
        let categories = this.state.categoriesCollection.map((category, i, arr) => {
            console.log(category.title);
            // console.log(category);
            return (
                <Category key={i} index={i} title={category.title}/>
            );
        })
        return (
          <div>
            {categories}
          </div>
        )
    }
});

export default Gameboard;
