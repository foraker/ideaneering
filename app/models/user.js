import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  image: DS.attr('string'),
  googleId: DS.attr('string'),
  ideas: DS.hasMany('idea')
});