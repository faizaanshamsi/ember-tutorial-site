import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('intro', function() {});
  this.route('adding-your-first-model', function() {
  });
});

export default Router;
