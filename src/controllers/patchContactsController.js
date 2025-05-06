import {updateContact} from "../services/updateContact.js";

import createHttpError from "http-errors";
import { saveFileToCloudinary } from "../utils/saveFileToCloudinary.js";
import { getEnvVar } from "../utils/getEnvVar.js";

const patchContact = async (req, res) => {
  const{_id: userId} = req.user;
  const {contactId} = req.params;
  const photo = req.file;

  let photoUrl;

  if (photo) {
    if (getEnvVar('ENABLE_CLOUDINARY') === 'true') {
      photoUrl = await saveFileToCloudinary(photo);
    } else {
      photoUrl = await saveFileToUploadDir(photo);
    }
  }

  const result = await updateContact({ _id: contactId, userId }, req.body, photoUrl);

  if (!result) {
    throw createHttpError (404, "Contact not found")
  }

    res.status(200).json({
      status: 200,
      message: "Successfully patched a contact!",
      data: result,
    })
    console.log(result);
}

export default patchContact