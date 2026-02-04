import { Truck, Clock, MapPin, Leaf } from "lucide-react";
import { businessInfo } from "@/data/menuItems.js";

const DeliveryInfo = () => {
  return (
    <section className="py-16 bg-charcoal text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-2">
            Delivery Information
          </h2>
          <p className="text-primary-foreground/70">
            Fast, reliable, and always fresh!
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <Truck className="h-7 w-7 text-golden-yellow" />
            </div>
            <h3 className="font-semibold mb-2 text-golden-yellow">Free Delivery</h3>
            <p className="text-sm text-primary-foreground/70">
              Upto 5km on orders above ₹499
              <br />
              Upto 10km on orders above ₹999
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <MapPin className="h-7 w-7 text-golden-yellow" />
            </div>
            <h3 className="font-semibold mb-2 text-golden-yellow">Delivery Area</h3>
            <p className="text-sm text-primary-foreground/70">
              We deliver upto {businessInfo.delivery.maxDistance}
              <br />
              Charges: {businessInfo.delivery.chargesPerKm}
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <Clock className="h-7 w-7 text-golden-yellow" />
            </div>
            <h3 className="font-semibold mb-2 text-golden-yellow">Timing</h3>
            <p className="text-sm text-primary-foreground/70">
              Open Daily: {businessInfo.hours}
              <br />
              <span className="text-spice-red">{businessInfo.closedDay}</span>
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-forest-green/30 flex items-center justify-center">
              <Leaf className="h-7 w-7 text-forest-green" />
            </div>
            <h3 className="font-semibold mb-2 text-forest-green">100% Pure Veg</h3>
            <p className="text-sm text-primary-foreground/70">
              All our dishes are
              <br />
              100% Vegetarian
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryInfo;
