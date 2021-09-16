const { Schema } = require('mongoose');


const commentSchema = new Schema(
  {
    commentText: {
      type: String,
      required: true,
      maxlength: 300
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = commentSchema;