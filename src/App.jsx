import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  CircularProgress,
} from "@mui/material";
import Login from "./components/login";
import UrlShortenerForm from "./components/UrlShortenerForm";
import UrlTable from "./components/UrlTable";

function App() {
  const [urls, setUrls] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(null); // null = loading

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLoginSuccess = () => {
    sessionStorage.setItem("token", "mock-token");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  if (isLoggedIn === null) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            URL Shortener
          </Typography>
          {isLoggedIn && (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        {isLoggedIn ? (
          <>
            <UrlShortenerForm urls={urls} setUrls={setUrls} />
            <Box mt={4}>
              <UrlTable urls={urls} />
            </Box>
          </>
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} />
        )}
      </Container>
    </Box>
  );
}

export default App;
