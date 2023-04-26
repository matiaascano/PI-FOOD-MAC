const { Recipe , Diet } = require('../../db.js');

// hay que obtener la informacion de la base de datos

const getInfoDb = async () => {
    const res = await Recipe.findAll({
        attributes: [
            'id',
            'title',
            'summary',
            'healthScore',
            'steps',
            'image',
            'createDb',
        ],
        include: { model: Diet} 
    });
    return await res.map((e) => {
        return {
            id: e.dataValues.id,
            title: e.dataValues.title,
            summary: e.dataValues.summary,
            healthScore: e.dataValues.healthScore,
            steps: e.dataValues.steps,
            image: e.dataValues.image,
            diets: e.dataValues.diets.map((x) => {
                return {name: x.name}
            }),
            createDb: e.dataValues.createDb,
        };
    });
};

module.exports = getInfoDb;

