import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('ideas', function() {
    this.route('new');
  });

  this.resource('idea', { path: '/idea/:idea_id' }, function() {
    this.route('edit');

    this.resource('comments', function() {
      this.route('new');
    });
  });
});

export default Router;
