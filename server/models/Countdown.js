const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const commentSchema = require('./Comment');

const countdownSchema = new Schema(
  {
    countdownTitle: {
      type: String,
      required: 'Countdown must have a title',
      minlength: 3,
      maxlength: 120
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    targetDate:{
      type: Date
      // get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    comments: [commentSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

countdownSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});

const Countdown = model('Countdown', countdownSchema)

module.exports = Countdown; 
