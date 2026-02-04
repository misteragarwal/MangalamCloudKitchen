import { ChefHat, Clock, Heart, Truck, Leaf, Award } from "lucide-react";
import { businessInfo } from "@/data/menuItems.js";

const features = [
  {
    icon: Leaf,
    title: "100% Pure Veg",
    description: "We serve only pure vegetarian food, prepared with love and care",
  },
  {
    icon: ChefHat,
    title: "Expert Chefs",
    description: "Our skilled chefs bring years of culinary expertise to every dish",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Each meal is prepared with care, just like home-cooked food",
  },
  {
    icon: Clock,
    title: "Fresh & Hot",
    description: "We prepare your order fresh, ensuring maximum taste and quality",
  },
  {
    icon: Truck,
    title: "Quick Delivery",
    description: "Fast and reliable delivery within 15km radius",
  },
  {
    icon: Award,
    title: "Quality Ingredients",
    description: "We use only the finest spices and fresh ingredients",
  },
];

const AboutSection = ({ showFull = false }) => {
  const displayFeatures = showFull ? features : features.slice(0, 4);

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Authentic Flavors from Our Kitchen to Your Home
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              <strong className="text-foreground">Mangalam Cloud Kitchen</strong> was born from a passion for 
              authentic vegetarian Indian cuisine. We believe that everyone deserves access to delicious, 
              home-style food without the hassle of cooking.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our cloud kitchen operates exclusively for delivery from <strong className="text-foreground">{businessInfo.address}</strong>, 
              allowing us to focus entirely on what matters most – crafting incredible vegetarian dishes with 
              pure ghee, the freshest ingredients, and traditional recipes passed down through generations.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {displayFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-4 rounded-lg bg-background hover:shadow-soft transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-hero overflow-hidden shadow-hover">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary-foreground p-8">
                  <div className="flex justify-center mb-4">
                    <div className="bg-white/20 p-4 rounded-full">
                      <Leaf className="h-16 w-16" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-2">
                    Pure Vegetarian
                  </h3>
                  <p className="text-primary-foreground/80 text-lg">
                    Serving happiness, one meal at a time
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-card animate-float">
              <div className="text-2xl font-display font-bold text-primary">4.9★</div>
              <div className="text-sm text-muted-foreground">Customer Rating</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-card animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="text-2xl font-display font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Orders Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
