import React from "react";
import Header from "./Header"; // Adjust the path if needed
import { Box, Typography, Button, Container } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        "&::before": {
            content: "''",
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
      }}
    >
      {/* Header */}
      <Header />

      {/* Hero Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          px: { xs: 3, md: 6, lg: 12},
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 10, color: "white" }}>
          <Typography variant="subtitle1" color="#fff" sx={{ textTransform: "uppercase", letterSpacing: 1 }}>
            Welcome to Our Freelance Solutions
          </Typography>
          <Typography variant="h3" fontWeight={300} mt={2} fontSize={60}>
            Hire top professionals to transform your {" "}
            <Typography component="span" color="#bff747" fontWeight={700} fontSize={32}>
              ideas into reality
            </Typography>
          </Typography>
          <Typography variant="body1" color="gray.200" mt={2}>
            Freelancing has become a transformative career choice in today's dynamic work environment,
            offering individuals the freedom to work independently and pursue diverse projects across industries.
          </Typography>

          {/* Buttons */}
          <Box sx={{ mt: 4, display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, justifyContent: "center" }}>
            <Button variant="contained" color="success" size="large">
              Contact Now
            </Button>
            <Button variant="contained" color="secondary" size="large">
              Explore More
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroSection;
