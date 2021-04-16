const Joi = require("joi");

// validate add user (user validation)

const validateAddUser = new Joi.object({
  name: Joi.string().min(4).required().max(150),
  email: Joi.string().min(10).max(200).email().required(),
  password: Joi.string().min(8).max(50).required(),
});

module.exports = { validateAddUser };
