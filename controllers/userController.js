const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validateAddUser } = require("../validations/userValidations");

const addUser = async (req, res) => {
  //validate a user
  const { error } = validateAddUser.validate(req.body);
  if (error) return res.status(402).send(error.details[0].message);

  //complexity level and hashing using bcryptjs
  const salt = await bcrypt.genSalt(10);
  const { name, password, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, salt);

  // find user form Database
  const emailFound = await User.findOne({ email: req.body.email });
  if (emailFound) return res.status(403).send("Email already exist!");

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  await newUser.save();
  res.status(201).json(newUser);
};

//use login

const userLogin = async (req, res) => {
  //user email verification

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).send("User account not found");

  //user password verification
  const verifiedPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!verifiedPassword)
    return res.status(404).send("Invalid email or password!");

  //assign user a token
  const token_id = jwt.sign({ _id: user._id }, process.env.SECRET_CODE, {expiresIn:"30d"} );
  res.headers("authorization", token_id).send(token_id);

  res.json({ user });
};

module.exports = { addUser, userLogin };
