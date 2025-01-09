import { Box, Button } from "@chakra-ui/react";
import React from "react";
import Hero from "@/components/Hero";
import Discover from "@/components/Discover";
import RoomsInclude from "@/components/RoomsInclude";
import Adventure from "@/components/Adventure";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";



import EnjoyStay from '@/components/EnjoyStay'
import TestimonialsSection from '@/components/Testimonials'
import Experience from "@/components/Experience";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Discover />
      <RoomsInclude />
      <EnjoyStay />
      <TestimonialsSection />
      <Adventure />
      <Experience />

      <Footer />
    </Box>
  );
};

export default Home;
