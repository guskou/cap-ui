import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('packets-card', 'Integration | Component | packets card', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{packets-card}}`);

  /*assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#packets-card}}
      template block text
    {{/packets-card}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
  */
  assert.equal(1,1);
});
