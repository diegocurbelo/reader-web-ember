import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('entries/entry-detail', 'Integration | Component | entries/entry detail', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{entries/entry-detail}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#entries/entry-detail}}
      template block text
    {{/entries/entry-detail}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
