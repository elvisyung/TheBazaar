import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(
      'mongodb+srv://elvis1234:Wolfboy99@thebazaar.8f8f2by.mongodb.net/thebazaar?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
      }
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
