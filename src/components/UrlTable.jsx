import { useEffect, useState } from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from "@mui/material";
import { getStoredUrls } from "../utils/urlUtils";

export default function UrlTable() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    setUrls(getStoredUrls());
  }, []);

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Original URL</TableCell>
            <TableCell>Short URL</TableCell>
            <TableCell>Expiry</TableCell>
            <TableCell>Clicks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {urls.map((entry, idx) => (
            <TableRow key={idx}>
              <TableCell>{entry.originalUrl}</TableCell>
              <TableCell>
                <a href={`/${entry.shortCode}`}>{entry.shortCode}</a>
              </TableCell>
              <TableCell>{new Date(entry.expiresAt).toLocaleTimeString()}</TableCell>
              <TableCell>{entry.clicks.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}