import createHttpError from "http-errors";
import addContact from "../services/addContact.js";
import {contactAddScheme} from "../validation/contacts.js"
import { getEnvVar } from "../utils/getEnvVar.js";
import { saveFileToCloudinary } from "../utils/saveFileToCloudinary.js";
import { saveFileToUploadDir } from "../utils/saveFileToUploadDir.js";

const postContact = async (req, res) => {
  // console.log(req.body);
  const{_id: userId} = req.user;

  const photo = req.file;

    let photoUrl;
  
    if (photo) {
      if (getEnvVar('ENABLE_CLOUDINARY') === 'true') {
        photoUrl = await saveFileToCloudinary(photo);
      } else {
        photoUrl = await saveFileToUploadDir(photo);
      }
    }
  // console.log('User ID:', userId);

    const data = await addContact({...req.body, userId, photo: photoUrl});

    res.status(201).json({
    status: 201,
		message: "Successfully created a contact!",
		data,
    })
}

export default postContact