const { Diet } = require('../../db.js');

//utilizando el metodo findall lo que busco es acceder a la tabla diets y traerme todos los datos de la tabla
// y mediante atribbutes elijo cuales quiero...

const getInfoDietBd = async () => {
    const dietsAll = await Diet.findAll({
        attributes: ['name', 'id'],
    }

    );

    const dietsAllAr = [];
    dietsAll.forEach((x) => dietsAllAr.push({name : x.name, id : x.id}));

    return dietsAllAr;

};

module.exports =  getInfoDietBd;