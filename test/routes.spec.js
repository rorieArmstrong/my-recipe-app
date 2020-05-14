process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
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
  
  describe('GET /api/v1/shows', function() {
    it('should return all shows', function(done) {
      chai.request(server)
      .get('/api/v1/shows')
      .end(function(err, res) {
      res.should.have.status(200);
      res.should.be.json; // jshint ignore:line
      res.body.should.be.a('array');
      res.body.length.should.equal(1);
      res.body[0].should.have.property('Title');
      res.body[0].name.should.equal('Pasta al Limone');
      res.body[0].should.have.property('Ingredients');
      res.body[0].channel.should.equal('lemon, spaghetti, salt, heavy cream, butter, black pepper');
      res.body[0].should.have.property('Method');
      res.body[0].genre.should.equal('Grate zest into a large pot. Cut lemon in half and squeeze out juice.Add cream to lemon zest cook over medium heat. Whisk in butter 1 Tbsp. at a time until melted. Transfer spaghetti stir in reserved lemon juice');
      res.body[0].should.have.property('Dificulty');
      res.body[0].rating.should.equal(2);
      done();
      });
    });
  });

  describe('GET /api/v1/shows/:id', function() {
    it('should return a single show', function(done) {
      chai.request(server)
      .get('/api/v1/shows/1')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json; // jshint ignore:line
        res.body.should.be.a('object');
        res.body[0].should.have.property('Title');
        res.body[0].name.should.equal('Pasta al Limone');
        res.body[0].should.have.property('Ingredients');
        res.body[0].channel.should.equal('lemon, spaghetti, salt, heavy cream, butter, black pepper');
        res.body[0].should.have.property('Method');
        res.body[0].genre.should.equal('Grate zest into a large pot. Cut lemon in half and squeeze out juice.Add cream to lemon zest cook over medium heat. Whisk in butter 1 Tbsp. at a time until melted. Transfer spaghetti stir in reserved lemon juice');
        res.body[0].should.have.property('Dificulty');
        res.body[0].rating.should.equal(2);
        done();
      });
    });
  });

  describe('POST /api/v1/shows', function() {
    it('should add a show', function(done) {
      chai.request(server)
      .post('/api/v1/shows')
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
        res.body.name.should.equal('Toast');
        res.body.should.have.property('Ingredients');
        res.body.channel.should.equal('bread');
        res.body.should.have.property('Method');
        res.body.genre.should.equal('Toast the bread');
        res.body.should.have.property('Dificulty');
        res.body.rating.should.equal(1);
        done();
      });
    });
  });

  describe('PUT /api/v1/shows/:id', function() {
    it('should update a show', function(done) {
      chai.request(server)
      .put('/api/v1/shows/1')
      .send({
        Dificulty: 4
      })
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json; // jshint ignore:line
        res.body.should.be.a('object');
        res.body[0].should.have.property('Title');
        res.body[0].name.should.equal('Pasta al Limone');
        res.body[0].should.have.property('Ingredients');
        res.body[0].channel.should.equal('lemon, spaghetti, salt, heavy cream, butter, black pepper');
        res.body[0].should.have.property('Method');
        res.body[0].genre.should.equal('Grate zest into a large pot. Cut lemon in half and squeeze out juice.Add cream to lemon zest cook over medium heat. Whisk in butter 1 Tbsp. at a time until melted. Transfer spaghetti stir in reserved lemon juice');
        res.body[0].should.have.property('Dificulty');
        res.body[0].rating.should.equal(4);
        done();
      });
    });
    it('should NOT update a show if the id field is part of the request', function(done) {
      chai.request(server)
      .put('/api/v1/shows/1')
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

  describe('DELETE /api/v1/shows/:id', function() {
    it('should delete a show', function(done) {
      chai.request(server)
      .delete('/api/v1/shows/1')
      .end(function(error, response) {
        response.should.have.status(200);
        response.should.be.json; // jshint ignore:line
        response.body.should.be.a('object');
        res.body[0].should.have.property('Title');
        res.body[0].name.should.equal('Pasta al Limone');
        res.body[0].should.have.property('Ingredients');
        res.body[0].channel.should.equal('lemon, spaghetti, salt, heavy cream, butter, black pepper');
        res.body[0].should.have.property('Method');
        res.body[0].genre.should.equal('Grate zest into a large pot. Cut lemon in half and squeeze out juice.Add cream to lemon zest cook over medium heat. Whisk in butter 1 Tbsp. at a time until melted. Transfer spaghetti stir in reserved lemon juice');
        res.body[0].should.have.property('Dificulty');
        res.body[0].rating.should.equal(2);
        chai.request(server)
        .get('/api/v1/shows')
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
