const { Diet } = require('../../db.js');

const loaderDiets = async () => {
    const diets = [
        "gluten free",
        "paleolithic",
        "vegetarian",
        "lacto ovo vegetarian",
        "vegan",
        "pescatarian",
        "primal",
        "whole 30",
        "fodmap friendly",
        "dairy free",
        "ketogenic",
    ];

    let allDiets = diets.map((e) => Diet.findOrCreate({ where: { name: e } }));

    try {
        Promise.all(allDiets).then((e) => console.log("Diets loaded"));
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = loaderDiets;