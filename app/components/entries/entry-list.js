import Ember from 'ember';
import KeyboardShortcuts from 'ember-keyboard-shortcuts/mixins/component';

export default Ember.Component.extend(KeyboardShortcuts, {
  scrollableElement: '.mdl-layout__content',

  didInsertElement: function() {
    var _this = this;
  	var onScroll = function(){
	    Ember.run.throttle(_this, _this.scrolled, 500);
  	};
  	Ember.$(this.scrollableElement).bind('touchmove', onScroll);
  	Ember.$(this.scrollableElement).bind('scroll', onScroll);
  },
  willRemoveElement: function() {
    Ember.$(this.scrollableElement).unbind('scroll');
  	Ember.$(this.scrollableElement).unbind('touchmove');
  },
  scrolled: function() {
    Ember.$(this.scrollableElement + ' div.box').each(function() {
      if (Ember.$(this).offset().top < 55) {
        Ember.$(this).addClass('read').trigger('click');
      }
    });
  },

  keyboardShortcuts: {
    n: function() {
      // Si no hay ningun post leido, marcamos como leido el primero y simulamos el click en el segundo
      let idx = 0;
      if (Ember.$(this.scrollableElement + ' div.box.read').length === 0) {
        idx = 1;
      }
      let box = Ember.$(this.scrollableElement + ' div.box:not(.read)')[idx];
      if (box != null) {
        Ember.$(box).trigger('click');
      } else {
        Ember.$(this.scrollableElement).scrollTop(9999999);
      }
      return false;
    }
  },

  actions: {
    markAsRead(entry) {
      this.sendAction('markAsRead', entry);
    },
    loadMore(entry) {
      this.sendAction('loadMore', entry);
    }
  }
});
