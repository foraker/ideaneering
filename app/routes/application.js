import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    this.get("session").fetch().catch(function() {});
  },
  actions: {
    signIn: function(provider) {
      var _this = this;
      this.get("session").open("firebase", { provider: provider }).then(
        function(data) {
          var user = _this.store.find('user', { googleId: data.currentUser.id });
          if (!user.any()) {
            var userData = data.currentUser;

            _this.store.createRecord('user', {
              googleId: userData.id,
              name:     userData.displayName,
              image:    userData.profileImageURL
            }).save();
          }
          _this.transitionTo('ideas');
        }
      );
    },
    signOut: function() {
      this.get("session").close();
    }
  }
});
