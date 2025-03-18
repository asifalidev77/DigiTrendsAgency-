import { Box, Grid, Typography, Card } from "@mui/material";

const Services = () => {
  return (
    <Box sx={{ backgroundColor: "#000", py: 6, display: "flex", justifyContent: "center" }}>
      <Box sx={{ maxWidth: "1300px", width: "100%", px: 2 }}>
        <Typography variant="h4" color="white" textAlign="center" mb={4}>
          Empowering success <span style={{ color: "#BADA55" }}>freelance</span> solutions
        </Typography>
        
        <Grid container spacing={3}>
          {/* Content Creation Card */}
          <Grid item xs={12} md={6} lg={6}>
            <Card sx={{ backgroundColor: "#BADA55", p: 3, borderRadius: 2 }}>
              <Typography variant="h6" fontWeight="bold">Content Creation:</Typography>
              <Typography>
                Crafting compelling, SEO-friendly content that resonates with the audience.
              </Typography>
            </Card>
          </Grid>

          {/* Graphic Design Card */}
          <Grid item xs={12} md={6} lg={6}>
            <Card sx={{ backgroundColor: "#111", color: "white", p: 3, borderRadius: 2 }}>
              <Typography variant="h6" fontWeight="bold">Graphic Design:</Typography>
              <Typography>
                High-quality design services tailored to your brand needs.
              </Typography>
            </Card>
          </Grid>

          {/* Digital Marketing Card */}
          <Grid item xs={12} md={6} lg={6}>
            <Card sx={{ backgroundColor: "#111", color: "white", p: 3, borderRadius: 2 }}>
              <Typography variant="h6" fontWeight="bold">Digital Marketing:</Typography>
              <Typography>
                Optimized marketing strategies to enhance your online presence.
              </Typography>
            </Card>
          </Grid>

          {/* Web Designing Card */}
          <Grid item xs={12} md={6} lg={6}>
            <Card sx={{ backgroundColor: "#111", color: "white", p: 3, borderRadius: 2 }}>
              <Typography variant="h6" fontWeight="bold">Web Designing:</Typography>
              <Typography>
                Creative and functional web design solutions for businesses.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;
