"use client"

import type React from "react"
import { Box, Container, Typography, Grid, Card, useMediaQuery } from "@mui/material"
import { styled } from "@mui/material/styles"
import { useTheme } from "@mui/material/styles"

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

const ServiceCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "highlighted",
})(({ theme, highlighted }: { theme: any; highlighted?: boolean }) => ({
  backgroundColor: highlighted ? "#c1ff2d" : "rgba(20, 20, 20, 0.8)",
  color: highlighted ? "#000" : "#fff",
  borderRadius: "20px",
  padding: theme.spacing(4),
  height: "100%",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}))

const ServiceIcon = styled(Box, {
  shouldForwardProp: (prop) => prop !== "highlighted",
})(({ theme, highlighted }: { theme: any; highlighted?: boolean }) => ({
  color: highlighted ? "#000" : "#c1ff2d",
  marginBottom: theme.spacing(2),
}))

const DecorativeElement = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "-150px",
  top: "50%",
  transform: "translateY(-50%)",
  width: "300px",
  height: "300px",
  opacity: 0.5,
  zIndex: 0,
  [theme.breakpoints.down("lg")]: {
    left: "-200px",
    opacity: 0.3,
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}))

// Service data
const services = [
  {
    id: 1,
    title: "Content Creation:",
    description:
      "Crafting compelling, SEO-friendly content that resonates with audience From blogs to website copy, we deliver engaging.",
    highlighted: true,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M20 10 L20 30" stroke="currentColor" strokeWidth="2" />
        <path d="M10 20 L30 20" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Graphic Design:",
    description:
      "Crafting compelling, SEO-friendly content that resonates with audience From blogs to website copy, we deliver engaging.",
    highlighted: false,
    icon: (
      <Box sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        □△
        <br />
        ○≡
      </Box>
    ),
  },
  {
    id: 3,
    title: "Digital Marketing:",
    description:
      "Crafting compelling, SEO-friendly content that resonates with audience From blogs to website copy, we deliver engaging.",
    highlighted: false,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M10 15 L10 25" stroke="currentColor" strokeWidth="2" />
        <path d="M30 15 L30 25" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Web Designing:",
    description:
      "Crafting compelling, SEO-friendly content that resonates with audience From blogs to website copy, we deliver engaging.",
    highlighted: false,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="15" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="10" y="25" width="20" height="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="15" y="30" width="10" height="2" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
]

const WhatWeDo: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.down("md"))
  const isLaptop = useMediaQuery(theme.breakpoints.down("lg"))

  return (
    <SectionContainer>
      <Container sx={{ maxWidth: "1300px", position: "relative", zIndex: 1 }}>
        {/* Decorative Element */}
        <DecorativeElement>
          <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M150,20 C200,20 240,60 240,110 C240,160 200,200 150,200 C100,200 60,160 60,110 C60,60 100,20 150,20 Z"
              stroke="#c1ff2d"
              strokeWidth="5"
              fill="none"
              opacity="0.2"
              transform="rotate(0 150 150)"
            />
            <path
              d="M150,30 C195,30 230,65 230,110 C230,155 195,190 150,190 C105,190 70,155 70,110 C70,65 105,30 150,30 Z"
              stroke="#c1ff2d"
              strokeWidth="5"
              fill="none"
              opacity="0.3"
              transform="rotate(30 150 150)"
            />
            <path
              d="M150,40 C190,40 220,70 220,110 C220,150 190,180 150,180 C110,180 80,150 80,110 C80,70 110,40 150,40 Z"
              stroke="#c1ff2d"
              strokeWidth="5"
              fill="none"
              opacity="0.4"
              transform="rotate(60 150 150)"
            />
            <path
              d="M150,50 C185,50 210,75 210,110 C210,145 185,170 150,170 C115,170 90,145 90,110 C90,75 115,50 150,50 Z"
              stroke="#c1ff2d"
              strokeWidth="5"
              fill="none"
              opacity="0.5"
              transform="rotate(90 150 150)"
            />
          </svg>
        </DecorativeElement>

        {/* Header */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
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
                WHAT WE DO
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                lineHeight: 1.2,
              }}
            >
              Empowering success
              <br />
              <GreenText>freelance</GreenText> solutions
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "center",
              }}
            >
              <Typography variant="body1" sx={{ opacity: 0.8 }}>
                Empowering your business with expert freelance solutions tailored to your unique needs From creative
                design and content writing to digital marketing development, we provide high-quality services that drive
                success.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Service Cards */}
        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} key={service.id}>
              <ServiceCard highlighted={service.highlighted}>
                <ServiceIcon highlighted={service.highlighted}>{service.icon}</ServiceIcon>
                <Typography variant="h5" component="h3" sx={{ fontWeight: "bold", mb: 2 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ opacity: service.highlighted ? 0.8 : 0.7 }}>
                  {service.description}
                </Typography>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  )
}

export default WhatWeDo