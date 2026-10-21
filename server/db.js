const { MongoClient } = require('mongodb');
require('dotenv').config();

let db = null;

async function connectDB() {
  if (db) {
    return db;
  }
  try {
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    db = client.db(process.env.DB_NAME);
    console.log('Successfully connected to MongoDB');
    return db;
  } catch (error) {
    console.log('MongoDB connection failure:', error);
    process.exit(1);
  }
}

function getCollection(collectionName) {
  if (!db) {
    throw new Error('Database not connected. Call connectDB() first.');
  }
  return db.collection(collectionName);
}

module.exports = { connectDB, getCollection };
