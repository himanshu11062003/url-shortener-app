const storageKey = "shortUrls";

export function generateShortCode(length = 5) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

export function getStoredUrls() {
  return JSON.parse(localStorage.getItem(storageKey)) || [];
}

export function saveUrlMapping(mapping) {
  const urls = getStoredUrls();
  urls.push(mapping);
  localStorage.setItem(storageKey, JSON.stringify(urls));
}

export function updateClickData(shortCode) {
  const urls = getStoredUrls();
  const updated = urls.map(url => {
    if (url.shortCode === shortCode) {
      url.clicks.push({
        time: new Date().toISOString(),
        source: document.referrer || "direct",
        location: "India"
      });
    }
    return url;
  });
  localStorage.setItem(storageKey, JSON.stringify(updated));
}