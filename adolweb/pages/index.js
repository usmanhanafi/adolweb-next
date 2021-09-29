import Layout from "./Layout";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import OfferSection from "../components/OfferSection";
import GetstartedSection from "../components/GetstartedSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const index = () => {
  return (
    <Layout title="Home">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <OfferSection />
      <GetstartedSection />
      <ContactSection />
      <Footer />
    </Layout>
  );
};

export default index;
