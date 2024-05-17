const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  fullName: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  phoneNumber: {
    type: String,
    required: false
  },
  duration: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    required: false,
    default: Date.now
  },
  budget: {
    type: String, // Assuming budget is an array of numbers
    required: false
  },
  selectedFilters: {
    countries: {
      type: [Object],
      required: false
    },
    places: {
      type: [Object],
      required: false
    },
    people: {
      type: Object,
      required: false
    },
    cost: { 
      type: Object,
      required: false
    }
  }
}, {timestamps: true});

const Data = mongoose.model('datas', dataSchema);

module.exports = Data;
