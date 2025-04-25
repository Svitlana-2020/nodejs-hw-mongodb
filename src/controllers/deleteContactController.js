import createHttpError from "http-errors";
import deleteContact from "../services/deleteContact.js";

const delContact = async (req, res) => {
    const{_id: userId} = req.user;
    const {contactId} = req.params;
    console.log("Deleting contact:", contactId);
    const data = await deleteContact({_id:contactId, userId});

    if(!data) {
        throw createHttpError (404, "Contact not found")
    }

    res.status(204).send();
}

export default delContact