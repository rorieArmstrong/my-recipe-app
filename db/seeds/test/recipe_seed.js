exports.seed = function(knex, Promise) {
    return knex('recipes').del() // Deletes ALL existing entries
      .then(function() { // Inserts seed entries one by one in series
        return knex('recipes').insert({
            id: 1,
            Title: "Pasta al Limone",
            Ingredients: "lemon, spaghetti, salt, heavy cream, butter, black pepper",
            Method: "Grate zest into a large pot. Cut lemon in half and squeeze out juice.Add cream to lemon zest cook over medium heat. Whisk in butter 1 Tbsp. at a time until melted. Transfer spaghetti stir in reserved lemon juice",
            Dificulty: 2
            });
    });
};