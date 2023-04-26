let { Recipe, Diet } = require('../../db.js');

const postData = async (recipe) => {
    const { title, summary, healthScore, image, steps, diets } = recipe;

    const recipeCreated = await Recipe.create({
        title,
        summary,
        healthScore,
        steps,
        image,
    });

    let dietsdb = await Diet.findAll({
        where: { name: diets},
    });

    await recipeCreated.addDiet(dietsdb);

    return recipeCreated;
};

module.exports = postData;