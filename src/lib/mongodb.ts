// mongodb.ts
import mongoose from 'mongoose';

const uri = process.env.mongodbUri

if (!uri) {
  throw new Error('Add Mongo URI to .env.local')
}

const connectToDb = async () => {
    await mongoose.connect(uri).then(() => console.log('mongo db connected'));
};

export default connectToDb;