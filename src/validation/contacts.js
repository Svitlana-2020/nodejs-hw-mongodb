import joi from "joi";
import { typeList } from "../constants/contacts.js";

export const contactAddScheme = joi.object ({
    name: joi.string().min(3).max(20).required(),
    phoneNumber: joi.string().min(3).max(20).required(),
    email: joi.string().min(3).max(20),
    isFavourite: joi.boolean(),
    contactType: joi.string().valid(...typeList).required(),
})

export const contactUpdateScheme = joi.object ({
    name: joi.string().min(3).max(20),
    phoneNumber: joi.string().min(3).max(20),
    email: joi.string().min(3).max(20),
    isFavourite: joi.boolean(),
    contactType: joi.string().valid(...typeList),
})

