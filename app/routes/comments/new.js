import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function(model) {
      var _this = this;

      var user = this.get('session').get('currentUser');

      model.set('user', user);
      model.set('idea', this.get('idea'));

      _this.get('idea').save().then(function() {
        _this.transitionTo('ideas');
      });

      return false;
    }
  },
  model() {
    return this.store.createRecord('comment');
  },
  afterModel () {
    this.set('idea', this.modelFor('idea'));
  },
});
