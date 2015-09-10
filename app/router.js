import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('album', { path: "/" }, function() {
    this.route('view', { path: "album/:album_id" });
  });
});

export default Router;
