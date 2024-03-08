import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/userControllers.js';

const router = express.Router();

// Routes for User model
router.get('/', getAllUsers); // Get all users
router.get('/:id', getUserById); // Get a single user by ID
router.post('/', createUser); // Create a new user
router.put('/:id', updateUser); // Update a user by ID
router.delete('/:id', deleteUser); // Delete a user by ID

export default router;
