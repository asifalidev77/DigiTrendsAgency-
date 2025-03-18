import HeroSection from "@/compoents/HeroSection";
import ServicesSection from "../compoents/ServicesSection";
import Services from "@/compoents/Services";
import FAQSection from "@/compoents/Faq";
import Footer from "@/compoents/Footer";
import Testimonials from "@/compoents/Testimonial";
import PricingSection from "@/compoents/Pricing";
import VideoShowcase from "@/compoents/VideoShowcase";
export default function Home() {
  return (
    <>
<HeroSection/>
<ServicesSection/>
<Services/>
<VideoShowcase/>
<PricingSection/>
<Testimonials/>
<FAQSection/>
<Footer/>
    </>
  );
};

