"use client"

import type React from "react"
import { useState } from "react"
import { Box, Container, Typography, Button, Grid, Card, Avatar, useMediaQuery, styled } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"
import StarIcon from "@mui/icons-material/Star"

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

const TestimonialCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  color: "#fff",
  borderRadius: "20px",
  padding: theme.spacing(4),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  backdropFilter: "blur(10px)",
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

const StyledRating = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "0.5rem",
})

const StarIconStyled = styled(StarIcon)({
  color: "#c1ff2d",
  fontSize: "1.2rem",
  marginRight: "2px",
})

const PaginationDot = styled(Box)<{ active?: boolean }>(({ theme, active }) => ({
  width: 8,
  height: 8,
  borderRadius: "50%",
  backgroundColor: active ? "#c1ff2d" : "rgba(255, 255, 255, 0.3)",
  margin: theme.spacing(0, 0.5),
  cursor: "pointer",
  transition: "all 0.3s ease",
}))

const Decoration = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: "5%",
  bottom: "15%",
  width: "300px",
  height: "300px",
  opacity: 0.5,
  zIndex: 0,
}))

// Testimonial data
const testimonials = [
  {
    id: 1,
    rating: 5,
    title: "Professional and friendly!",
    content:
      "The team transformed our brand's online presence with creativity and precision. The results exceeded our expectations! Their digital marketing strategies helped us reach a broader audience and significantly boosted our sales.",
    author: "Emma Johnson",
    position: "Co. Founder",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    rating: 5,
    title: "Professional and friendly!",
    content:
      "The team transformed our brand's online presence with creativity and precision. The results exceeded our expectations! Their digital marketing strategies helped us reach a broader audience and significantly boosted our sales.",
    author: "Dani Watson",
    position: "Managing Director",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    rating: 5,
    title: "Exceptional service!",
    content:
      "Working with this team has been a game-changer for our business. Their attention to detail and innovative approach helped us stand out in a competitive market. Highly recommended for anyone looking to elevate their brand.",
    author: "Michael Chen",
    position: "Marketing Director",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

const Testimonials: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.down("md"))

  const [activePage, setActivePage] = useState(0)
  const itemsPerPage = isTablet ? 1 : 2
  const pageCount = Math.ceil(testimonials.length / itemsPerPage)

  const handlePageChange = (page: number) => {
    setActivePage(page)
  }

  // Get current testimonials
  const currentTestimonials = testimonials.slice(activePage * itemsPerPage, activePage * itemsPerPage + itemsPerPage)

  return (
    <SectionContainer>
      <Container sx={{ maxWidth: "1300px" }}>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            flexDirection: { xs: "column", sm: "row" },
            mb: 6,
          }}
        >
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
              TESTIMONIALS
            </Typography>

            <Typography variant="h2" sx={{ fontWeight: "bold", fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
              What our <GreenText>client says</GreenText>
            </Typography>
          </Box>

          <ContactButton variant="contained" endIcon={<ArrowOutwardIcon />} sx={{ mt: { xs: 2, sm: 0 } }}>
            Contact Us
          </ContactButton>
        </Box>

        {/* Testimonial Cards */}
        <Grid container spacing={3}>
          {currentTestimonials.map((testimonial) => (
            <Grid item xs={12} md={6} key={testimonial.id}>
              <TestimonialCard>
                <StyledRating>
                  {[...Array(5)].map((_, i) => (
                    <StarIconStyled key={i} />
                  ))}
                  <Typography variant="body2" sx={{ ml: 1, fontWeight: "bold" }}>
                    5.0
                  </Typography>
                </StyledRating>

                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  {testimonial.title}
                </Typography>

                <Typography variant="body1" sx={{ mb: 4, flex: 1 }}>
                  {testimonial.content}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pt: 2,
                    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <Avatar src={testimonial.avatar} alt={testimonial.author} sx={{ width: 48, height: 48, mr: 2 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      {testimonial.author}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.7 }}>
                      {testimonial.position}
                    </Typography>
                  </Box>
                </Box>
              </TestimonialCard>
            </Grid>
          ))}
        </Grid>

        {/* Pagination Dots */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 4,
          }}
        >
          {Array.from({ length: pageCount }).map((_, index) => (
            <PaginationDot key={index} active={index === activePage} onClick={() => handlePageChange(index)} />
          ))}
        </Box>
      </Container>

      {/* Decorative Element */}
      <Decoration>
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="100" stroke="#c1ff2d" strokeWidth="1" strokeOpacity="0.3" fill="none" />
          <circle cx="150" cy="150" r="120" stroke="#c1ff2d" strokeWidth="1" strokeOpacity="0.2" fill="none" />
          <circle cx="150" cy="150" r="140" stroke="#c1ff2d" strokeWidth="1" strokeOpacity="0.1" fill="none" />
          <circle cx="150" cy="150" r="80" stroke="#c1ff2d" strokeWidth="1" strokeOpacity="0.4" fill="none" />
          <circle cx="150" cy="150" r="60" stroke="#c1ff2d" strokeWidth="1" strokeOpacity="0.5" fill="none" />
        </svg>
      </Decoration>
    </SectionContainer>
  )
}

export default Testimonials

