// Ctrl or Cmd+enter to submit
//
// https://medium.com/the-ember-way/submit-an-ember-textarea-with-command-or-ctrl-enter-a933b4325b3b
export default Ember.TextArea.reopen({
  keyDown: function(event) {
    if (this._isValidCombination(event)) {
      this.sendAction('modifiedSubmit');
    }
  },
  _hasCorrectModifier: function(event) {
    return event.ctrlKey || event.metaKey;
  },
  _isCorrectKeyCode: function(keyCode) {
    return keyCode === 13;
  },
  _isValidCombination: function(event) {
    return this._hasCorrectModifier(event) && this._isCorrectKeyCode(event.keyCode);
  }
});
