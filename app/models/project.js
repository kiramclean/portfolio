import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  stack: DS.attr('string'),
  repo: DS.attr('string'),
  live: DS.attr('string')
});
