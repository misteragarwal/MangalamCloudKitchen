import { Plus, Minus, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const MenuCard = ({ item, quantity, onAdd, onRemove }) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      {item.image && (
        <div className="relative h-40 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {item.isPopular && (
            <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
              🔥 Popular
            </span>
          )}
        </div>
      )}
      
      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-5 h-5 border-2 border-forest-green rounded">
              <div className="w-2 h-2 rounded-full bg-forest-green" />
            </span>
            <h3 className="font-display text-lg font-semibold text-foreground">
              {item.name}
            </h3>
          </div>
          {!item.image && item.isPopular && (
            <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap">
              🔥 Popular
            </span>
          )}
        </div>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2 pl-7">
          {item.description}
        </p>

        <div className="flex items-center justify-between pl-7">
          <span className="text-xl font-bold text-primary">
            ₹{item.price}
            {item.unit && <span className="text-sm font-normal text-muted-foreground">{item.unit}</span>}
          </span>

          {quantity === 0 ? (
            <Button variant="hero" size="sm" onClick={onAdd}>
              <Plus className="h-4 w-4 mr-1" /> Add
            </Button>
          ) : (
            <div className="flex items-center gap-2 bg-primary/10 rounded-lg p-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:bg-primary hover:text-primary-foreground"
                onClick={onRemove}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center font-semibold text-foreground">
                {quantity}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:bg-primary hover:text-primary-foreground"
                onClick={onAdd}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
