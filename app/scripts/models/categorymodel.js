import Backbone from 'backbone';

const CategoryModel = Backbone.Model.extend({
    urlRoot: 'https://jservice.io/api/categories?count=6',

    defaults: {
      id: '',
      title: ''
    },
    // userViewed: function (question) {
    //   // if ()
    // }

});

export default CategoryModel;
