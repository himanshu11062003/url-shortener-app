import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

function UrlShortenerForm({ urls, setUrls }) {
  const [longUrl, setLongUrl] = useState("");
  const [customCode, setCustomCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!longUrl.startsWith("http://") && !longUrl.startsWith("https://")) {
      alert("Please enter a valid URL starting with http:// or https://");
      return;
    }

    const code = customCode || Math.random().toString(36).substring(2, 8);
    const newShortUrl = `https://short.ly/${code}`;

    const newEntry = {
      _id: Date.now().toString(),
      longUrl,
      shortUrl: newShortUrl,
      clicks: 0,
    };

    alert(`Short URL: ${newShortUrl}`);
    setUrls([newEntry, ...urls]);
    setLongUrl("");
    setCustomCode("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" gap={2}>
      <TextField
        label="Long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Custom Code (Optional)"
        value={customCode}
        onChange={(e) => setCustomCode(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Shorten
      </Button>
    </Box>
  );
}

export default UrlShortenerForm;
