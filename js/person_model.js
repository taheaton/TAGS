import Backbone from 'backbone';



let PersonModel = Backbone.Model.extend({
  urlRoot: 'https://api.parse.com/1/classes/Characters',
  idAttribute: 'objectId',
});

export default PersonModel;