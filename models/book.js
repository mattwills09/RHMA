const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  month: { type: Number, required: true },
  year: { type: Number, required: true },
  rentMortgage: { type: Number, required: true },
  insurance: { type: Number, required: true },
  payroll: { type: Number, required: true },
  advertising: { type: Number, required: true },
  utilities: { type: Number, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
