import Navbar from "@/components/Navbar.jsx";
import ContactSection from "@/components/ContactSection.jsx";
import DeliveryInfo from "@/components/DeliveryInfo.jsx";
import Footer from "@/components/Footer.jsx";
import Cart from "@/components/Cart.jsx";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      <ContactSection showFull={true} />
      <DeliveryInfo />
      <Footer />
      <Cart />
    </div>
  );
};

export default Contact;
