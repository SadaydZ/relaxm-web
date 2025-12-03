import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import ServicesSection from '../components/ServicesSection';
import TeamSection from '../components/TeamSection';
import TestimonialSection from '../components/TestimonialSection';
import DevelopmentBanner from '../components/DevelopmentBanner';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialSection />
      <DevelopmentBanner />
      <Footer />
    </div>
  );
};

export default Home;