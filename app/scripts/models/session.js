import Backbone from 'backbone';

const Session = Backbone.Model.extend({
  defaults: {
    score: 0
  }
});

export default Session;
