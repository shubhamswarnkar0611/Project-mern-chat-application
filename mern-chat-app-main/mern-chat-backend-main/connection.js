const mongoose = require('mongoose');
require('dotenv').config();

const username = process.env.DB_USER
const password = process.env.DB_PW;



// mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.4o8zp.mongodb.net/chatAppMern?retryWrites=true&w=majority`, ()=> {
//   console.log('connected to mongodb')
// })



mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.4zyglzr.mongodb.net/?retryWrites=true&w=majority`).then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Connection to MongoDB failed:', err.message);
  })
