"use client"

import type React from "react"
import { useState } from "react"
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  useMediaQuery,
  styled,
} from "@mui/material"
import { useTheme } from "@mui/material/styles"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"

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

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  color: "#fff",
  borderRadius: "10px",
  marginBottom: theme.spacing(2),
  boxShadow: "none",
  "&:before": {
    display: "none",
  },
  "&.Mui-expanded": {
    margin: `0 0 ${theme.spacing(2)}px 0`,
  },
}))

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: theme.spacing(1, 3),
  "& .MuiAccordionSummary-content": {
    margin: theme.spacing(1, 0),
  },
}))

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(1, 3, 3, 3),
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  borderBottomLeftRadius: "10px",
  borderBottomRightRadius: "10px",
}))

const HelpBubble = styled(Box)(({ theme }) => ({
  backgroundColor: "#c1ff2d",
  color: "#000",
  padding: theme.spacing(2, 3),
  borderRadius: "15px",
  position: "absolute",
  top: "20%",
  right: "10%",
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    top: "10%",
    right: "5%",
    padding: theme.spacing(1, 2),
  },
}))

const QuestionIcon = styled(Box)(({ theme }) => ({
  backgroundColor: "#000",
  color: "#c1ff2d",
  width: 40,
  height: 40,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
  fontWeight: "bold",
  marginRight: theme.spacing(1),
}))

const ImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "100%",
  [theme.breakpoints.down("md")]: {
    height: "400px",
    marginBottom: theme.spacing(4),
  },
}))

const RoundedImage = styled(Box)(({ theme }) => ({
  borderRadius: "20px",
  overflow: "hidden",
  position: "relative",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}))

const Decoration = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  backgroundColor: "rgba(193, 255, 45, 0.1)",
  filter: "blur(40px)",
  zIndex: 0,
}))

// FAQ data
const faqData = [
  {
    question: "What services do freelancers offer?",
    answer:
      "Freelancers offer a wide range of services including web development, graphic design, content writing, digital marketing, video editing, and more. You can find specialists for almost any digital project you need.",
  },
  {
    question: "How do I hire a freelancer?",
    answer:
      "You can browse freelancer profiles, review their portfolios, and reach out to discuss your project. Once you find the right match.",
  },
  {
    question: "What are the payment methods available?",
    answer:
      "We support various payment methods including credit/debit cards, PayPal, bank transfers, and cryptocurrency. All transactions are secure and protected.",
  },
  {
    question: "Can I negotiate the pricing?",
    answer:
      "Yes, pricing is often negotiable. You can discuss your budget with freelancers and find a mutually beneficial arrangement based on the scope of work.",
  },
]

const FAQSection: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.down("md"))

  const [expanded, setExpanded] = useState<string | false>("panel1")

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <SectionContainer>
      {/* Decorative elements */}
      <Decoration sx={{ top: "10%", left: "5%" }} />
      <Decoration sx={{ bottom: "10%", right: "5%" }} />
      <Decoration sx={{ top: "50%", left: "30%", width: "100px", height: "100px" }} />

      <Container sx={{ maxWidth: "1300px" }}>
        <Grid container spacing={4}>
          {/* Left side with images */}
          <Grid item xs={12} md={5}>
            <ImageContainer>
              <RoundedImage
                sx={{
                  width: "80%",
                  height: "50%",
                  position: "absolute",
                  top: "5%",
                  left: "0",
                  zIndex: 1,
                }}
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/our-faqs-image-1.jpg-b4mHBzpnmcoRFGX3AWkpUA8zGoKsAT.jpeg"
                  alt="Man working on laptop"
                />
              </RoundedImage>

              <RoundedImage
                sx={{
                  width: "80%",
                  height: "50%",
                  position: "absolute",
                  bottom: "5%",
                  right: "0",
                  zIndex: 1,
                }}
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/our-faqs-image-2.jpg-sUu4A0VRlcbQU9zCpdK3g2N0epDPVZ.jpeg"
                  alt="Woman working on laptop"
                />
              </RoundedImage>

              <HelpBubble>
                <QuestionIcon>?</QuestionIcon>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                    Need Help?
                  </Typography>
                  <Typography variant="body2">Ask!</Typography>
                </Box>
              </HelpBubble>
            </ImageContainer>
          </Grid>

          {/* Right side with FAQ */}
          <Grid item xs={12} md={7}>
            <Box sx={{ mb: 4, display: "flex", alignItems: "center" }}>
              <Typography
                variant="body1"
                sx={{
                  color: "#c1ff2d",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  mr: 2,
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
                FAQ
              </Typography>
            </Box>

            <Typography variant="h2" sx={{ mb: 4, fontWeight: "bold", fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
              Get your <GreenText>answers</GreenText>
            </Typography>

            {faqData.map((faq, index) => (
              <StyledAccordion
                key={`panel${index + 1}`}
                expanded={expanded === `panel${index + 1}`}
                onChange={handleChange(`panel${index + 1}`)}
              >
                <StyledAccordionSummary
                  expandIcon={
                    expanded === `panel${index + 1}` ? (
                      <RemoveIcon sx={{ color: "#c1ff2d" }} />
                    ) : (
                      <AddIcon sx={{ color: "#c1ff2d" }} />
                    )
                  }
                >
                  <Typography sx={{ fontWeight: "bold" }}>{faq.question}</Typography>
                </StyledAccordionSummary>
                <StyledAccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </StyledAccordionDetails>
              </StyledAccordion>
            ))}
          </Grid>
        </Grid>
      </Container>
    </SectionContainer>
  )
}

export default FAQSection;