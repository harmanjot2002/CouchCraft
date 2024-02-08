import Room from '../models/Room.js';
import tryCatch from './utils/tryCatch.js';
import mongoose from 'mongoose'; // Import mongoose if not already imported

export const createRoom = tryCatch(async (req, res) => {
  try {
    // Check MongoDB connection state
    if (mongoose.connection.readyState !== 1) {
      console.error('MongoDB connection is not open');
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }

    const { id: uid, name: uName, photoURL: uPhoto } = req.user;
    const newRoom = new Room({ ...req.body, uid, uName, uPhoto });
    await newRoom.save();
    res.status(201).json({ success: true, result: newRoom });
  } catch (error) {
    console.error('Error in createRoom:', error);
    console.error(error.stack);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});
