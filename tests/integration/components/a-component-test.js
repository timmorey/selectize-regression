import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('a-component', 'Integration | Component | a component', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{a-component}}`);
  assert.ok(this.$().text().trim());
});
