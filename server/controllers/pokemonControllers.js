//require('mongoose');
//const db = require('../config/mongoConfig');
//const userDB = require('../models/usersModel');
const axios = require('axios');


const getPokemon = async (req, res) => {
    try {
        const allPokemons = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10");
        console.log(allPokemons.data);
        res.status(200).json(allPokemons.data);
    } catch (error) {
        console.log(`Error en getPokemons: ${error}`);
        //throw(error);
        res.status(500).json({message: error})
    }
};
/* 
const getPokemonById = async (req, res) => {
    console.log(req.params.id);
    try {
        const oneUser = await userDB.getUserById(req.params.id);
        console.log(oneUser);
        res.status(200).json(oneUser);
    } catch (error) {
        console.log(`Error en getById: ${error}`)
        res.status(500).json({message: error})
        //throw(error);
    }
};

const getPokemonByName = async (req, res) => {
    console.log(req.params.name);
    try {
        const oneUser = await userDB.getUserByName(req.params.name);
        console.log(oneUser);
        res.status(200).send(oneUser);
    } catch (error) {
        console.log(`Error en getByName: ${error}`)
        res.status(500).json({message: error})
        //throw(error);
    }
};

const addPokemon = async (req, res) => {
    try {
        await userDB.postUser(req.body);
        res.status(200).send({ message: "User succesfully created!" });
    } catch (error) {
        console.log(`Error en addUser: ${error}`)
        res.status(500).json({message: error})
        //throw(error);
    }
};

const putPokemon = async (req, res) => {
    const filter = req.params.id;
    const update = {
        nombre: req.body.nombre,
        //id: req.params.id,
        apellidos: req.body.apellidos,
        email: req.body.email,
        role: req.body.role
    };
    console.log(filter);
    console.log(update)
    
    try {
        await userDB.editUser(filter, update)
            .then((response) => response  
                ? res.status(201).json({ message: `Usuario con id:${filter} editado OK! Con los datos: ${response}` }) 
                : res.status(400).json({ message: `Usuario con id:${filter} NO ENCONTRADO!` }) 
            )
    } catch (error) {
        console.log(`Error en putUser: ${error}`)
        res.status(500).json({message: error})
    }
};

const deletePokemon = async (req, res) => {
    try {
        await userDB.deleteUser(req.params.id)
        .then((response) => response.deletedCount == "1"  
          ? res.status(200).json({ message: `Usuario con id:${req.params.id} eliminado OK!` }) 
          : res.status(400).json({ message: `Usuario con id:${req.params.id} NO ENCONTRADO!` })
        )
    } catch (error) {
        console.log(`Error en deleteUser: ${error}`)
        res.status(500).json({message: error})
    }
} */

const pokemonControllers = {
    getPokemon/* ,
    getPokemonById,
    getPokemonByName,
    addPokemon,
    putPokemon,
    deletePokemon */
};

module.exports = pokemonControllers;