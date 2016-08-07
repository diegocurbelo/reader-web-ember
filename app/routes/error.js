import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    switch(model.path) {
      case 'not_allowed':
        controller.set('errorCode',    403);
        controller.set('errorMessage', 'User not allowed');
        break;

      default:
        controller.set('errorCode',    404);
        controller.set('errorMessage', "The page doesn't exist");
    }
  }
});