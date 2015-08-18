import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    voteUp: function(idea) {
      var user = this.get('session').get('currentUser');

      var vote = this.store.createRecord('vote');
      vote.set('user', user);
      vote.set('idea', idea);

      vote.save().then(function() {
        user.save();
        idea.save();
      });

      return false;
    }
  },

  model() {
    return this.store.findAll('idea').then(function(ideas) {
      return Ember.Object.extend({
        sortedIdeas: Ember.computed.sort('model', 'props'),
        props: ['createdAt:desc']
      }).create({ model: ideas });
    });
  }
});
