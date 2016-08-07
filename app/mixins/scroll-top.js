function scrollTop() {
  Ember.run.schedule('afterRender', function() {
    $(document).scrollTop(0);
  });
}

export default Ember.Mixin.create({
  activate: scrollTop.on('didInsertElement')
});

export { scrollTop };