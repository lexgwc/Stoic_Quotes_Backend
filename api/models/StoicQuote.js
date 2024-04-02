import mongoose from 'mongoose';

const stoicQuoteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  year: {
    type: Number,
    required: false
  },
  country: {
    type: String,
    required: false
  },
  source: {
    type: String,
    required: false
  }
});

const StoicQuote = mongoose.model('StoicQuote', stoicQuoteSchema);

export default StoicQuote;