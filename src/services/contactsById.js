import Contacts from "../db/models/Contacts.js"

const getContactById = async (id) => {
    // throw new Error ('no result found')
    const contactById = await Contacts.findOne({_id: id})
    return contactById;
    }

export default getContactById