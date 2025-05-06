import Contacts from "../db/models/Contacts.js";

export const updateContact = async(_id, payload, photoUrl, options = {}) => {
    const {upsert} = options;
    if (photoUrl) {
        payload.photo = photoUrl;
    }
    const rawResult = await Contacts.findOneAndUpdate({_id}, payload, {
        new: true,
        upsert,
    })
return rawResult;
}