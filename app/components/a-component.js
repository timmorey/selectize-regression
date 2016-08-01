import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({

  content: computed(function() {
    return [1, 2, 3, 4, 5, 6];
  })

});
