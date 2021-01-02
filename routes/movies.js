var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Movie = require('../models/Movie.js');

/* GET the movies listing. */
router.get('/', function(req, res, next) {
  Movie.find().sort('year').exec(function(err, movies){
    if (err) res.status(500).send(err);
    else res.status(200).json(movies);
  })
});

/* GET the movie identified by id */
router.get('/:id', function(req, res, next) {
  Movie.findById(req.params.id, function(err, movieinfo){
    if (err) res.status(500).send(err);
    else res.status(200).json(movieinfo);
  })
});

/* POST the movies listing. */
router.post('/', function(req, res, next) {
  Movie.create(req.body, function(err, movieinfo){
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  })
});

/* PUT movie identified by id*/
router.put('/:id', function(req, res, next) {
  Movie.findByIdAndUpdate(req.params.id, req.body, function (err, movieinfo){
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  })
});

/* Delete movie identified by id*/
router.delete('/:id', function(req, res, next) {
  res.send('delete movie ' + req.params.id);
});

module.exports = router;
