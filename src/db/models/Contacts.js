import { Schema, model } from 'mongoose';

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: String,
      required: true,
    },

    email: {
      type: String,
    },

    isFavourite: {
      type: Boolean,
      default: false,
      required: true,
    },

    contactType: {
      type: String,
      default: 'personal',
      enum: ['work', 'home', 'personal'],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Contacts = model('Contact', contactsSchema);

export default Contacts;
