import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: function() {
    return this.get('session').get('currentUser');
  }.property('session')
});
