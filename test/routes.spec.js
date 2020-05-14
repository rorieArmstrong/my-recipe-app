process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var knex = require('../db/knex');
var should = chai.should();

chai.use(chaiHttp);

describe('API Routes', function() {

  beforeEach(function(done) {
    knex.migrate.rollback()
    .then(function() {
      knex.migrate.latest()
      .then(function() {
        return knex.seed.run()
        .then(function() {
          done();
        });
      });
    });
  });
  
  describe('GET /api/all', function() {
    it('should return all', function(done) {
      chai.request(server)
      .get('/api/all')
      .end(function(err, res) {
      res.should.have.status(200);
      res.should.be.json; // jshint ignore:line
      res.body.should.be.a('array');
      res.body.length.should.equal(1);
      res.body[0].should.have.property('Title');
      res.body[0].Title.should.equal('Pasta al Limone');
      res.body[0].should.have.property('Ingredients');
      res.body[0].Ingredients.should.equal('lemon, spaghetti, salt, heavy cream, butter, black pepper');
      res.body[0].should.have.property('Method');
      res.body[0].Method.should.equal('Grate zest into a large pot. Cut lemon in half and squeeze out juice.Add cream to lemon zest cook over medium heat. Whisk in butter 1 Tbsp. at a time until melted. Transfer spaghetti stir in reserved lemon juice');
      res.body[0].should.have.property('Dificulty');
      res.body[0].Dificulty.should.equal(2);
      done();
      });
    });
  });

  describe('GET /api/:id', function() {
    it('should return a single recipe', function(done) {
      chai.request(server)
      .get('/api/1')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json; // jshint ignore:line
        res.body.should.be.a('object');
        res.body.should.have.property('Title');
        res.body.Title.should.equal('Pasta al Limone');
        res.body.should.have.property('Ingredients');
        res.body.Ingredients.should.equal('lemon, spaghetti, salt, heavy cream, butter, black pepper');
        res.body.should.have.property('Method');
        res.body.Method.should.equal('Grate zest into a large pot. Cut lemon in half and squeeze out juice.Add cream to lemon zest cook over medium heat. Whisk in butter 1 Tbsp. at a time until melted. Transfer spaghetti stir in reserved lemon juice');
        res.body.should.have.property('Dificulty');
        res.body.Dificulty.should.equal(2);
        done();
      });
    });
  });

  describe('POST /api/recipe', function() {
    it('should add a recipe', function(done) {
      chai.request(server)
      .post('/api/recipe')
      .send({
        Title: 'Toast',
        Ingredients : 'bread',
        Method: 'Toast the bread',
        Dificulty: 1
      })
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json; // jshint ignore:line
        res.body.should.be.a('object');
        res.body.should.have.property('Title');
        res.body.Title.should.equal('Toast');
        res.body.should.have.property('Ingredients');
        res.body.Ingredients.should.equal('bread');
        res.body.should.have.property('Method');
        res.body.Method.should.equal('Toast the bread');
        res.body.should.have.property('Dificulty');
        res.body.Dificulty.should.equal(1);
        done();
      });
    });
  });

  describe('PUT /api/:id', function() {
    it('should update a recipe', function(done) {
      chai.request(server)
      .put('/api/1')
      .send({
        Dificulty: 4
      })
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json; // jshint ignore:line
        res.body.should.be.a('object');
        res.body.should.have.property('Title');
        res.body.Title.should.equal('Pasta al Limone');
        res.body.should.have.property('Ingredients');
        res.body.Ingredients.should.equal('lemon, spaghetti, salt, heavy cream, butter, black pepper');
        res.body.should.have.property('Method');
        res.body.Method.should.equal('Grate zest into a large pot. Cut lemon in half and squeeze out juice.Add cream to lemon zest cook over medium heat. Whisk in butter 1 Tbsp. at a time until melted. Transfer spaghetti stir in reserved lemon juice');
        res.body.should.have.property('Dificulty');
        res.body.Dificulty.should.equal(4);
        done();
      });
    });
    it('should NOT update a recipe if the id field is part of the request', function(done) {
      chai.request(server)
      .put('/api/1')
      .send({
        id: 20,
        Dificulty: 4
      })
      .end(function(err, res) {
        res.should.have.status(422);
        res.should.be.json; // jshint ignore:line
        res.body.should.be.a('object');
        res.body.should.have.property('error');
        res.body.error.should.equal('You cannot update the id field');
        done();
      });
    });
  });

  describe('DELETE /api/:id', function() {
    it('should delete a show', function(done) {
      chai.request(server)
      .delete('/api/1')
      .end(function(error, response) {
        response.should.have.status(200);
        response.should.be.json; // jshint ignore:line
        response.body.should.be.a('object');
        res.body.should.have.property('Title');
        res.body.Title.should.equal('Pasta al Limone');
        res.body.should.have.property('Ingredients');
        res.body.Ingredients.should.equal('lemon, spaghetti, salt, heavy cream, butter, black pepper');
        res.body.should.have.property('Method');
        res.body.Method.should.equal('Grate zest into a large pot. Cut lemon in half and squeeze out juice.Add cream to lemon zest cook over medium heat. Whisk in butter 1 Tbsp. at a time until melted. Transfer spaghetti stir in reserved lemon juice');
        res.body.should.have.property('Dificulty');
        res.body.Dificulty.should.equal(2);
        chai.request(server)
        .get('/api/all')
        .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.json; // jshint ignore:line
          res.body.should.be.a('array');
          res.body.length.should.equal(0);
          done();
        });
      });
    });
  });
});
