import Contacts from "../db/models/Contacts.js"

const deleteContact = async (contactId) => {
    // throw new Error ('no result found')
    const noContact = await Contacts.findOneAndDelete({_id: contactId});
    return noContact;
    }

export default deleteContact