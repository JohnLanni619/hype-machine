const faker = require('faker');

const db = require('../config/connection');
const { Comment, Countdown, User } = require('../models');

db.once('open', async () => {
    await Comment.remove();
    await Countdown.remove();
    await User.remove();
  
    // create user data
    const userData = [];
  
    for (let i = 0; i < 50; i += 1) {
      const username = faker.internet.userName();
      const email = faker.internet.email(username);
      const password = faker.internet.password();
  
      userData.push({ username, email, password });
    }
  
    const createdUsers = await User.collection.insertMany(userData);
  
    // create friends
    for (let i = 0; i < 100; i += 1) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      const { _id: userId } = createdUsers.ops[randomUserIndex];
  
      let friendId = userId;
  
      while (friendId === userId) {
        const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
        friendId = createdUsers.ops[randomUserIndex];
      }
  
      await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
    }
  
    // create countdowns
    let createdCountdowns = [];
    for (let i = 0; i < 100; i += 1) {
      const countdownTitle = faker.lorem.words(5);
      const targetDate = faker.date.future();
      const createdAt = faker.date.recent();
  
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      const { username, _id: userId } = createdUsers.ops[randomUserIndex];
  
      const createdCountdown = await Countdown.create({ countdownTitle, username, targetDate, createdAt });
  
      const updatedUser = await User.updateOne(
        { _id: userId },
        { $push: { countdowns: createdCountdown._id } }
      );
  
      createdCountdowns.push(createdCountdown);
    }
  
    // create comments
    for (let i = 0; i < 100; i += 1) {
      const commentText = faker.lorem.words(Math.round(Math.random() * 20) + 1);
      const createdAt = faker.date.recent();
  
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      const { username } = createdUsers.ops[randomUserIndex];
  
      const randomCountdownIndex = Math.floor(Math.random() * createdCountdowns.length);
      const { _id: countdownId } = createdCountdowns[randomCountdownIndex];
  
      await Countdown.updateOne(
        { _id: countdownId },
        { $push: { comments: { commentText, username, createdAt } } },
        { runValidators: true }
      );
    }
  
    console.log('all done!');
    process.exit(0);
});