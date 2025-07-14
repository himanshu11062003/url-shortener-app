const logs = [];

export function logEvent(type, message, meta = {}) {
  const timestamp = new Date().toISOString();
  const entry = { type, message, timestamp, ...meta };
  logs.push(entry);
}

export function getLogs() {
  return logs;
}