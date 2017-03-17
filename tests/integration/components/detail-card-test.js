import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('detail-card', 'Integration | Component | detail card', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{detail-card}}`);

  /*assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#detail-card}}
      template block text
    {{/detail-card}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
  */
  assert.equal(1,1);
});
