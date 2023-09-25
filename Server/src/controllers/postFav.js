const { Favorite } = require("../db");

const postFav = async (req, res) => {
  const { id, name, origin, status, image, species, gender } = req.body;
  try {
    if (!id || !name || !origin || !status || !image || !species || !gender) {
      return res.status(400).json({ message: "Faltan datos" });
    }
    const fav = await Favorite.create({
      id, name, origin, status, image, species, gender
    });
    res.status(200).json(fav);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { postFav };