
import Ember from 'ember';
import config from '../../config/environment';

export default Ember.Controller.extend({
  facebookUrl: 'https://www.facebook.com/dialog/oauth' +
  	'?client_id=' + config.APP.facebook.app_id + 
  	'&scope=' + config.APP.facebook.permissions + 
  	'&redirect_uri=' + config.APP.facebook.redirect_uri
});
