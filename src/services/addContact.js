import Contacts from '../db/models/Contacts.js';

const addContact = async (payload, userId) => {
  // throw new Error ('no result found')
  const newContact = await Contacts.create({ ...payload, userId });
  return newContact;
};

export default addContact;
