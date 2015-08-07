import Ember from 'ember';
import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';

export default ToriiFirebaseAdapter.extend({
  firebase: Ember.inject.service(),

  open(authentication) {
    return new Ember.RSVP.Promise((resolve) => {
      return this.store.find("user", authentication.uid).then(function(user) {
        Ember.run.bind(null, resolve({currentUser: user}));
      }, () => {
        let newUser = this.store.createRecord("user", {
          id:    authentication.uid,
          name:  authentication.google.displayName,
          image: authentication.google.profileImageURL
        });

        newUser.save().then(function(user) {
          Ember.run.bind(null, resolve({currentUser: user}));
        });
      });
    });
  }
});
