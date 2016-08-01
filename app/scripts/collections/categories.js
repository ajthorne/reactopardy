import React from 'react';
import Category from '../models/categorymodel';
import Backbone from 'backbone';
import $ from 'jquery';


const Categories = Backbone.Collection.extend({
  model: Category,
  url: 'http://jservice.io/api/categories?count=6',
  getCollection: function () {
    //make custom ajax function to fetch questions from the categories
    //this is because the categories url only houses the categories, not the clues that go with it
    //so I need to access them separately
    $.ajax({
      url: 'http://jservice.io/api/category?id=21',
      success: (response) => {
        this.add(response)
      }
    }),
    $.ajax({
      url: 'http://jservice.io/api/category?id=67',
      success: (response) => {
        this.add(response)
      }
    }),
    $.ajax({
      url: 'http://jservice.io/api/category?id=309',
      success: (response) => {
        this.add(response)
      }
    }),
    $.ajax({
      url: 'http://jservice.io/api/category?id=50',
      success: (response) => {
        this.add(response)
      }
    }),
    $.ajax({
      url: 'http://jservice.io/api/category?id=17',
      success: (response) => {
        this.add(response)
      }
    }),
    $.ajax({
      url: 'http://jservice.io/api/category?id=770',
      success: (response) => {
        this.add(response)
      }
    })
  }
});

export default Categories;
