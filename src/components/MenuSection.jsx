import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import MenuCard from "./MenuCard.jsx";
import { menuItems, categories } from "@/data/menuItems.js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CartContext } from "@/App.jsx";

const MenuSection = ({ showAll = false, limit = 12 }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const displayCategories = showAll ? categories : categories.slice(0, 6);

  // Filter by category
  let filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  // Filter by search query
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase().trim();
    filteredItems = filteredItems.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );
  }

  const displayItems = showAll ? filteredItems : filteredItems.slice(0, limit);

  const getQuantity = (id) => {
    const item = cart.find((c) => c.id === id);
    return item?.quantity || 0;
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <section id="menu" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Menu
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Pure Vegetarian Delights
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From aromatic thalis to creamy paneer curries, discover our carefully crafted menu
            featuring authentic vegetarian flavors made with pure ghee and finest ingredients.
          </p>
        </div>

        {/* Search Bar - Only show on full menu page */}
        {showAll && (
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search dishes by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-12 py-6 text-lg rounded-full border-2 border-primary/20 focus:border-primary bg-white shadow-lg"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-muted hover:bg-muted-foreground/20 flex items-center justify-center transition-colors"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-center text-sm text-muted-foreground mt-2">
                Found {filteredItems.length} {filteredItems.length === 1 ? "dish" : "dishes"}
              </p>
            )}
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {displayCategories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "hero" : "secondary"}
              size="sm"
              onClick={() => {
                setActiveCategory(cat.id);
                setSearchQuery(""); // Clear search when changing category
              }}
              className="rounded-full"
            >
              {cat.name}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        {displayItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayItems.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                quantity={getQuantity(item.id)}
                onAdd={() => addToCart(item.id)}
                onRemove={() => removeFromCart(item.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No dishes found</h3>
            <p className="text-muted-foreground mb-4">
              Try searching with a different name or browse our categories
            </p>
            <Button variant="hero" onClick={clearSearch}>
              Clear Search
            </Button>
          </div>
        )}

        {/* View Full Menu Button */}
        {!showAll && (
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/menu">View Full Menu →</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
