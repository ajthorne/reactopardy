import React from 'react';
import Category from '../models/categorymodel';
import Backbone from 'backbone';


const Categories = Backbone.Collection.extend({
  model: Category,
  url: 'http://jservice.io/api/categories?count=6'
});

export default Categories;
