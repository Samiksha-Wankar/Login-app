const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');
const captchaService = require('../services/captchaService'); // Import the captcha service

// Register a new user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, captchaToken } = req.body;

  // Verify CAPTCHA
  if (!captchaToken) {
    res.status(400);
    throw new Error('Please complete the CAPTCHA');
  }

  const captchaVerified = await captchaService.verifyCaptcha(captchaToken);
  if (!captchaVerified) {
    res.status(400);
    throw new Error('CAPTCHA verification failed');
  }

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Create a new user
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// Authenticate a user
const authUser = asyncHandler(async (req, res) => {
  const { email, password, captchaToken } = req.body;

  // Verify CAPTCHA
  if (!captchaToken) {
    res.status(400);
    throw new Error('Please complete the CAPTCHA');
  }

  const captchaVerified = await captchaService.verifyCaptcha(captchaToken);
  if (!captchaVerified) {
    res.status(400);
    throw new Error('CAPTCHA verification failed');
  }

  // Check if user exists and validate password
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

module.exports = {
  registerUser,
  authUser,
};
