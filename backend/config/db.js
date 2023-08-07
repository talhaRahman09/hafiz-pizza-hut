import mongoose from 'mongoose';

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(process.env.MONGO_URL);
    console.log(`Succesfully Connect to ${conn.connection.host}😍`);
  } catch (error) {
    console.log(`${error} while connecting to DataBase`.bgRed.white);
  }
};
