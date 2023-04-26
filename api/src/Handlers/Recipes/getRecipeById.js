const getRecipeId = require('../../controllers/recipes/getRecipeId');

const getRecipeById = async (req, res) => {
    try { 
        const {id} = req.params;
        const response = await getRecipeId(id);

        if (!response)
        return res 
        .status(401)
        .json({msg: 'El id ${id} no existe como receta'});

        res.status(200).json(response);
    } catch (error) {
        res.status(500).send({msg: error.message});
    }
}


module.exports = getRecipeById;