import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('loading');
  this.route('login', function() {
    this.route('facebook');
  });

  this.route('authenticated', { path: '/' }, function() {
    this.route('profile', { path: '/me' });
    this.route('settings');
    this.route('feeds', function() {
      this.route('manage', function() {
        this.route('add');  
      });
      this.route('show', { path: ':feed_id' });
    });
  });

  this.route('error', { path: '/*path' });
});

export default Router;
