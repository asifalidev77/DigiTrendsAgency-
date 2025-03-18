"use client"

import type React from "react"
import { Box, Container, Grid, Typography, TextField, Link, IconButton, useMediaQuery, styled } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import SendIcon from "@mui/icons-material/Send"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import SupportAgentIcon from "@mui/icons-material/SupportAgent"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import PinterestIcon from "@mui/icons-material/Pinterest"

// Custom styled components
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#0a0a0a",
  color: "#fff",
  padding: theme.spacing(4, 0),
}))

const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "1.8rem",
  display: "flex",
  alignItems: "center",
}))

const LogoIcon = styled("div")({
  backgroundColor: "#c1ff2d",
  width: 40,
  height: 40,
  borderRadius: "10px",
  marginRight: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

const NavLink = styled(Link)(({ theme }) => ({
  color: "#fff",
  textDecoration: "none",
  marginRight: theme.spacing(3),
  "&:hover": {
    color: "#c1ff2d",
  },
}))

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: "#0a0a0a",
  backgroundColor: "#c1ff2d",
  margin: theme.spacing(0, 0.5),
  "&:hover": {
    backgroundColor: "#a8e626",
  },
}))

const RoundIconContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#c1ff2d",
  borderRadius: "50%",
  width: 48,
  height: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: theme.spacing(2),
}))

const SubscribeButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#c1ff2d",
  borderRadius: "50%",
  padding: theme.spacing(1),
  "&:hover": {
    backgroundColor: "#a8e626",
  },
}))

const CopyrightBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#c1ff2d",
  color: "#0a0a0a",
  padding: theme.spacing(1, 4),
  borderRadius: 50,
  display: "inline-block",
  fontWeight: "bold",
  marginTop: theme.spacing(3),
}))

const StyledDivider = styled(Box)(({ theme }) => ({
  height: 1,
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  margin: theme.spacing(3, 0),
}))

const Footer: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <FooterContainer>
      <Container sx={{ maxWidth: "1300px" }}>
        <Grid container spacing={4}>
          {/* Logo and Tagline */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <LogoIcon>
                <Box
                  component="img"
                  src="/placeholder.svg?height=24&width=24"
                  alt="Artistic Logo"
                  sx={{ width: 24, height: 24 }}
                />
              </LogoIcon>
              <LogoText variant="h5" component="div">
                artistic.
              </LogoText>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
              Quality Work with No Limits. Freelancing Made Simple and Successful.
            </Typography>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Need Help?
            </Typography>
            <Box sx={{ display: "flex", mb: 2 }}>
              <RoundIconContainer>
                <SupportAgentIcon sx={{ color: "#0a0a0a" }} />
              </RoundIconContainer>
              <Box>
                <Typography variant="body2">+123.456.7890</Typography>
                <Typography variant="body2">domain@gmail.com</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Location Information */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Need Help?
            </Typography>
            <Box sx={{ display: "flex", mb: 2 }}>
              <RoundIconContainer>
                <LocationOnIcon sx={{ color: "#0a0a0a" }} />
              </RoundIconContainer>
              <Box>
                <Typography variant="body2">123 Creative Lane London,</Typography>
                <Typography variant="body2">SW11AA United Kingdom</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Newsletter Subscription */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Subscribe Newsletter
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <TextField
                variant="outlined"
                placeholder="Enter Your Email"
                size="small"
                fullWidth
                InputProps={{
                  sx: {
                    borderRadius: 50,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    color: "#fff",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(255, 255, 255, 0.1)",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(255, 255, 255, 0.2)",
                    },
                  },
                }}
              />
              <SubscribeButton sx={{ ml: 1 }}>
                <SendIcon sx={{ color: "#0a0a0a" }} />
              </SubscribeButton>
            </Box>
          </Grid>
        </Grid>

        <StyledDivider />

        {/* Navigation Links */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              {["Home", "About Us", "Services", "Blog", "Projects", "Contact"].map((item) => (
                <NavLink key={item} href="#" sx={{ mb: isMobile ? 1 : 0 }}>
                  {item}
                </NavLink>
              ))}
            </Box>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" }, alignItems: "center" }}>
              <Typography variant="body2" sx={{ mr: 2 }}>
                Follow us on :
              </Typography>
              <SocialIconButton size="small">
                <PinterestIcon fontSize="small" />
              </SocialIconButton>
              <SocialIconButton size="small">
                <TwitterIcon fontSize="small" />
              </SocialIconButton>
              <SocialIconButton size="small">
                <FacebookIcon fontSize="small" />
              </SocialIconButton>
              <SocialIconButton size="small">
                <InstagramIcon fontSize="small" />
              </SocialIconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CopyrightBox>
            <Typography variant="body2">Copyright © 2025 All Rights Reserved.</Typography>
          </CopyrightBox>
        </Box>
      </Container>
    </FooterContainer>
  )
}

export default Footer