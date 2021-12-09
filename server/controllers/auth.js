// models
const User = require ('../models/User');

/* controllers */

const Joi = require ('@hapi/joi');

const schema = Joi.object ({
  name: Joi.string ().min (2).max (30).alphanum ().required (),
  email: Joi.string ().email ().required (),
  password: Joi.string ().min (10).max (30).required (),
});

// Register | POST:/register
const register = async (req, res) => {
  // check the inputs validation
  const {error} = schema.validate (req.body);
  if (error)
    res.status (400).json ({success: false, message: error.details[0].message});

  // check if the email is already exist
  const isExist = await User.findOne ({email: req.body.email});
  if (isExist)
    res
      .status (400)
      .json ({success: false, message: 'This email is already exist'});

  // create new user
  try {
    const newUser = new User (req.body);
    await newUser.save ();
    res.status (200).json ({success: true, data: newUser});
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
};

// export all controllers
module.exports = {register};
