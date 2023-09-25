const { Favorite } = require("../db");

const deleteFav = async (req, res) => {
  const { id } = req.params;
  try {
    const fav = await Favorite.findOne({ where: { id } });
    await fav.destroy();
    res.status(200).json(fav);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { deleteFav };
