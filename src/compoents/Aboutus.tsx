"use client"

import type React from "react"
import { Box, Container, Typography, Grid, Button, Avatar, useMediaQuery, AvatarGroup } from "@mui/material"
import { styled } from "@mui/material/styles"
import { useTheme } from "@mui/material/styles"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"

// Custom styled components
const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#0a0a0a",
  color: "#fff",
  padding: theme.spacing(8, 0),
  position: "relative",
  overflow: "hidden",
}))

const GreenText = styled("span")({
  color: "#c1ff2d",
})

const GreenIcon = styled(Box)(({ theme }) => ({
  color: "#c1ff2d",
  display: "flex",
  alignItems: "center",
  marginRight: theme.spacing(1.5),
  "& svg": {
    fontSize: "1.2rem",
  },
}))

const FeatureItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(2),
  "& svg": {
    color: "#c1ff2d",
    marginRight: theme.spacing(1),
  },
}))

const CircularBadge = styled(Box)(({ theme }) => ({
  width: 120,
  height: 120,
  borderRadius: "50%",
  border: "1px solid rgba(193, 255, 45, 0.3)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  margin: "0 auto",
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    width: 100,
    height: 100,
  },
}))

const CircularText = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  animation: "rotate 20s linear infinite",
  "@keyframes rotate": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
}))

const CircleCenter = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: "50%",
  backgroundColor: "#c1ff2d",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
  [theme.breakpoints.down("md")]: {
    width: 50,
    height: 50,
  },
}))

const ImageContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "main",
})(({ theme, main }: { theme: any; main?: boolean }) => ({
  borderRadius: "20px",
  overflow: "hidden",
  position: "relative",
  height: main ? 400 : 200,
  width: "100%",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  [theme.breakpoints.down("md")]: {
    height: main ? 300 : 150,
  },
}))

const FeatureBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
  borderRadius: "10px",
  backgroundColor: "rgba(255, 255, 255, 0.05)",
}))

const FeatureIcon = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(193, 255, 45, 0.1)",
  borderRadius: "50%",
  width: 40,
  height: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: theme.spacing(2),
  "& svg": {
    color: "#c1ff2d",
  },
}))

const MoreButton = styled(Button)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  color: "#fff",
  borderRadius: "30px",
  padding: theme.spacing(1, 3),
  textTransform: "none",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
}))

const GreenButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#c1ff2d",
  color: "#000",
  borderRadius: "50%",
  minWidth: "auto",
  width: 40,
  height: 40,
  padding: 0,
  marginLeft: theme.spacing(2),
  "&:hover": {
    backgroundColor: "#a8e626",
  },
}))

const AboutUs: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <SectionContainer>
      <Container sx={{ maxWidth: "1300px" }}>
        <Grid container spacing={4}>
          {/* Left side with images */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative", height: "100%" }}>
              {/* Main image */}
              <ImageContainer
                
                sx={{
                  position: { md: "absolute" },
                  top: 0,
                  left: 0,
                  width: { xs: "100%", md: "70%" },
                  mb: { xs: 2, md: 0 },
                }}
              >
                <img
                  src="/about-img-1.jpg"
                  alt="Woman working on laptop"
                />
              </ImageContainer>

              {/* Circular badge */}
              <CircularBadge
                sx={{
                  position: { xs: "relative", md: "absolute" },
                  top: { md: "15%" },
                  right: { md: "5%" },
                  zIndex: 2,
                  my: { xs: 4, md: 0 },
                }}
              >
                <CircularText>
                  <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                    <text fontSize="7">
                      <textPath xlinkHref="#circle" startOffset="0%">
                        EXPLORE MORE • EXPLORE MORE • EXPLORE MORE •
                      </textPath>
                    </text>
                  </svg>
                </CircularText>
                <CircleCenter>
                  <ArrowOutwardIcon sx={{ color: "#000", fontSize: "1.8rem" }} />
                </CircleCenter>
              </CircularBadge>

              {/* Second image */}
              <ImageContainer
                sx={{
                  position: { md: "absolute" },
                  top: { md: "45%" },
                  right: { md: "0" },
                  width: { xs: "100%", md: "60%" },
                  mb: { xs: 2, md: 0 },
                }}
              >
                <img
                  src="/about-img-2.jpg"
                  alt="Man smiling in office"
                />
              </ImageContainer>

              {/* Third image */}
              <ImageContainer
                sx={{
                  position: { md: "absolute" },
                  bottom: { md: "0" },
                  left: { md: "15%" },
                  width: { xs: "100%", md: "70%" },
                }}
              >
                <img
                  src="/about-img-3.jpg"
                  alt="Team working together"
                />
              </ImageContainer>

              {/* Customer count */}
              <Box
                sx={{
                  position: { md: "absolute" },
                  bottom: { md: "-40px" },
                  left: { md: "0" },
                  display: "flex",
                  alignItems: "center",
                  mt: { xs: 4, md: 0 },
                }}
              >
                <AvatarGroup max={4} sx={{ mr: 2 }}>
                  <Avatar src="/placeholder.svg?height=40&width=40" />
                  <Avatar src="/placeholder.svg?height=40&width=40" />
                  <Avatar src="/placeholder.svg?height=40&width=40" />
                  <Avatar src="/placeholder.svg?height=40&width=40" />
                  <Avatar src="/placeholder.svg?height=40&width=40" />
                </AvatarGroup>
                <Box>
                  <Box
                    sx={{
                      bgcolor: "#c1ff2d",
                      color: "#000",
                      borderRadius: "50%",
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "0.75rem",
                      mb: 1,
                    }}
                  >
                    15k
                  </Box>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    500+ <GreenText>Happy Customer</GreenText>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right side with content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ pl: { md: 4 } }}>
              <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#c1ff2d",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      fontSize: "1.2rem",
                      mr: 1,
                      display: "inline-flex",
                    }}
                  >
                    ✱
                  </Box>
                  ABOUT US
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  lineHeight: 1.2,
                  mb: 4,
                }}
              >
                Driving <GreenText>growth</GreenText> through smarter SEO
              </Typography>

              {/* Features */}
              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6}>
                  <FeatureItem>
                    <GreenIcon>
                      <CheckCircleOutlineIcon />
                    </GreenIcon>
                    <Typography variant="body1">Client-Centric Approach</Typography>
                  </FeatureItem>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FeatureItem>
                    <GreenIcon>
                      <CheckCircleOutlineIcon />
                    </GreenIcon>
                    <Typography variant="body1">Seamless Communication</Typography>
                  </FeatureItem>
                </Grid>
              </Grid>

              {/* Feature boxes */}
              <Grid container spacing={3} sx={{ mb: 6 }}>
                <Grid item xs={12} sm={6}>
                  <FeatureBox>
                    <FeatureIcon>
                      <Box sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>□△</Box>
                    </FeatureIcon>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 0.5 }}>
                        Dedicated To Client Success
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        We prioritize your goals and results
                      </Typography>
                    </Box>
                  </FeatureBox>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FeatureBox>
                    <FeatureIcon>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="#c1ff2d" strokeWidth="2" />
                        <path d="M8 12L11 15L16 9" stroke="#c1ff2d" strokeWidth="2" />
                      </svg>
                    </FeatureIcon>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 0.5 }}>
                        Affordable Service With Quality
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        Premium results without premium prices
                      </Typography>
                    </Box>
                  </FeatureBox>
                </Grid>
              </Grid>

              {/* Team member */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: { xs: 2, sm: 0 },
                  }}
                >
                  <Avatar
                    src="/author-image.jpg?height=60&width=60"
                    alt="Sarah Mitchell"
                    sx={{ width: 60, height: 60, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Sarah Mitchell
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.7 }}>
                      Marketing Director
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <MoreButton variant="contained">More About</MoreButton>
                  <GreenButton variant="contained">
                    <ArrowOutwardIcon sx={{ fontSize: "1.2rem" }} />
                  </GreenButton>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </SectionContainer>
  )
}

export default AboutUs