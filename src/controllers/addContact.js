import createHttpError from "http-errors";
import addContact from "../services/addContact.js";
import {contactAddScheme} from "../validation/contacts.js"

const postContact = async (req, res) => {
  // console.log(req.body);
  const{_id: userId} = req.user;

  // console.log('User ID:', userId);

    const data = await addContact({...req.body, userId});

    res.status(201).json({
    status: 201,
		message: "Successfully created a contact!",
		data,
    })
}

export default postContact