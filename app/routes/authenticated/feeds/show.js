import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  feed: null,

  model: function(param) {
    this.feed = this.store.peekRecord('feed', param.feed_id);

    var parentController = this.controllerFor('authenticated');
    parentController.set('title', this.feed.get('title'));
    parentController.set('activeFeed', this.feed);

    var controller = this.controllerFor('authenticated.feeds.show');
    controller.set('feed', this.feed);
    controller.set('entries', undefined);
    var _this = this;
    this.store.peekAll('entry').filterBy('read', true).forEach(function(item){
      _this.store.unloadRecord(item);
    });
    this.loadData();
  },

  loadData: function() {
    let controller = this.controllerFor('authenticated.feeds.show');

    let data = {};
    if (controller.get('entries') !== undefined) {
      let lastLoadedEntry = controller.get('entries').get('lastObject');
      data['offset'] = lastLoadedEntry.id;
    }
    data['limit'] = 10;

    $.ajax({
      method: 'GET',
      url: 'api/feeds/' + this.feed.id + '/entries',
      headers: { "Authorization": "Bearer " +  this.get('session.data.authenticated.access_token') },
      data: data
    }).then((entries) => {
      this.store.pushPayload(entries);
      controller.set('entries', this.store.peekAll('entry').filterBy('feed_id', this.feed.id));
    });
  },

  actions: {
    willTransition: function(transition) {
      this._super();
      Ember.run.schedule('afterRender', function(){
        Ember.$('.mdl-layout__content').scrollTop(0);
      });
    },
    loadMore: function() {
      this.loadData();
    },
    markAsRead: function(entry) {
		  if (entry.get('read')) {
        return false;
      }
      entry.set('read', true);
      if (entry.get('hasDirtyAttributes') && !entry.get('isSaving')) {
        var _this = this;
        Ember.run.once(this, function() {
          entry.save().then(function() {
            // si no funciono deberia desmarcarlo como leido y no decrementar el total.
          });
        });
        // let feed = this.controllerFor('authenticated.feeds.show').get('feed');
        this.feed.set('unreadCount', this.feed.get('unreadCount') - 1);

        // Cada 5 leidos, cargo otros 5
        if (this.store.peekAll('entry').filterBy('feed_id', this.feed.id).filterBy('read', false).length <= 5) {
          this.loadData();
        }
      }
      return true;
    }
  }
});
