const { Favorite } = require("../db");

const getFav = async (req, res) => {
    try {
        const favs = await Favorite.findAll()
        res.status(200).json(favs);
    } catch (error) {
        res.status(500).json({ message: error });
    };
};

module.exports = { getFav };