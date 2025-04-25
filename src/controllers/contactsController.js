import { parsePaginationParams } from "../utils/parsePaginationParams.js";

import getAllContacts from "../services/contacts.js";
import {contactsSortFields} from "../db/models/Contacts.js"
import {parseSortParams} from "../utils/parseSortParams.js"

const allContactsController =
    async (req, res) => {
        const{_id: userId} = req.user;
        const paginationParams = parsePaginationParams(req.query);
        const sortParams = parseSortParams(req.query, contactsSortFields)
        
            const data = await getAllContacts({...paginationParams, ...sortParams, userId});
        res.json({
            status: 200,
  message: "Successfully found contacts!",
  data,
})
       }

export default allContactsController
