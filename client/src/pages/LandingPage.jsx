
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import EVChargingHero from "@/components/LandingPage/EVChargingHero";
import FeatureGrid from "@/components/LandingPage/FeatureGrid";
import CallToAction from "@/components/LandingPage/CallToAction";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <EVChargingHero />
      <FeatureGrid />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default LandingPage;