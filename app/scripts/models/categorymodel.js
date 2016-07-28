import Backbone from 'backbone';

const CategoryModel = Backbone.Model.extend({
    urlRoot: 'http://jservice.io/api/categories?count=6',

    defaults: {
      id: '',
      title: ''
    }

});

export default CategoryModel;
