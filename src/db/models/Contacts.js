import { Schema, model } from 'mongoose';
import { typeList } from '../../constants/contacts.js';

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
      enum: typeList,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const Contacts = model('Contact', contactsSchema);

export const contactsSortFields = [
  'name',
  'phoneNumber',
  'email',
  'isFavourite',
  'contactType',
];

export default Contacts;
