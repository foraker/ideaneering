import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['panel', 'panel-default', 'comments'],

  actions: {
    toggleVote: function() {
      if (this.get('hasVoted')) {
        this.sendAction('removeVote', this.get('idea'));
      } else {
        this.sendAction('voteUp', this.get('idea'));
      }
    },
    deleteComment: function(comment) {
      this.sendAction('deleteComment', comment);
    }
  },
});
