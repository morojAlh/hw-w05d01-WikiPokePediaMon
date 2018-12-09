var connection = require('../db/dbconfig');

var pokemon = {};

pokemon.getAll = function(req, res, next){
    connection.manyOrNone('SELECT * FROM pokemon;')
    .then(function(result){
        console.log(req.path, 'done');
        res.locals.pokemons = result;
        next();
    });
}

module.exports = pokemon;