import DS from 'ember-data';

export default DS.Model.extend({
  idea: DS.belongsTo('idea', { async: true }),
  user: DS.belongsTo('user', { async: true }),
  body: DS.attr('string', { async: true }),

  userName: function() {
    return this.get('user').get('name');
  }.property('user')
});
