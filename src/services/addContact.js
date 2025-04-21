import Contacts from "../db/models/Contacts.js"

const addContact = async (payload) => {
    // throw new Error ('no result found')
    const newContact = await Contacts.create(payload)
    return newContact;
    }

export default addContact