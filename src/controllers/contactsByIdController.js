import Contacts from "../services/contacts.js";
import getContactById from "../services/contactsById.js";

export const contactsByIdController =
    async (req, res) => {
        const  {contactId} = req.params; 
        const data = await getContactById(contactId); 

        if (!data) {
            return res.status(404).json({
                status: 404,
                message: 'Contact not found!',
            });
        }

        res.json({
                status: 200,
                message: `Successfully found contact with id: ${contactId}!`,
                data: data,
            })
}

