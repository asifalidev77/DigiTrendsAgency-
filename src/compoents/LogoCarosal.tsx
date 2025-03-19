"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Box, useMediaQuery } from "@mui/material"
import { styled } from "@mui/material/styles"
import { useTheme } from "@mui/material/styles"

// Custom styled components
const MarqueeContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#c1ff2d",
  overflow: "hidden",
  width: "100%",
  position: "relative",
}))

const MarqueeContent = styled(Box)({
  display: "flex",
  position: "relative",
  width: "max-content",
})

const LogoItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2, 4),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1.5, 3),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1, 2),
  },
}))

const LogoImage = styled("img")(({ theme }) => ({
  height: "30px",
  [theme.breakpoints.down("md")]: {
    height: "24px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "20px",
  },
  objectFit: "contain",
}))

// Logo data with actual brand logos
const logos = [
  {
    id: 1,
    name: "Upwork",
    image: "/placeholder.svg?height=30&width=100",
    alt: "Upwork logo",
  },
  {
    id: 2,
    name: "Fiverr",
    image: "/placeholder.svg?height=30&width=100",
    alt: "Fiverr logo",
  },
  {
    id: 3,
    name: "Behance",
    image: "/placeholder.svg?height=30&width=100",
    alt: "Behance logo",
  },
  {
    id: 4,
    name: "Trello",
    image: "/placeholder.svg?height=30&width=100",
    alt: "Trello logo",
  },
  {
    id: 5,
    name: "Slack",
    image: "/placeholder.svg?height=30&width=100",
    alt: "Slack logo",
  },
  {
    id: 6,
    name: "Asana",
    image: "/placeholder.svg?height=30&width=100",
    alt: "Asana logo",
  },
]

const LogoMarqueeAdvanced: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.down("md"))

  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const [animationSpeed, setAnimationSpeed] = useState(1)
  const [contentWidth, setContentWidth] = useState(0)
  const [animationDuration, setAnimationDuration] = useState(30)

  // Create a duplicate set of logos for seamless looping
  const allLogos = [...logos, ...logos, ...logos]

  // Calculate content width and set animation duration
  useEffect(() => {
    if (!contentRef.current) return

    const calculateWidth = () => {
      const width = contentRef.current?.offsetWidth || 0
      setContentWidth(width)

      // Adjust speed based on screen size
      let speed = 1
      if (isMobile) {
        speed = 1.5 // Faster on mobile
      } else if (isTablet) {
        speed = 1.2 // Medium speed on tablet
      }

      setAnimationSpeed(speed)
      setAnimationDuration(width / 50 / speed) // Adjust divisor to change base speed
    }

    calculateWidth()
    window.addEventListener("resize", calculateWidth)

    return () => {
      window.removeEventListener("resize", calculateWidth)
    }
  }, [isMobile, isTablet])

  // Animation with requestAnimationFrame for smoother performance
  useEffect(() => {
    if (!contentRef.current || !containerRef.current || contentWidth === 0) return

    let startTime: number | null = null
    let animationFrameId: number
    let currentTranslate = 0
    const logoSetWidth = contentWidth / 3

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime

      // Calculate how far we've moved
      currentTranslate = (elapsed / 1000) * 50 * animationSpeed // pixels per second

      // Reset when we've moved one full set of logos
      if (currentTranslate >= logoSetWidth) {
        startTime = timestamp
        currentTranslate = 0
      }

      if (contentRef.current) {
        contentRef.current.style.transform = `translateX(-${currentTranslate}px)`
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [contentWidth, animationSpeed])

  return (
    <MarqueeContainer ref={containerRef}>
      <MarqueeContent ref={contentRef}>
        {allLogos.map((logo, index) => (
          <LogoItem key={`${logo.id}-${index}`}>
            <LogoImage src={logo.image} alt={logo.alt} />
          </LogoItem>
        ))}
      </MarqueeContent>
    </MarqueeContainer>
  )
}

export default LogoMarqueeAdvanced

