import Ember from 'ember';

export default Ember.Component.extend({
  comment: null,

  actions: {
    deleteComment: function() {
      if (confirm("Are you sure you want to delete this comment?")) {
        this.sendAction('deleteComment', this.get('comment'));
      }
    }
  }
});
