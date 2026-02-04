import { Users, PartyPopper, Calendar, Phone, Utensils, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { businessInfo } from "@/data/menuItems.js";

const cateringPackages = [
  {
    id: "basic",
    name: "Basic Package",
    persons: "50-100",
    description: "Perfect for small gatherings and office events",
    includes: [
      "2 Types of Dal",
      "3 Types of Vegetables",
      "1 Paneer Dish",
      "Rice & Pulao",
      "Roti & Puri",
      "Salad & Raita",
      "Papad & Pickle",
      "Sweet Dish"
    ],
    startingPrice: "₹180",
    perPlate: "/plate"
  },
  {
    id: "premium",
    name: "Premium Package",
    persons: "50-150",
    description: "Ideal for birthday parties and celebrations",
    popular: true,
    includes: [
      "Dal Makhni + Tarka Dal",
      "4 Types of Vegetables",
      "2 Paneer Dishes",
      "Jeera Rice + Veg Pulao",
      "Butter Naan + Ghee Roti",
      "Chole Bhature",
      "Raita & Salads",
      "Gulab Jamun + Kheer"
    ],
    startingPrice: "₹250",
    perPlate: "/plate"
  },
  {
    id: "royal",
    name: "Royal Package",
    persons: "100-200",
    description: "For weddings and grand celebrations",
    includes: [
      "Dal Makhni + Panch Mela Dal",
      "5+ Types of Vegetables",
      "3 Paneer Dishes",
      "Veg Biryani + Jeera Rice",
      "Assorted Breads",
      "Live Chaat Counter",
      "Multiple Starters",
      "Premium Desserts Platter"
    ],
    startingPrice: "₹350",
    perPlate: "/plate"
  }
];

const occasions = [
  { icon: PartyPopper, name: "Birthday Parties", desc: "Make birthdays special with delicious food" },
  { icon: Users, name: "Corporate Events", desc: "Office meetings, seminars & team lunches" },
  { icon: Calendar, name: "Puja & Functions", desc: "Religious ceremonies & family gatherings" },
  { icon: Star, name: "Anniversaries", desc: "Celebrate milestones with loved ones" }
];

const getWhatsAppUrl = (packageName) => {
  const message = `Hi! I'm interested in ${packageName} for catering services. Please share more details.`;
  return `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(message)}`;
};

const CateringSection = () => {
  return (
    <section id="catering" className="py-20 bg-gradient-to-b from-warm-cream to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            🎉 Bulk Orders & Catering
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Catering Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Planning a party, puja, or corporate event? We offer bulk catering for 
            <span className="text-primary font-semibold"> 50 to 200+ guests</span> with 
            authentic pure vegetarian food made with love!
          </p>
        </div>

        {/* Occasions We Cater */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {occasions.map((occasion, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <occasion.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{occasion.name}</h3>
              <p className="text-sm text-muted-foreground">{occasion.desc}</p>
            </div>
          ))}
        </div>

        {/* Catering Packages */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {cateringPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-gradient-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Utensils className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">{pkg.persons} Persons</span>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground mb-4">{pkg.description}</p>
                
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-bold text-primary">{pkg.startingPrice}</span>
                  <span className="text-muted-foreground">{pkg.perPlate}</span>
                  <span className="text-sm text-muted-foreground ml-2">onwards</span>
                </div>
                
                <div className="space-y-2 mb-6">
                  {pkg.includes.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                
                <Button
                  variant="whatsapp"
                  className="w-full"
                  asChild
                >
                  <a
                    href={getWhatsAppUrl(pkg.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Quote on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Need Custom Menu for Your Event?
          </h3>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            We can customize the menu according to your preferences, budget, and number of guests. 
            Contact us for a personalized quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <a
                href={getWhatsAppUrl("Custom Catering Package")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <a href={`tel:${businessInfo.phone1}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call: {businessInfo.phone1}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CateringSection;
