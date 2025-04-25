import {updateContact} from "../services/updateContact.js";

import createHttpError from "http-errors";

const patchContact = async (req, res) => {
  const{_id: userId} = req.user;
  const {contactId} = req.params;
  console.log("PATCH contact:", contactId);
  console.log("Body:", req.body);
  const result = await updateContact({ _id: contactId, userId }, req.body);

  if (!result) {
    throw createHttpError (404, "Contact not found")
  }

    res.status(200).json({
      status: 200,
      message: "Successfully patched a contact!",
      data: result,
    })
}

export default patchContact