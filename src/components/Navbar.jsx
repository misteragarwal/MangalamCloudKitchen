import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/App.jsx";
import mkclogo from "@/assets/mkclogo.png";
import cklogo from "@/assets/ck.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { cartCount, setIsCartOpen } = useContext(CartContext);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Catering", href: "/catering" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <nav className="fixed m-2 top-0 left-0 right-0 z-50 bg-card/100 backdrop-blur-md shadow-soft rounded-xl ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 min-w-0">
            <div className="flex items-center justify-center md:gap-3">
              <img
                src={mkclogo}
                alt="Mangalam Cloud Kitchen"
                className="h-12 md:h-16"
              />
              <img
                src={cklogo}
                alt="Mangalam Cloud Kitchen"
                className="h-5 md:h-7"
              /> 
            </div> 
            <div className="hidden sm:flex items-center gap-1 bg-forest-green text-white text-[10px] md:text-xs px-2 py-1 rounded-full whitespace-nowrap">
              <Leaf className="h-3 w-3" />
              <span className="font-medium">Pure Veg</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors font-medium ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-3">
            <Button
              variant="cart"
              size="icon"
              className="relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  {cartCount}
                </span>
              )}
            </Button>

            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block py-3 transition-colors font-medium ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
