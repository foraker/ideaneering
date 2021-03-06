import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  image: DS.attr('string'),
  ideas: DS.hasMany('idea', { async: true }),
  votes: DS.hasMany('vote', { async: true })
});
