import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  buildURL: function(modelName, id, snapshot, requestType, query) {
  	if (id !== null) {
			let entry = this.store.peekRecord('entry', id);
			return this.namespace + '/feeds/' + entry.get('feed_id') + '/entries/' + id;
  	
  	} else {
  		let feed_id = query['feed_id'];
  		delete query['feed_id'];
			return this.namespace + '/feeds/' + feed_id + '/entries';
  	}
  }
});
