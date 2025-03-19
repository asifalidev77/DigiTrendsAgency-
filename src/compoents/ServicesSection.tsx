"use client"

import type React from "react"
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  useMediaQuery,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import { useTheme } from "@mui/material/styles"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"

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

const ServiceCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(20, 20, 20, 0.8)",
  color: "#fff",
  borderRadius: "20px",
  overflow: "hidden",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}))

const CardBottom = styled(CardActions)(({ theme }) => ({
  backgroundColor: "rgba(40, 40, 40, 0.8)",
  padding: theme.spacing(2),
  marginTop: "auto",
}))

const ReadMoreButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  textTransform: "none",
  padding: 0,
  "&:hover": {
    backgroundColor: "transparent",
    "& .MuiSvgIcon-root": {
      transform: "translateX(4px)",
    },
  },
  "& .MuiSvgIcon-root": {
    transition: "transform 0.3s ease",
    marginLeft: theme.spacing(1),
  },
}))

const SeeAllButton = styled(Button)(({ theme }) => ({
  backgroundColor: "rgba(40, 40, 40, 0.8)",
  color: "#fff",
  borderRadius: "30px",
  padding: theme.spacing(1, 3),
  textTransform: "none",
  "&:hover": {
    backgroundColor: "rgba(60, 60, 60, 0.8)",
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
  marginLeft: theme.spacing(1),
  "&:hover": {
    backgroundColor: "#a8e626",
  },
}))

const ServiceIcon = styled(Box)(({ theme }) => ({
  color: "#c1ff2d",
  fontSize: "2rem",
  marginBottom: theme.spacing(2),
}))

const FreeTag = styled(Box)(({ theme }) => ({
  backgroundColor: "#c1ff2d",
  color: "#000",
  borderRadius: "20px",
  padding: theme.spacing(0.5, 2),
  fontWeight: "bold",
  display: "inline-block",
  marginRight: theme.spacing(1),
}))

// Service data
const services = [
  {
    id: 1,
    title: "E-Commerce Management",
    description: "Streamlining your online store, optimizing and product listings.",
    image:
      "/service-image-1.jpg",
    icon: (
      <Box sx={{ fontSize: "1.5rem", fontWeight: "bold", color: "#c1ff2d" }}>
        □△
        <br />
        ○≡
      </Box>
    ),
  },
  {
    id: 2,
    title: "Social Media Management",
    description: "Streamlining your online store, optimizing and product listings.",
    image:
      "/service-image-2.jpg",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="15" stroke="#c1ff2d" strokeWidth="2" fill="none" />
        <path d="M20 10 L20 30" stroke="#c1ff2d" strokeWidth="2" />
        <path d="M10 20 L30 20" stroke="#c1ff2d" strokeWidth="2" />
        <circle cx="20" cy="20" r="5" stroke="#c1ff2d" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Web Development",
    description: "Streamlining your online store, optimizing and product listings.",
    image: "/service-image-2.jpg",
    icon: (
      <Box sx={{ fontSize: "1.5rem", fontWeight: "bold", color: "#c1ff2d" }}>
        □<br />
        □□
      </Box>
    ),
  },
]

const ServicesSection: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <SectionContainer>
      <Container sx={{ maxWidth: "1300px" }}>
        {/* Header */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={7}>
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
                SERVICES
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
              Our popular <GreenText>services</GreenText>
            </Typography>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "center",
              }}
            >
              <Typography variant="body1" sx={{ mb: 3, opacity: 0.8 }}>
                Explore our range of in-demand services designed to deliver exceptional results and meet your unique.
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <SeeAllButton variant="contained">See All Services</SeeAllButton>
                <GreenButton variant="contained">
                  <ArrowOutwardIcon sx={{ fontSize: "1.2rem" }} />
                </GreenButton>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Service Cards */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {services.map((service) => (
            <Grid item xs={12} md={4} key={service.id}>
              <ServiceCard>
                <CardMedia component="img" height="220" image={service.image} alt={service.title} />
                <CardContent sx={{ p: 3, flexGrow: 1 }}>
                  <ServiceIcon>{service.icon}</ServiceIcon>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: "bold", mb: 2 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.7 }}>
                    {service.description}
                  </Typography>
                </CardContent>
                <CardBottom>
                  <ReadMoreButton>
                    Read More
                    <ArrowOutwardIcon fontSize="small" />
                  </ReadMoreButton>
                </CardBottom>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            textAlign: "center",
            py: 2,
          }}
        >
          <FreeTag>Free</FreeTag>
          <Typography variant="body1" sx={{ mr: 1 }}>
            Let's make something great work together.
          </Typography>
          <Typography
            component="a"
            href="#"
            variant="body1"
            sx={{
              color: "#c1ff2d",
              fontWeight: "bold",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Get Free Quote
          </Typography>
        </Box>
      </Container>
    </SectionContainer>
  )
}

export default ServicesSection

