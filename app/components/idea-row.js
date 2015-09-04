import Ember from 'ember';

export default Ember.Component.extend({
  idea: null,
  currentUser: null,
  classNames: ['idea jumbotron row'],
  classNameBindings: ['hasVoted'],

  actions: {
    toggleVote: function() {
      if (this.get('hasVoted')) {
        this.sendAction('removeVote', this.get('idea'));
      } else {
        this.sendAction('voteUp', this.get('idea'));
      }
    },
    deleteIdea: function() {
      if (confirm("Are you sure you want to delete this idea?")) {
        this.sendAction('deleteIdea', this.get('idea'));
      }
    },
    deleteComment: function(comment) {
      this.sendAction('deleteComment', comment);
    },
  },

  hasVoted: function() {
    var _this = this;
    return !!this.get('idea').get('votes').filter(function(vote) {
      return vote.get('user') === _this.get('currentUser');
    }).get('length');
  }.property('currentUser.votes.@each')
});
