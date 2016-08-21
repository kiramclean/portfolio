import Ember from 'ember';

export default Ember.Component.extend({
  showMenu: true,

  actions: {
    toggle() {
      this.toggleProperty('showMenu')
    }
  },

  observer: Ember.observer('showMenu', function() {
    this.slideDown()
  })
});
