import Ember from 'ember';
import selectAutocompletePlace from './select-autocomplete-place-helper';

export default function() {
  Ember.Test.registerAsyncHelper('selectPlace', () => {
    Ember.Logger.warn(`Please replace disabled helper "selectPlace" with "selectAutocompletePlace" helper.
Usage details here: http://http://matt-jensen.github.io/ember-cli-g-maps/#/place-autocomplete/index`)
  });
  Ember.Test.registerAsyncHelper('selectAutocompletePlace', selectAutocompletePlace);
}