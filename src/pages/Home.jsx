import Navbar from "@/components/Navbar.jsx";
import Hero from "@/components/Hero.jsx";
import FoodSlider from "@/components/FoodSlider.jsx";
import PopularItems from "@/components/PopularItems.jsx";
import AboutSection from "@/components/AboutSection.jsx";
import CateringSection from "@/components/CateringSection.jsx";
import CustomerReviews from "@/components/CustomerReviews.jsx";
import DeliveryInfo from "@/components/DeliveryInfo.jsx";
import ContactSection from "@/components/ContactSection.jsx";
import Footer from "@/components/Footer.jsx";
import Cart from "@/components/Cart.jsx";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FoodSlider />
      <PopularItems />
      <AboutSection />
      <CateringSection />
      <CustomerReviews />
      <DeliveryInfo />
      <ContactSection />
      <Footer />
      <Cart />
    </div>
  );
};

export default Home;
