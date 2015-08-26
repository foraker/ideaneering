import DS from 'ember-data';

export default DS.Model.extend({
  idea: DS.belongsTo('idea'),
  user: DS.belongsTo('user'),
  body: DS.attr('string')
});
