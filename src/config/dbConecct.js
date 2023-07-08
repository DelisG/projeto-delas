import mongoose from 'mongoose'

mongoose.connect(
  "mongodb+srv://admin:19821995@cluster0.q0ygpfy.mongodb.net/senac"
);

let db = mongoose.connection;

export default db;