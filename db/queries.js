var knex = require('./knex.js');

function Recipes() {
  return knex('shows');
}

// *** queries *** //

function getAll() {
  return Recipes().select();
}

function get(x) {
  return Recipes().select().where('id', '<', x);
}

function getSingle(ID) {
  return Recipes().where('id', parseInt(ID)).first();
}

function add(recipe) {
  return Recipes().insert(recipe, 'id');
}

function update(ID, updates) {
  return Recipes().where('id', parseInt(ID)).update(updates);
}

function deleteItem(ID) {
  return Recipes().where('id', parseInt(ID)).del();
}


module.exports = {
  getAll: getAll,
  get: get,
  getSingle: getSingle,
  add: add,
  update: update,
  deleteItem: deleteItem
};