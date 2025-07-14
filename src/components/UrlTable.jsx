import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from "@mui/material";

function UrlTable({ urls }) {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Your Shortened URLs
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Short URL</TableCell>
            <TableCell>Original URL</TableCell>
            <TableCell>Clicks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {urls.map((url) => (
            <TableRow key={url._id}>
              <TableCell>
                <a href={url.longUrl} target="_blank" rel="noopener noreferrer">
                  {url.shortUrl}
                </a>
              </TableCell>
              <TableCell>{url.longUrl}</TableCell>
              <TableCell>{url.clicks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default UrlTable;
