import { useContext, useState } from "react";
import { X, MessageCircle, Minus, Plus, Trash2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { menuItems, businessInfo, deliveryLocations } from "@/data/menuItems.js";
import { CartContext } from "@/App.jsx";

const Cart = () => {
  const { cart, isCartOpen, setIsCartOpen, addToCart, removeFromCart, clearFromCart } = useContext(CartContext);
  const [selectedLocation, setSelectedLocation] = useState("");

  const cartItems = cart
    .map((cartItem) => {
      const menuItem = menuItems.find((m) => m.id === cartItem.id);
      return menuItem ? { ...menuItem, quantity: cartItem.quantity } : null;
    })
    .filter(Boolean);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item?.price || 0) * (item?.quantity || 0),
    0
  );
  
  // Get selected location details
  const locationDetails = deliveryLocations.find(loc => loc.id === selectedLocation);
  
  // Calculate delivery charge based on location and order value
  let deliveryCharge = locationDetails?.charge || 0;
  let deliveryNote = "";
  
  if (!selectedLocation) {
    deliveryCharge = 0;
    deliveryNote = "Select delivery location";
  } else if (subtotal >= 999) {
    deliveryCharge = 0;
    deliveryNote = "Free delivery (Order above ₹999)";
  } else if (subtotal >= 499 && locationDetails?.charge <= 20) {
    deliveryCharge = 0;
    deliveryNote = "Free delivery (Order above ₹499)";
  } else {
    deliveryNote = `Delivery to ${locationDetails?.name}`;
  }
  
  const total = subtotal + deliveryCharge;

  const generateWhatsAppMessage = () => {
    if (cartItems.length === 0) return "";

    let message = "🍛 *Order from Mangalam Cloud Kitchen*\n\n";
    message += "*Items:*\n";

    cartItems.forEach((item) => {
      if (item) {
        message += `• ${item.name} x${item.quantity} = ₹${item.price * item.quantity}\n`;
      }
    });

    message += `\n*Subtotal:* ₹${subtotal}`;
    if (selectedLocation && locationDetails) {
      message += `\n*Delivery Location:* ${locationDetails.name}`;
    }
    message += `\n*Delivery:* ${deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`}`;
    message += `\n*Total:* ₹${total}`;
    message += "\n\n📍 Please share your exact delivery address.";

    return encodeURIComponent(message);
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart Panel */}
      <div className="relative w-full max-w-md bg-card h-full shadow-xl animate-scale-in overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-xl font-display font-bold text-foreground">
            Your Order
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Your cart is empty
              </h3>
              <p className="text-muted-foreground">
                Add some delicious items from our menu!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map(
                (item) =>
                  item && (
                    <div
                      key={item.id}
                      className="flex gap-4 p-3 bg-background rounded-lg"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">
                          {item.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          ₹{item.price} each
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-1 bg-muted rounded-lg">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-6 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7"
                              onClick={() => addToCart(item.id)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-primary">
                              ₹{item.price * item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7 text-destructive hover:bg-destructive/10"
                              onClick={() => clearFromCart(item.id)}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-border p-4 space-y-4">
            {/* Delivery Location Selector */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Delivery Location
              </label>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your area" />
                </SelectTrigger>
                <SelectContent>
                  {deliveryLocations.map((location) => (
                    <SelectItem key={location.id} value={location.id}>
                      <div className="flex justify-between items-center w-full gap-4">
                        <span>{location.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {location.charge === 0 ? "Free" : `₹${location.charge}`}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Summary */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Delivery</span>
                <span className={deliveryCharge === 0 && selectedLocation ? "text-forest-green font-medium" : ""}>
                  {!selectedLocation ? "-" : deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}
                </span>
              </div>
              {deliveryNote && (
                <p className="text-xs text-muted-foreground">{deliveryNote}</p>
              )}
              <div className="flex justify-between text-lg font-bold text-foreground pt-2 border-t border-border">
                <span>Total</span>
                <span className="text-primary">₹{total}</span>
              </div>
            </div>

            {/* WhatsApp Order Button */}
            <Button 
              variant="whatsapp" 
              size="lg" 
              className="w-full" 
              asChild
              disabled={!selectedLocation}
            >
              <a
                href={`https://wa.me/${businessInfo.whatsapp}?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className={!selectedLocation ? "pointer-events-none opacity-50" : ""}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                {selectedLocation ? "Order via WhatsApp" : "Select location to order"}
              </a>
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              We'll confirm your order and share payment details on WhatsApp
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
