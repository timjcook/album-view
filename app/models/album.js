import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  artist: DS.attr('string'),
  releaseDate: DS.attr('date'),
  albumCover: DS.attr('string'),
  description: DS.attr('string')
});
