import Ember from 'ember';
export default Ember.Route.extend({
  beforeModel: function() {
    this.get("session").fetch().catch(function() {});
  },
  actions: {
    signIn: function(provider) {
      var _this = this;
      this.get("session").open("firebase", { provider: provider }, { scope: 'email' }).then(function(data) {
        console.log(data);
        _this.transitionTo('ideas');
      });
    },
    signOut: function() {
      this.get("session").close();
    }
  }
});
