import Ember from 'ember';

export default Ember.Component.extend({
  comment: null,
  classNames: ['comment-form'],

  actions: {
    save: function() {
      this.sendAction('save', this.get('comment'));
    }
  },

  didInsertElement: function() {
    Ember.$('textarea').first().focus();
  }
});
