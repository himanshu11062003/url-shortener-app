// src/utils/UrlUtils.js
export const generateShortUrl = (url) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let shortCode = "";
  for (let i = 0; i < 6; i++) {
    shortCode += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return { originalUrl: url, shortUrl: `https://sho.rt/${shortCode}` };
};
