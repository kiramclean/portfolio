import Ember from 'ember';

export function initialize(/* application */) {
  var inflector = Ember.Inflector.inflector;

  inflector.irregular('cafe', 'cafes');
}

export default {
  name: 'inflections',
  initialize
};
