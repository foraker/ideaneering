import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  currentUser: function() {
    return this.get('session').get('currentUser');
  }.property('session')
});
