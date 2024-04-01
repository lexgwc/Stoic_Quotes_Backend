import { StoicQuote } from '../api/models/StoicQuote.js';

export const getAllQuotes = async (req, res) => {
  try {
    const quotes = await StoicQuote.find();
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getQuoteById = async (req, res) => {
  try {
    const quote = await StoicQuote.findById(req.params.id);
    if (quote) {
      res.json(quote);
    } else {
      res.status(404).json({ message: 'Quote not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createQuote = async (req, res) => {
  const quote = new StoicQuote(req.body);
  try {
    const newQuote = await quote.save();
    res.status(201).json(newQuote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateQuote = async (req, res) => {
  try {
    const quote = await StoicQuote.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (quote) {
      res.json(quote);
    } else {
      res.status(404).json({ message: 'Quote not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteQuote = async (req, res) => {
  try {
    const quote = await StoicQuote.findByIdAndDelete(req.params.id);
    if (quote) {
      res.json({ message: 'Quote deleted' });
    } else {
      res.status(404).json({ message: 'Quote not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
