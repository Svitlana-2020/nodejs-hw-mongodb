import Contacts from "../db/models/Contacts.js"

const getAllContacts = async () => {
const allContacts = await Contacts.find()
return allContacts;
}

export default getAllContacts