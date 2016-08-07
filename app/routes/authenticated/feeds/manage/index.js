import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  feed: null,

  model: function(param) {
    var parentController = this.controllerFor('authenticated');
    parentController.set('title', 'Manage subscriptions');
    parentController.set('activeFeed', null);

    return this.store.findAll('feed');
  },

  actions: {
    edit: function(data) {
      console.log('Edit ' + data.feed_id.value);
    },
    remove: function(data) {
      console.log('Remove ' + data.feed_id.value);
    },
    addFeed: function() {
      this.transitionTo('authenticated.feeds.manage.add');
    }
  }

});
