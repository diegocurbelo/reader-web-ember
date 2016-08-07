import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  
  model: function() {
    return this.store.findAll('feed');
  },
 // setupController: function(controller, model) {
 //    this._super(controller, model);
 //    this.startRefreshing();
 //  },
 //  startRefreshing: function() {
 //    this.set('refreshing', true);
 //    Ember.run.later(this, this.refresh, 60 * 1000);
 //  },
 //  stopRefreshing: function() {
 //    this.set('refreshing', false);
 //  },
 //  refresh: function() {
 //  	console.log('> refresh ...');
 //    if (!this.get('refreshing')) {
 //      return;
 //    }
 //    this.store.findAll('feed');
 //    Ember.run.later(this, this.refresh, 60 * 1000);
 //  }
});
