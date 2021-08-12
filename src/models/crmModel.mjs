import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const GameSchema = new Schema({
  title: String,
  genre: String,
  platform: String,
  release: String,
  image: String,
  rating: Number, 
});
