import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function(model) {
      var _this = this;

      var user = this.get('session').get('currentUser');

      this.store.findRecord('user', user.id).then(function(user) {
        model.set('user', user);
        model.save().then(function() {
          _this.transitionTo('ideas');
        });
      });

      return false;
    }
  },
  model: function() {
    return this.store.createRecord('idea');
  }
});
