const express = require('express');
const routesPokemon = express.Router();

const { getPokemon } = require('../controllers/pokemonControllers');

routesPokemon.get('/pokemon', getPokemon);
/* routesPokemon.get('/pokemon/id/:id', getPokemonById);
routesPokemon.get('/pokemon/name/:name', getPokemonByName);
routesPokemon.post('/pokemon/create', addPokemon);
routesPokemon.put('/pokemon/edit/:id', putPokemon);
routesPokemon.delete('/pokemon/delete/:id', deletePokemon); */

module.exports = routesPokemon;