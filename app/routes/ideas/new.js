import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function(model) {
      var _this = this;

      var user = this.get('session').get('currentUser');

      model.set('user', user);
      model.save().then(function() {
        _this.transitionTo('ideas');
      });

      return false;
    }
  },
  model() {
    return this.store.createRecord('idea');
  }
});
