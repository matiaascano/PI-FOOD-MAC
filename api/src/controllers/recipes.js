const { Recipe, Diet } = require('../db.js');


const recipe2 = {} 



recipe2.getID = async (id) => {
    const recipe3 = await Recipe.findByPk(id)
    return recipe3
}

recipe2.getRecipes = async () => {
    const recipe3 = await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
    return recipe3
}

recipe2.getByName = async (name) => {
    const recipe3 = await Recipe.findAll({
        where: {
            name: name
        },
        include: {
            model: Diet,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
    return recipe3
}

module.exports = recipe2