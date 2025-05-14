import Contacts from "../db/models/Contacts.js"

const deleteContact = async ({ _id, userId }) => {
    // throw new Error ('no result found')
    const noContact = await Contacts.findOneAndDelete({_id, userId});
    return noContact;
    }

export default deleteContact