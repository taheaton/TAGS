import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';



$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': 'P3gI0aImq46HrKhnRk3O3zEplxFEiGdJLjcPSsbI',
    'X-Parse-REST-API-Key': 'GToh6otBdwRRkQPndH0AOHuF6ESeC01hqoke6wk4'
  }
});

import PeopleCollection from './people_collection';
import PersonTemplate from './person_template';

let people = new PeopleCollection();

function renderPeople() {
  let $ul = $('<ul></ul>');
  people.each(function(person) {
    let data = person.toJSON();
    let $li = $(PersonTemplate(data));
    $ul.append($li);
  });
  $('body').append($ul);
}

people.fetch().then(renderPeople);

console.log('Hello, World');

