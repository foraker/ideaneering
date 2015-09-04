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
    },

    removeVote: function(idea) {
      var user = this.get('session').get('currentUser');

      idea.get('votes').filter(function(vote) {
        return vote.get('user') == user;
      })[0].destroyRecord();

      return false;
    },

    deleteIdea: function(idea) {
      idea.destroyRecord();

      return false;
    },

    deleteComment: function(comment) {
      console.log("deleteComment: ", comment);
      comment.destroyRecord();

      return false;
    },

    editIdea: function(idea) {
      this.transitionTo('ideas/edit', idea);

      return false;
    }
  },

  model() {
    return this.store.findAll('idea').then(function(ideas) {
      return Ember.Object.extend({
        sortedIdeas: Ember.computed.sort('model', 'props'),
        props: ['score:desc', 'createdAt:desc']
      }).create({ model: ideas });
    });
  }
});
