import Navbar from "@/components/Navbar.jsx";
import AboutSection from "@/components/AboutSection.jsx";
import CustomerReviews from "@/components/CustomerReviews.jsx";
import Footer from "@/components/Footer.jsx";
import Cart from "@/components/Cart.jsx";

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      <AboutSection showFull={true} />
      <CustomerReviews />
      <Footer />
      <Cart />
    </div>
  );
};

export default About;
