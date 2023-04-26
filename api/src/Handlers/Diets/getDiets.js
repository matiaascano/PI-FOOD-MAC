let getInfoDietBd = require("../../controllers/diets/getInfoDietBd");


const getDiets = async (req, res) => {
    try {
        const diets = await getInfoDietBd();
        res.status(200).json(diets);
    } catch (error) {
        res.status(500).send({msg: error.message});
    }
}

module.exports = getDiets;