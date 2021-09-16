const { User, Countdown } = require('../models')

const resolvers = {
  Query: {
    countdowns: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Countdown.find(params).sort({ createdAt: -1 });


    },
    countdown: async (parent, { _id }) => {
      return Countdown.findOne({ _id });
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('friends')
        .populate('countdown');
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('countdown');
    },


  }
}

module.exports = resolvers;