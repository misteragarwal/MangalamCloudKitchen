import { Phone, Mail, MapPin, Clock, MessageCircle, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { businessInfo } from "@/data/menuItems.js";

const ContactSection = ({ showFull = false }) => {
  const whatsappMessage = encodeURIComponent(
    "Hi! I'd like to know more about Mangalam Cloud Kitchen."
  );

  return (
    <section id="contact" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to place an order? We're here to help!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <a
                    href={`tel:+91${businessInfo.phone1}`}
                    className="text-muted-foreground hover:text-primary transition-colors block"
                  >
                    +91 {businessInfo.phone1}
                  </a>
                  <a
                    href={`tel:+91${businessInfo.phone2}`}
                    className="text-muted-foreground hover:text-primary transition-colors block"
                  >
                    +91 {businessInfo.phone2}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {businessInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    {businessInfo.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Hours</h4>
                  <p className="text-muted-foreground">
                    Daily: {businessInfo.hours}
                  </p>
                  <p className="text-spice-red text-sm">
                    {businessInfo.closedDay}
                  </p>
                </div>
              </div>

              {showFull && (
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Truck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Delivery Info</h4>
                    <p className="text-muted-foreground text-sm">
                      We serve upto {businessInfo.delivery.maxDistance}
                    </p>
                    <p className="text-forest-green text-sm">
                      {businessInfo.delivery.freeUpTo5km.text}
                    </p>
                    <p className="text-forest-green text-sm">
                      {businessInfo.delivery.freeUpTo10km.text}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Charges: {businessInfo.delivery.chargesPerKm}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* WhatsApp CTA */}
            <div className="flex flex-col items-center justify-center p-8 bg-card rounded-2xl shadow-card">
              <div className="w-20 h-20 rounded-full bg-forest-green/10 flex items-center justify-center mb-6">
                <MessageCircle className="h-10 w-10 text-forest-green" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                Order via WhatsApp
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                Quick and easy ordering! Just send us a message with your order
                details.
              </p>
              <Button variant="whatsapp" size="lg" asChild>
                <a
                  href={`https://wa.me/${businessInfo.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                WhatsApp: +91 8967815459
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
