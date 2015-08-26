import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  createdAt: DS.attr('date', {
    defaultValue: function() {
      return new Date();
    }
  }),
  user: DS.belongsTo('user', { async: true }),
  votes: DS.hasMany('vote', { async: true }),
  comments: DS.hasMany('comment', { async: true }),

  score: function() {
    return this.get('votes').get('length');
  }.property('votes.@each'),

  commentCount: function() {
    return this.get('comments').get('length');
  }.property('comments.@each')
});
