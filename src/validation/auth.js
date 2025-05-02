import joi from "joi";
import { typeList } from "../constants/contacts.js";
import { emailRegexp } from "../constants/auth.js";

export const authRegisterScheme = joi.object ({
    name: joi.string().min(3).max(20).required(),
    email: joi.string().pattern(emailRegexp).required(),
    password: joi.string().min(3).max(20).required(),
})

export const authLoginScheme = joi.object ({
    email: joi.string().pattern(emailRegexp).required(),
    password: joi.string().min(3).max(20).required(),
})

export const requestResetEmailSchema = joi.object({
    email: joi.string().email().required(),
  });

  export const resetPasswordSchema = joi.object({
    password: joi.string().required(),
    token: joi.string().required(),
  });


