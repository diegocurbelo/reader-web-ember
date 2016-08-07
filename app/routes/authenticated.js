import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service('session'),

  redirect: function(model, transition) {
    if ('authenticated.index' === transition.targetName) {
      this.transitionTo('authenticated.feeds');
    }
	},

  actions: {
    logout: function() {
      this.get('session').invalidate();
    }
  }
});
