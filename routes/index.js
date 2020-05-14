const express = require('express');
const router = express.Router();
const db = require('../db/queries.js');

// GET all recipes
router.get('/all', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
   db.getAll()
   .then((recipes) => {
        res.status(200).json(recipes);
   }).catch((error) => {
       next(error);
   })
})

// GET a single recipe by id
router.get('/:id', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    db.getSingle(req.params.id)
    .then(function(show) {
      res.status(200).json(show);
    })
    .catch(function(error) {
      next(error);
    });
  });

// GET a the first X recipes
router.get('/select/:X', (req, res, next) => {
  db.get(req.params.X)
  .then(function(show) {
    res.status(200).json(show);
  })
  .catch(function(error) {
    next(error);
  });
});

// add recipe 
router.post('/recipe', (req, res, next) => {
    db.add(req.body)
    .then(function(recipeID) {
      console.log('POSTED')
      const data = db.getSingle(recipeID);
      return data;
    })
    .then((show) => {
      res.json(show);
    })
    .catch(function(error) {
      next(error);
    });
  });
  
//   update recipe 
  router.put('/:id', (req, res, next) => {
    if(req.body.hasOwnProperty('id')) {
      return res.status(422).send({error: 'You cannot update the id field'});
    }
    db.update(req.params.id, req.body)
    .then(function() {
      return db.getSingle(req.params.id);
    })
    .then(function(show) {
      res.status(200).json(show);
    })
    .catch(function(error) {
      next(error);
    });
  });
  
// delete recipe 
  router.delete('/:id', function(req, res, next) {
    db.getSingle(req.params.id)
    .then(function(show) {
      db.deleteItem(req.params.id)
      .then(function() {
        res.status(200).json(show);
      })
      .catch(function(error) {
        next(error);
      });
    }).catch(function(error) {
      next(error);
    });
  });

module.exports = router;