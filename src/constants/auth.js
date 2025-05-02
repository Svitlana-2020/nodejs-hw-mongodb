export const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const accessTokenLifeTime = 1000 * 60 * 15;
export const refreshTokenLifeTime = 1000 * 60 * 24 * 30;

export const SMTP = {
    SMTP_HOST: 'SMTP_HOST',
    SMTP_PORT: 'SMTP_PORT',
    SMTP_USER: 'SMTP_USER',
    SMTP_PASSWORD: 'SMTP_PASSWORD',
    SMTP_FROM: 'SMTP_FROM',
  };