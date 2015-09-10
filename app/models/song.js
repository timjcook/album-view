import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  duration: DS.attr('string'),
  lyrics: DS.attr('string'),
  sort: DS.attr('number')
});
