import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function(model) {
      var _this = this;
      model.save().then(function() {
        _this.transitionTo('ideas');
      });
      return false;
    }
  },
  model: function() {
    return this.store.createRecord('idea', {
      user: this.get('session').get('currentUser')
    });
  }
});
