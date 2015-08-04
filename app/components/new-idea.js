import Ember from 'ember';

export default Ember.Component.extend({
  idea: null,
  classNames: ['idea-form'],

  actions: {
    save: function() {
      this.sendAction('save', this.get('idea'));
    }
  },

  didInsertElement: function() {
    Ember.$('input').first().focus();
  }
});
