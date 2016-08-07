import Ember from 'ember';

export default Ember.Component.extend({
  entry: null, // passed-in

  actions: {
    click: function(entry) {
      var elem = this.$();
      if (elem.offset().top > 55) {
        Ember.run.schedule('afterRender', function(){
          Ember.$('.mdl-layout__content').scrollTop(Ember.$('.mdl-layout__content').scrollTop() + elem.offset().top - 50);
        });
      }
      this.sendAction('markAsRead', entry);
    },
    openExternalLink: function(entry) {
      window.open(entry.url);
      return true;
    },
    markAsRead: function(entry) {
      this.sendAction('markAsRead', entry);
    }
  }
});
