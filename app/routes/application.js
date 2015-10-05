import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    signIn: function(provider) {
      var _this = this;

      this.get('session').authenticate('authenticator:torii-oauth2', {
        torii: this.get('torii'),
        provider: provider
      }, function(error) {
        alert('There was an error when trying to sign you in: ' + error);
      }).then(
        function() {
          _this.transitionTo('ideas');
        }
      );
    },
    signOut: function() {
      this.get("session").close();
    }
  }
});
