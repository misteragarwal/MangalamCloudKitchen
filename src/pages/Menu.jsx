import Navbar from "@/components/Navbar.jsx";
import MenuSection from "@/components/MenuSection.jsx";
import Footer from "@/components/Footer.jsx";
import Cart from "@/components/Cart.jsx";

const Menu = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      <MenuSection showAll={true} />
      <Footer />
      <Cart />
    </div>
  );
};

export default Menu;
