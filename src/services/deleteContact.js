import Contacts from "../db/models/Contacts.js"

const deleteContact = async (contactId, userId) => {
    // throw new Error ('no result found')
    const noContact = await Contacts.findOneAndDelete({_id: contactId, userId});
    return noContact;
    }

export default deleteContact