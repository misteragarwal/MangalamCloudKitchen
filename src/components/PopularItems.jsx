import { Link } from "react-router-dom";
import { menuItems, categories } from "@/data/menuItems.js";
import { Button } from "@/components/ui/button";

const PopularItems = () => {
  const popularItems = menuItems.filter((item) => item.isPopular).slice(0, 8);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Most Loved
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Popular Dishes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our customers' all-time favorites - tried, tested, and loved!
          </p>
        </div>

        {/* Popular Items Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {popularItems.map((item) => (
            <div
              key={item.id}
              className="group bg-card p-4 rounded-xl shadow-soft hover:shadow-card transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="flex items-center justify-center w-4 h-4 border-2 border-forest-green rounded">
                  <div className="w-1.5 h-1.5 rounded-full bg-forest-green" />
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                  🔥 Popular
                </span>
              </div>
              <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {item.name}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-primary">
                  ₹{item.price}
                </span>
                <span className="text-xs text-muted-foreground capitalize">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <Link to="/menu">View Full Menu →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularItems;
