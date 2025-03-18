"use client"

import type React from "react"
import { Box, Container, Typography, Button, Grid, Card, useMediaQuery, styled } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import CameraAltIcon from "@mui/icons-material/CameraAlt"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import PaymentIcon from "@mui/icons-material/Payment"
import AccessTimeIcon from "@mui/icons-material/AccessTime"

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

const PricingCard = styled(Card)<{ featured?: boolean }>(({ theme, featured }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  color: "#fff",
  borderRadius: "20px",
  padding: theme.spacing(4),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  backdropFilter: "blur(10px)",
  border: featured ? "1px solid rgba(193, 255, 45, 0.3)" : "none",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
  },
}))

const ContactButton = styled(Button)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  color: "#fff",
  borderRadius: "30px",
  padding: theme.spacing(1, 3),
  textTransform: "none",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  "& .MuiButton-endIcon": {
    backgroundColor: "#c1ff2d",
    borderRadius: "50%",
    width: 36,
    height: 36,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: theme.spacing(2),
    color: "#000",
  },
}))

const GetStartedButton = styled(Button)<{ featured?: boolean }>(({ theme, featured }) => ({
  backgroundColor: featured ? "#c1ff2d" : "rgba(255, 255, 255, 0.1)",
  color: featured ? "#000" : "#fff",
  borderRadius: "30px",
  padding: theme.spacing(1.5, 3),
  textTransform: "none",
  marginTop: "auto",
  "&:hover": {
    backgroundColor: featured ? "#b1ef1d" : "rgba(255, 255, 255, 0.2)",
  },
}))

const FeatureItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(2),
  "& svg": {
    color: "#c1ff2d",
    marginRight: theme.spacing(1.5),
  },
}))

const IconCircle = styled(Box)<{ featured?: boolean }>(({ theme, featured }) => ({
  backgroundColor: featured ? "#c1ff2d" : "rgba(255, 255, 255, 0.1)",
  borderRadius: "50%",
  width: 56,
  height: 56,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(2),
  "& svg": {
    color: featured ? "#000" : "#c1ff2d",
    fontSize: "1.8rem",
  },
}))

const BenefitItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& svg": {
    color: "#c1ff2d",
    marginRight: theme.spacing(1.5),
    fontSize: "1.5rem",
  },
}))

const FeatureBox = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  borderRadius: "10px",
  padding: theme.spacing(3),
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}))

// Pricing data
const pricingPlans = [
  {
    id: 1,
    name: "Regular Plan",
    price: 29,
    featured: false,
    features: [
      "Hourly And Fixed Rates",
      "Dedicated Freelancer Support",
      "Expert Consultation Included",
      "Flexible Payment Plans",
    ],
  },
  {
    id: 2,
    name: "Standard Plan",
    price: 39,
    featured: true,
    features: [
      "Hourly And Fixed Rates",
      "Dedicated Freelancer Support",
      "Expert Consultation Included",
      "Flexible Payment Plans",
    ],
  },
  {
    id: 3,
    name: "Premium Plan",
    price: 49,
    featured: false,
    features: [
      "Hourly And Fixed Rates",
      "Dedicated Freelancer Support",
      "Expert Consultation Included",
      "Flexible Payment Plans",
    ],
  },
]

const benefits = [
  {
    id: 1,
    text: "Get 30 day free trial",
    icon: <CalendarMonthIcon />,
  },
  {
    id: 2,
    text: "No any hidden fees pay",
    icon: <PaymentIcon />,
  },
  {
    id: 3,
    text: "You can cancel anytime",
    icon: <AccessTimeIcon />,
  },
]

const PricingSection: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <SectionContainer>
      <Container sx={{ maxWidth: "1300px" }}>
        {/* Header */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="body1"
                sx={{
                  color: "#c1ff2d",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Box
                  component="span"
                  sx={{
                    fontSize: "0.8rem",
                    mr: 1,
                    display: "inline-flex",
                  }}
                >
                  ✱
                </Box>
                PRICING PLAN
              </Typography>

              <Typography variant="h2" sx={{ fontWeight: "bold", fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
                Flexible <GreenText>pricing</GreenText> plan
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "flex-start", sm: "center" },
                justifyContent: { xs: "flex-start", md: "flex-end" },
                height: "100%",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  mb: { xs: 2, sm: 0 },
                  mr: { xs: 0, sm: 2 },
                  maxWidth: "400px",
                }}
              >
                Our flexible pricing plans are designed to meet diverse needs, offering customized solutions that fit
                your.
              </Typography>

              <ContactButton variant="contained" endIcon={<ArrowOutwardIcon />}>
                Contact Us
              </ContactButton>
            </Box>
          </Grid>
        </Grid>

        {/* Pricing Cards */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {pricingPlans.map((plan) => (
            <Grid item xs={12} md={4} key={plan.id}>
              <PricingCard featured={plan.featured}>
                <IconCircle featured={plan.featured}>
                  <CameraAltIcon />
                </IconCircle>

                <Typography
                  variant="h3"
                  sx={{
                    color: "#c1ff2d",
                    fontWeight: "bold",
                    fontSize: "3rem",
                    mb: 1,
                  }}
                >
                  ${plan.price}
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "1rem",
                      color: "#fff",
                      opacity: 0.7,
                      ml: 1,
                    }}
                  >
                    /Per Month
                  </Typography>
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    mb: 3,
                  }}
                >
                  {plan.name}
                </Typography>

                <FeatureBox>
                  {plan.features.map((feature, index) => (
                    <FeatureItem key={index}>
                      <CheckCircleOutlineIcon />
                      <Typography variant="body1">{feature}</Typography>
                    </FeatureItem>
                  ))}
                </FeatureBox>

                <GetStartedButton variant="contained" fullWidth featured={plan.featured}>
                  Get Started
                </GetStartedButton>
              </PricingCard>
            </Grid>
          ))}
        </Grid>

        {/* Benefits */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            gap: { xs: 2, sm: 4, md: 6 },
          }}
        >
          {benefits.map((benefit) => (
            <BenefitItem key={benefit.id}>
              {benefit.icon}
              <Typography variant="body1">{benefit.text}</Typography>
            </BenefitItem>
          ))}
        </Box>
      </Container>
    </SectionContainer>
  )
}

export default PricingSection

