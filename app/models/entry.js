import DS from 'ember-data';

export default DS.Model.extend({
  feed:           DS.belongsTo('feed'),
  feed_id:        DS.attr('string'),
  title:          DS.attr('string'),
  url:            DS.attr('string'),
  preview:        DS.attr('string'),
  content:        DS.attr('string'),
  author:         DS.attr('string'),
  published_date: DS.attr('date'),
  read:           DS.attr('boolean'),
  starred:        DS.attr('boolean'),
  shared:         DS.attr('boolean')
});
