import getAllContacts from "../services/contacts.js";

const allContactsController =
    async (req, res) => {
            const data = await getAllContacts();
        res.json({
            status: 200,
  message: "Successfully found contacts!",
  data,
})
       }

export default allContactsController
