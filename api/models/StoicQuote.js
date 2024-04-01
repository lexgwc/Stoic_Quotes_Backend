import mongoose from 'mongoose';

const stoicQuoteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
});

export const StoicQuote = mongoose.model('StoicQuote', stoicQuoteSchema);
