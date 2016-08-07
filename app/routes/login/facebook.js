import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
// import Configuration from 'ember-simple-auth/configuration';

const { service } = Ember.inject;

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  session: service('session'),

  beforeModel: function(transition) {
    var _this = this;
    this.get('session').authenticate('authenticator:custom', transition.queryParams.code).then(function(data) {

    }, function(response) {
      if (response.error === 'not_authorized' || response.status === 401) {
        _this.replaceWith('login');

      } else if (response.error === 'not_allowed' || response.status === 403) {
        _this.replaceWith('error', 'not_allowed');
        
      } else {
        _this.replaceWith('error', 'unknown');
      }
    });
  },
  renderTemplate: function() {
    this.render('loading');
  }
});
