import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user', { async: false }),
  idea: DS.belongsTo('idea', { async: false })
});
