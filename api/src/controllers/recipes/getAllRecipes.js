const getInfoApi = require ('./GetInfoApi');
const getInfoDb = require ('./GetInfoDb');

const getAllRecipes = async () => {
    const infoApi = await getInfoApi(); //informacion de la api
    const infoDb = await getInfoDb(); //informacion de la base de datos
    const allRecipes = [...infoApi, ...infoDb]; //se unen las dos informaciones
    return allRecipes;
};

module.exports = getAllRecipes;