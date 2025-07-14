import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

const Login = ({ onLoginSuccess }) => {
  const [accessCode, setAccessCode] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (accessCode === "CZypQK") {
      localStorage.setItem("token", "dummy_token");
      onLoginSuccess();
    } else {
      setError("Invalid access code");
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 10 }}>
      <Typography variant="h5" gutterBottom>
        Enter Access Code
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Access Code"
          variant="outlined"
          fullWidth
          value={accessCode}
          onChange={(e) => setAccessCode(e.target.value)}
          error={!!error}
          helperText={error}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" fullWidth>
          Login
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
