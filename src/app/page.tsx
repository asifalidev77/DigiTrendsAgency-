import HeroSection from "@/compoents/HeroSection";
import ServicesSection from "../compoents/ServicesSection";
import WhatWeDo from "@/compoents/Services";
import FAQSection from "@/compoents/Faq";
import Footer from "@/compoents/Footer";
import Testimonials from "@/compoents/Testimonial";
import PricingSection from "@/compoents/Pricing";
import VideoShowcase from "@/compoents/VideoShowcase";
import AboutUs from "@/compoents/Aboutus";
import LogoMarqueeAdvanced from "@/compoents/LogoCarosal";
export default function Home() {
  return (
    <>
<HeroSection/>
<LogoMarqueeAdvanced/>
<AboutUs/>
<WhatWeDo/>
<ServicesSection/>
<WhatWeDo/>
<VideoShowcase/>
<PricingSection/>
<Testimonials/>
<FAQSection/>
<Footer/>
    </>
  );
};

