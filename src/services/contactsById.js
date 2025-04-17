import Contacts from '../db/models/Contacts.js';

const getContactById = async (id) => {
  const contactById = await Contacts.findOne({ _id: id });
  return contactById;
};

export default getContactById;
