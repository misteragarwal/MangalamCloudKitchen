import { Link } from "react-router-dom";
import { Heart, Leaf, Phone, Mail, MapPin, Clock } from "lucide-react";
import { businessInfo } from "@/data/menuItems.js";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1 bg-forest-green text-white text-xs px-2 py-1 rounded-full">
                <Leaf className="h-3 w-3" />
                <span className="font-medium">Pure Veg</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-golden-yellow">
                {businessInfo.name}
              </h3>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-4">
              Bringing authentic vegetarian flavors and homestyle cooking straight to your
              doorstep. No dine-in, just delicious delivery!
            </p>
            <div className="space-y-2 text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-golden-yellow" />
                <span>{businessInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-golden-yellow" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-golden-yellow transition-colors">
                  {businessInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-golden-yellow" />
                <span>{businessInfo.phone1} / {businessInfo.phone2}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-golden-yellow">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Menu", href: "/menu" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-golden-yellow transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Timing */}
          <div>
            <h4 className="font-semibold mb-4 text-golden-yellow">Delivery Hours</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{businessInfo.hours}</span>
              </li>
              <li className="text-spice-red">{businessInfo.closedDay}</li>
              <li className="pt-4">
                <a
                  href={`https://wa.me/${businessInfo.whatsapp}`}
                  className="inline-flex items-center gap-2 bg-forest-green hover:bg-forest-green/90 text-white px-4 py-2 rounded-full transition-colors"
                >
                  📱 Order on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="py-4 border-t border-b border-primary-foreground/10 mb-8">
          <h4 className="font-semibold mb-3 text-center text-golden-yellow">Delivery Information</h4>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/70">
            <span>🛵 We deliver upto {businessInfo.delivery.maxDistance}</span>
            <span>|</span>
            <span>✅ {businessInfo.delivery.freeUpTo5km.text}</span>
            <span>|</span>
            <span>✅ {businessInfo.delivery.freeUpTo10km.text}</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-primary-foreground/50 text-sm">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-spice-red fill-spice-red" /> by
            {businessInfo.name} © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
