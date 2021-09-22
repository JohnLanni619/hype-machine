
const { User, Countdown } = require('../models')
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


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
        .populate('countdowns');
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('countdowns');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('countdowns')
          .populate('friends');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    }
  },
  
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addCountdown: async (parent, args, context) => {
      if (context.user) {
        const countdown = await Countdown.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { countdowns: countdown._id } },
          { new: true }
        );

        return countdown;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { countdownId, commentText }, context) => {
      if (context.user) {
        const updatedCountdown = await Countdown.findOneAndUpdate(
          { _id: countdownId },
          { $push: { comments: { commentText, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedCountdown;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate('friends');

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    deleteCountdown: async (parent, { countdownId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: {countdowns: countdownId } }
        ).populate('countdowns');

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    }

  }
}
module.exports = resolvers;