import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { generateShortCode, saveUrlMapping } from "../utils/urlUtils";
import { logEvent } from "../utils/logger";

export default function UrlShortenerForm({ onNewUrl }) {
  const [url, setUrl] = useState("");
  const [validity, setValidity] = useState(30);
  const [customCode, setCustomCode] = useState("");

  const handleShorten = () => {
    if (!url.trim()) return alert("Enter a valid URL");

    const shortCode = customCode.trim() || generateShortCode();
    const expiryTime = new Date(Date.now() + validity * 60000).toISOString();

    const newEntry = {
      originalUrl: url,
      shortCode,
      createdAt: new Date().toISOString(),
      expiresAt: expiryTime,
      clicks: []
    };

    saveUrlMapping(newEntry);
    logEvent("SHORTEN", `Created short URL ${shortCode}`, { originalUrl: url });
    onNewUrl();
    setUrl("");
    setCustomCode("");
  };

  return (
    <Box display="flex" gap={2} my={2}>
      <TextField label="Long URL" value={url} onChange={e => setUrl(e.target.value)} fullWidth />
      <TextField label="Custom Code (optional)" value={customCode} onChange={e => setCustomCode(e.target.value)} />
      <TextField
        label="Validity (mins)"
        type="number"
        value={validity}
        onChange={e => setValidity(Number(e.target.value))}
        sx={{ width: 120 }}
      />
      <Button variant="contained" onClick={handleShorten}>Shorten</Button>
    </Box>
  );
}