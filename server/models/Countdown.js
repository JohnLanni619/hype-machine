const { Schema, model } = require('mongoose');

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
    username: {
      type: String,
      required: true
    },
    comments: [commentsSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Countdown = model('Countdown', countdownSchema)

module.exports = Countdown; 
