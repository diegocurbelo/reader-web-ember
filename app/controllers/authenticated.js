import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
	sessionAccount: service('session-account'),

	activeFeed: null // Loaded from routes/authenticated/feeds/show
});