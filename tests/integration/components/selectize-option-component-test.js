import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('selectize-option-component', 'Integration | Component | selectize option component', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{selectize-option-component}}`);
  assert.ok(this.$().text().trim());
});
