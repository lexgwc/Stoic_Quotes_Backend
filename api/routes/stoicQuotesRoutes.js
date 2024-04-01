import express from 'express';
import {
  getAllQuotes,
  getQuoteById,
  createQuote,
  updateQuote,
  deleteQuote,
} from '../controllers/stoicQuotesControllers.js';

const router = express.Router();

// Routes for StoicQuote model
router.get('/', getAllQuotes); // Get all quotes
router.get('/:id', getQuoteById); // Get a single quote by ID
router.post('/', createQuote); // Create a new quote
router.put('/:id', updateQuote); // Update a quote by ID
router.delete('/:id', deleteQuote); // Delete a quote by ID

export default router;
