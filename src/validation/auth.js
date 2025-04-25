import joi from "joi";
import { typeList } from "../constants/contacts.js";
import { emailRegexp } from "../constants/auth.js";

export const authRegisterScheme = joi.object ({
    username: joi.string().min(3).max(20).required(),
    email: joi.string().pattern(emailRegexp).required(),
    password: joi.string().min(3).max(20).required(),
})

export const authLoginScheme = joi.object ({
    email: joi.string().pattern(emailRegexp).required(),
    password: joi.string().min(3).max(20).required(),
})


