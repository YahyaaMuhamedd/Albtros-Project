const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets the creation date to the current date/time
  },
  comment: {
    type: String,
    required: true,
    trim: true, // Removes extra whitespace from the beginning and end
  },
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  userEmail: {
    type: String,
    required: true,
    trim: true,
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;