// src/utils/logger.js
export const logger = (tag, message) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${tag}] ${message}`);
};
