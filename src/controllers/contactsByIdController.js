import Contacts from '../services/contacts.js';
import getContactById from '../services/contactsById.js';
import createHttpError from 'http-errors';

const contactsByIdController = async (req, res) => {
    const { contactId } = req.params;
    const data = await getContactById(contactId);
    
    if (!data) {
      throw createHttpError(404, "Contact not found")
    }

    res.json({
      status: 200,
      message: `Successfully found contact with id: ${contactId}!`,
      data: data,
    });
};

export default contactsByIdController;
