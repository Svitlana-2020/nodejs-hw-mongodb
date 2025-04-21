import Contacts from "../db/models/Contacts.js";

export const updateContact = async(_id, payload, options = {}) => {
    const {upsert} = options;
    const rawResult = await Contacts.findOneAndUpdate({_id}, payload, {
        new: true,
        upsert,
    })
return rawResult;
}