import Contacts from '../db/models/Contacts.js';

const addContact = async (payload, photoUrl) => {
  console.log(payload);

  if (photoUrl) {
    payload.photo = photoUrl;
}
  // throw new Error ('no result found')
  const newContact = await Contacts.create({ ...payload});
  return newContact;
};

export default addContact;
