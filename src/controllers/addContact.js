import createHttpError from "http-errors";
import addContact from "../services/addContact.js";
import {contactAddScheme} from "../validation/contacts.js"

const postContact = async (req, res) => {
    const data = await addContact(req.body);

    res.status(201).json({
    status: 201,
		message: "Successfully created a contact!",
		data,
    })
}

export default postContact