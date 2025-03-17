'use client';
import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
const services = [
  {
    title: 'E-Commerce Management',
    description: 'Streamlining your online store, optimizing and product listings.',
    image: '/service-image-1.jpg',
    icon: '🔳',
  },
  {
    title: 'Social Media Management',
    description: 'Streamlining your online store, optimizing and product listings.',
    image: '/service-image-2.jpg',
    icon: '🟩',
  },
  {
    title: 'Web Development',
    description: 'Streamlining your online store, optimizing and product listings.',
    image: '/service-image-3.jpg',
    icon: '🟦',
  },
];

const ServicesSection = () => {
  return (
    <Box sx={{ background: 'black', py: 8, display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ width: '1300px', textAlign: 'center', px: 2 }}>
        <Typography variant="h6" sx={{ color: '#a3ff73', textTransform: 'uppercase' }}>
          Services
        </Typography>
        <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold', mt: 1 }}>
          Our popular <span style={{ color: '#a3ff73' }}>services</span>
        </Typography>
        <Typography sx={{ color: 'white', mt: 1, maxWidth: '700px', mx: 'auto' }}>
          Explore our range of in-demand services designed to deliver exceptional results and meet your unique needs.
        </Typography>
        
        <Grid container spacing={3} mt={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ background: '#121212', borderRadius: '16px', overflow: 'hidden' }}>
                <Box sx={{ position: 'relative', height: '200px' }}>
                  <img src={service.image} alt={service.title} />
                </Box>
                <CardContent>
                  <Typography variant="h5" sx={{ color: 'white', display: 'flex', alignItems: 'center', gap: 1 }}>
                    <span>{service.icon}</span> {service.title}
                  </Typography>
                  <Typography sx={{ color: 'gray', mt: 1 }}>{service.description}</Typography>
                  <Button
                    variant="contained"
                    sx={{ mt: 2, background: '#a3ff73', color: 'black', textTransform: 'none' }}
                  >
                    Read More ➜
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <Box mt={4}>
          <Button
            variant="contained"
            sx={{ background: 'gray', color: 'white', borderRadius: '24px', px: 4 }}
          >
            See All Services ➜
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesSection;
