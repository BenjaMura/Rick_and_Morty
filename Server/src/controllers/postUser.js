const { User } = require("../db");

const postUser = async (req, res) => {
  const { email, password, id } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Faltan datos" });
    }
    const [user, created] = await User.findOrCreate({
      where: { id, email, password },
    });
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { postUser};