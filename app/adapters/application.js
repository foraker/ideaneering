import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:3000',

  // Hush deprecation warning.
  shouldReloadAll() { return true; }
});