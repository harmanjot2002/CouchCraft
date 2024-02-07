import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import tryCatch from './utils/tryCatch.js';
 
export const register = tryCatch(async (req, res) => {
  const { name, email, password } = req.body;
  if (password.length < 6)
    return res.status(400).json({
      success: false,
      message: 'Password must be 6 characters or more',
    });
  const emailLowerCase = email.toLowerCase();
  const existedUser = await User.findOne({ email: emailLowerCase });
  if (existedUser)
    return res
      .status(400)
      .json({ success: false, message: 'User already exists!' });
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await User.create({
    name,
    email: emailLowerCase,
    password: hashedPassword,
  });
  const { _id: id, photoURL } = user;
  const token = jwt.sign({ id, name, photoURL }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
  res.status(201).json({
    success: true,
    result: { id, name, email: user.email, photoURL, token },
  });
});

export const login = tryCatch(async (req, res) => {
  const { email, password } = req.body;

  const emailLowerCase = email.toLowerCase();
  const existedUser = await User.findOne({ email: emailLowerCase });
  if (!existedUser)
    return res
      .status(404)
      .json({ success: false, message: 'User does not exist!' });
  const correctPassword = await bcrypt.compare(password, existedUser.password);
  if (!correctPassword)
    return res
      .status(400)
      .json({ success: false, message: 'Invalid credentials' });

  const { _id: id, name, photoURL } = existedUser;
  const token = jwt.sign({ id, name, photoURL }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
  res.status(200).json({
    success: true,
    result: { id, name, email: emailLowerCase, photoURL, token },
  });
});
export const updateProfile = tryCatch(async (req, res) => {
  try {
    console.log('Before findByIdAndUpdate');
    console.log('req.user.id:', req.user.id);
    console.log('req.body:', req.body);

    const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, {
      new: true,
    });

    console.log('After findByIdAndUpdate');

    if (!updatedUser) {
      console.error('User not found or update failed.');
      return res.status(404).json({ success: false, message: 'User not found or update failed.' });
    }

    const { _id: id, name, photoURL } = updatedUser;

    const token = jwt.sign({ id, name, photoURL }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ success: true, result: { name, photoURL, token } });
  } catch (error) {
    console.error('Error in updateProfile:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});
