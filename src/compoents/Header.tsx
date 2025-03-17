'use client'
import { useState } from "react";
import { AppBar, Toolbar, Box, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesAnchor, setServicesAnchor] = useState<null | HTMLElement>(null);
  const openServices = Boolean(servicesAnchor);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="sticky" sx={{ background: "transparent", maxWidth: "1300px", margin: "auto", boxShadow: "none" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Box component="img" src="/logo.png" alt="Logo" sx={{ height: 40 }} />
        
        {/* Navigation Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          <Link href="/" passHref><Box sx={{ '&:hover': { color: "#bff747" } }}>Home</Box></Link>
          <Link href="/about-us" passHref><Box sx={{ '&:hover': { color: "#bff747" } }}>About Us</Box></Link>
          
          <Box>
            <Link href="#" onClick={(e) => setServicesAnchor(e.currentTarget)} passHref>
              <Box sx={{ display: "flex", alignItems: "center", '&:hover': { color: "#bff747" } }}>
                Services <ExpandMoreIcon sx={{ fontSize: 16 }} />
              </Box>
            </Link>
            <Menu anchorEl={servicesAnchor} open={openServices} onClose={() => setServicesAnchor(null)}>
              <MenuItem onClick={() => setServicesAnchor(null)}><Link href="/services/web-development" passHref>Web Development</Link></MenuItem>
              <MenuItem onClick={() => setServicesAnchor(null)}><Link href="/services/seo" passHref>SEO</Link></MenuItem>
              <MenuItem onClick={() => setServicesAnchor(null)}><Link href="/services/gmb" passHref>GMB</Link></MenuItem>
              <MenuItem onClick={() => setServicesAnchor(null)}><Link href="/services/graphic-design" passHref>Graphic Design</Link></MenuItem>
            </Menu>
          </Box>
          
          <Link href="/contact-us" passHref><Box sx={{ '&:hover': { color: "#bff747" } }}>Contact Us</Box></Link>
        </Box>
        
        {/* Icons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton><FacebookIcon sx={{ color: "#bff747" }} /></IconButton>
          <IconButton><TwitterIcon sx={{ color: "#bff747" }} /></IconButton>
          <IconButton><InstagramIcon sx={{ color: "#bff747" }} /></IconButton>
          <IconButton color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
      
      {/* Sidebar Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, background: "#111", height: "100vh", color: "white", padding: 2 }}>
          <IconButton onClick={toggleDrawer(false)} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
          <List>
            <ListItem>
              <ListItemIcon><PhoneIcon sx={{ color: "#bff747" }} /></ListItemIcon>
              <ListItemText primary="+123 456 789" />
            </ListItem>
            <ListItem>
              <ListItemIcon><EmailIcon sx={{ color: "#bff747" }} /></ListItemIcon>
              <ListItemText primary="info@domainname.com" />
            </ListItem>
            <ListItem>
              <ListItemIcon><LocationOnIcon sx={{ color: "#bff747" }} /></ListItemIcon>
              <ListItemText primary="123 Creative Lane, London, UK" />
            </ListItem>
          </List>
          
          <Box sx={{ display: "flex", gap: 1, justifyContent: "center", marginTop: 2 }}>
            <IconButton><XIcon sx={{ color: "#bff747" }} /></IconButton>
            <IconButton><FacebookIcon sx={{ color: "#bff747" }} /></IconButton>
            <IconButton><TwitterIcon sx={{ color: "#bff747" }} /></IconButton>
            <IconButton><InstagramIcon sx={{ color: "#bff747" }} /></IconButton>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
