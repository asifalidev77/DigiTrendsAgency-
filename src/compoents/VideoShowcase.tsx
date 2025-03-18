"use client"

import type React from "react"
import { useState } from "react"
import { Box, Container, Typography, IconButton, Dialog, DialogContent, useMediaQuery } from "@mui/material"
import { styled } from "@mui/material/styles"
import { useTheme } from "@mui/material/styles"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import CloseIcon from "@mui/icons-material/Close"

// Custom styled components
const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#0a0a0a",
  color: "#fff",
  padding: theme.spacing(8, 0),
  position: "relative",
  overflow: "hidden",
}))

const VideoCard = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "24px",
  overflow: "hidden",
  cursor: "pointer",
  maxWidth: "1300px",
  margin: "0 auto",
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
  "&:hover .play-button": {
    transform: "scale(1.1)",
  },
}))

const VideoOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3),
  },
}))

const PlayButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#c1ff2d",
  color: "#000",
  width: 64,
  height: 64,
  position: "absolute",
  top: 24,
  right: 24,
  transition: "transform 0.3s ease",
  "&:hover": {
    backgroundColor: "#b1ef1d",
    transform: "scale(1.1)",
  },
  [theme.breakpoints.down("sm")]: {
    width: 48,
    height: 48,
    top: 16,
    right: 16,
  },
}))

const GreenText = styled("span")({
  color: "#c1ff2d",
})

const FeatureItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginRight: theme.spacing(3),
  "& svg": {
    color: "#c1ff2d",
    marginRight: theme.spacing(1),
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: theme.spacing(1),
    marginRight: 0,
  },
}))

const FeatureContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}))

const VideoShowcase: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <SectionContainer>
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <VideoCard onClick={handleOpen}>
          <Box
            component="img"
            src="/intro-video-bg.jpg"
            alt="Team collaboration"
            sx={{
              width: "100%",
              height: { xs: "400px", sm: "500px", md: "600px" },
              objectFit: "cover",
            }}
          />

          <VideoOverlay>
            <Box sx={{ position: "relative" }}>
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
                VIDEO
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                  mb: { xs: 3, sm: 4 },
                  maxWidth: "800px",
                  lineHeight: 1.2,
                }}
              >
                Showcasing success through dynamic <GreenText>videos</GreenText>
              </Typography>

              <FeatureContainer>
                <FeatureItem>
                  <CheckCircleOutlineIcon />
                  <Typography variant="body1">Client Success Stories Action</Typography>
                </FeatureItem>

                <FeatureItem>
                  <CheckCircleOutlineIcon />
                  <Typography variant="body1">Transforming Idea Into Visual</Typography>
                </FeatureItem>

                <FeatureItem>
                  <CheckCircleOutlineIcon />
                  <Typography variant="body1">Creative Freelance Services</Typography>
                </FeatureItem>
              </FeatureContainer>
            </Box>
          </VideoOverlay>

          <PlayButton className="play-button" aria-label="play video">
            <PlayArrowIcon sx={{ fontSize: { xs: 24, sm: 32 } }} />
          </PlayButton>
        </VideoCard>

        {/* Video Dialog */}
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="lg"
          fullWidth
          PaperProps={{
            sx: {
              backgroundColor: "transparent",
              boxShadow: "none",
              overflow: "hidden",
              position: "relative",
              height: { xs: "50vh", sm: "70vh" },
            },
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: -48,
              right: 0,
              color: "#fff",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          <DialogContent sx={{ p: 0, height: "100%", overflow: "hidden" }}>
            <Box
              component="iframe"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sx={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </DialogContent>
        </Dialog>
      </Container>
    </SectionContainer>
  )
}

export default VideoShowcase