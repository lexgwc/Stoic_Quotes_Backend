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

const StoicQuote = mongoose.model('StoicQuote', stoicQuoteSchema);

export default StoicQuote;