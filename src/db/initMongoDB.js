import mongoose from 'mongoose';
import { getEnvVar } from '../utils/getEnvVar.js';

export const initMongoDB = async () => {
  const user = getEnvVar('MONGODB_USER');
  const url = getEnvVar('MONGODB_URL');
  const password = getEnvVar('MONGODB_PASSWORD');
  const db = getEnvVar('MONGODB_DB');
  try {
    await mongoose.connect(
      `mongodb+srv://${user}:${password}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`,
    );
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
