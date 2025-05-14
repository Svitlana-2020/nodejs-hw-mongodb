import Contacts from "../db/models/Contacts.js"

const getContactById = async ({ contactId, userId }) => {
    // throw new Error ('no result found')
    const contactById = await Contacts.findOne({_id: contactId, userId})
    return contactById;
    }

export default getContactById