import Navbar from "@/components/Navbar.jsx";
import CateringSection from "@/components/CateringSection.jsx";
import Footer from "@/components/Footer.jsx";
import Cart from "@/components/Cart.jsx";

const Catering = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      <CateringSection />
      <Footer />
      <Cart />
    </div>
  );
};

export default Catering;
