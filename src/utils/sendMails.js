import nodemailer from 'nodemailer';

import { SMTP } from '../constants/auth.js';
import { getEnvVar } from '../utils/getEnvVar.js';

console.log('SMTP_HOST из process.env:', process.env.SMTP_HOST);

const transporter = nodemailer.createTransport({
  host: getEnvVar(SMTP.SMTP_HOST),
  port: Number(getEnvVar(SMTP.SMTP_PORT)),
  auth: {
    user: getEnvVar(SMTP.SMTP_USER),
    pass: getEnvVar(SMTP.SMTP_PASSWORD),
  },
  tls: {
    rejectUnauthorized: false
  },
});

export const sendEmail = async (options) => {
  return await transporter.sendMail(options);
};