import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

/*

model id 
model name
creator name
license type
category 
file data
file name
image address



*/

const ThreeD_Schema = new mongoose.Schema(
  {
    model_Id: {
      type: String,
      required: true,
    },
    model_Name: {
      type: String,
      required: true,
    },
    creator_Name: {
      type: String,
      required: true,
    },
    license_Type: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    file_Name: {
        type: String,
        required: true,
    },
    image_Address: {
        type: String, //Web address of image
        required: true,
    },
    file_Data: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
  },
  {
    timestamps: true, // Adds `createdAt` & `updatedAt` fields
  }
);


const ThreeD_Model = mongoose.model('3D Model', ThreeD_Schema);

export default ThreeD_Model;
