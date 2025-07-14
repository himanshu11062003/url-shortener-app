import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import UrlShortenerForm from "./components/UrlShortenerForm";
import UrlTable from "./components/UrlTable";
import { getStoredUrls, updateClickData } from "./utils/urlUtils";
import { logEvent } from "./utils/logger";

function RedirectPage() {
  const { shortCode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const urls = getStoredUrls();
    const matched = urls.find(u => u.shortCode === shortCode);
    if (matched) {
      const now = new Date();
      const expiry = new Date(matched.expiresAt);
      if (now <= expiry) {
        updateClickData(shortCode);
        logEvent("REDIRECT", `Redirected to ${matched.originalUrl}`, { shortCode });
        window.location.href = matched.originalUrl;
      } else {
        alert("This link has expired.");
        navigate("/");
      }
    } else {
      alert("Invalid link");
      navigate("/");
    }
  }, [shortCode]);

  return <p>Redirecting...</p>;
}

function HomePage() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" mt={2} mb={2}>URL Shortener</Typography>
      <UrlShortenerForm onNewUrl={() => window.location.reload()} />
      <UrlTable />
    </Container>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:shortCode" element={<RedirectPage />} />
      </Routes>
    </Router>
  );
}