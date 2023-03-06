const User = require("../model/Name");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      email: req.body.email,
      password: hash,
    });

    await newUser.save();

    res.status(200).json("User has been created!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = register;
