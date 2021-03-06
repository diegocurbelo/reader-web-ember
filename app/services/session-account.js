import Ember from 'ember';

const { inject: { service }, RSVP } = Ember;

export default Ember.Service.extend({
  session: service('session'),
  store: service(),

  loadCurrentUser() {
    return new RSVP.Promise((resolve, reject) => {
      const account = {
        name: this.get('session.data.authenticated.account_name'),
        avatarUrl: this.get('session.data.authenticated.account_avatar')
      };
      // if (!Ember.isEmpty(accountId)) {
        // return this.get('store').find('account', accountId).then((account) => {
          this.set('account', account);
          resolve();
        // }, reject);
      // } else {
        // resolve();
      // }
    });
  }
});