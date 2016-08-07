import DS from 'ember-data';

export default DS.Model.extend({
  entries:      DS.hasMany('entries', {async: true }),
  title:        DS.attr('string'),
  feedUrl:      DS.attr('string'),
  siteUrl:      DS.attr('string'),
  lastUpdated:  DS.attr('date'),
  unreadCount:  DS.attr('number'),
});
