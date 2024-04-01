import express from 'express';
import {
  getAllUsers,
  getUserById,
  // createUser,
  addFavorite,
  removeFavorite,
  updateUser,
  deleteUser,
} from '../controllers/userControllers.js';

import { signup, login, logout } from '../controllers/authController.js'; // Adjust the path as per your structure and make sure to add .js extension
import isUserLoggedIn from '../utils/auth.js'; // Adjust the path as necessary


const router = express.Router();

// Routes for User model
router.get('/logout', logout)


router.get('/', getAllUsers); // Get all users
router.get('/:id', getUserById); // Get a single user by ID
// router.post('/', createUser); // Create a new user

router.post('/signup', signup);
router.post('/login', login);

router.put('/:id', updateUser); // Update a user by ID
router.delete('/:id', deleteUser); // Delete a user by ID


// Applying the isUserLoggedIn middleware to protect the routes
router.post('/addFavorite', isUserLoggedIn, addFavorite);
router.post('/removeFavorite', isUserLoggedIn, removeFavorite);

export default router;
