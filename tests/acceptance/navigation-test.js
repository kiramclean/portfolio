import { test } from 'qunit';
import moduleForAcceptance from 'kira-mclean/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | static pages');

test('visiting /', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find('h1#title').text(), 'Kira McLean');
  });
});

test('visiting /about', function(assert) {
  visit('/');
  click('a:contains("Profile")');
  andThen(function() {
    assert.equal(find('h2').text(), 'About Me');
  });
});

test('returning to homepage', function(assert) {
  visit('/about');
  click('a:contains("Kira McLean")');
  andThen(function() {
    assert.notEqual(find('h2').text(), 'About Me');
  });
});

test('visiting /cafes', function(assert) {
  visit('/');
  click('a:contains("Wifi and Coffee")');
  andThen(function() {
    assert.equal(find('h2').text(), 'Wifi and Coffee');
  });
});
