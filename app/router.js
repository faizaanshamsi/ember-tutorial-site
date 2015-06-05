import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('intro');
  this.route('installation');
  this.route('what-you-will-build');
  this.route('setting-up-project');
  this.route('adding-your-first-model');
});

export default Router;
