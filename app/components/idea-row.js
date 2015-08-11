import Ember from 'ember';

export default Ember.Component.extend({
  idea: null,
  classNames: ['idea jumbotron row'],

  actions: {
    voteUp: function() {
      this.sendAction('voteUp', this.get('idea'));
    }
  }
});
