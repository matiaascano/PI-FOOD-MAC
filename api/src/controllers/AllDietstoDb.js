const { Diet } = require('../db.js');
const axios = require('axios');
require ('dotenv').config();
const { API_KEY } = process.env;

const allDiets = async () => {
    try {
        const diets = await Diet.findAll();
        res.json(diets);
    } catch (error) {
        console.error(error);
        res.status.json({message: 'Error al obtener las dietas'})
    }
};

module.exports = {getRecipeByID, allDiets }; 