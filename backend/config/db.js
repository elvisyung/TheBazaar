import mongoose from 'mongoose';
import path from 'path';

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
console.log(
  'here...',
  path.resolve(__dirname, '../../.env'),
  process.env.MONGO_URI
);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
