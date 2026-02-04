import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import slider images
import thaliImage from "@/assets/slider/thali-special.jpg";
import paneerImage from "@/assets/slider/paneer-special.jpg";
import littiImage from "@/assets/slider/litti-chokha.jpg";
import dalImage from "@/assets/slider/dal-makhani.jpg";
import deliveryImage from "@/assets/slider/delivery.jpg";

const slides = [
  {
    title: "Mangalam Maharaja Thali",
    description: "A royal feast with Pulao, Dal Makhni, Paneer, Naan, Roti, Sweets & more!",
    price: "₹250",
    highlight: "Best Seller",
    image: thaliImage,
  },
  {
    title: "Paneer Special",
    description: "Choose from Kadhai Paneer, Sahi Paneer, Chilli Paneer & more",
    price: "From ₹160",
    highlight: "Fan Favorite",
    image: paneerImage,
  },
  {
    title: "Litti Chokha",
    description: "Authentic Rajasthani Litti with spiced mashed vegetables",
    price: "₹100 / 5pc",
    highlight: "Traditional",
    image: littiImage,
  },
  {
    title: "Dal Makhni",
    description: "Slow-cooked black lentils in rich buttery gravy",
    price: "₹130",
    highlight: "Creamy Delight",
    image: dalImage,
  },
  {
    title: "Free Delivery",
    description: "Get free home delivery on orders above ₹499 (upto 5km)",
    price: "Order Now!",
    highlight: "Special Offer",
    image: deliveryImage,
  },
];

const FoodSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-primary-foreground mb-2">
            Today's Specials
          </h2>
          <p className="text-primary-foreground/80">
            Fresh, delicious, and made with love
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 px-2"
                >
                  <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
                    {/* Background Image */}
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                      <span className="inline-block px-3 py-1 bg-golden-yellow text-charcoal text-sm font-medium rounded-full mb-3">
                        {slide.highlight}
                      </span>
                      <h3 className="text-2xl md:text-4xl font-display font-bold mb-2">
                        {slide.title}
                      </h3>
                      <p className="text-white/90 mb-3 max-w-md text-sm md:text-base">
                        {slide.description}
                      </p>
                      <div className="text-2xl md:text-3xl font-display font-bold text-golden-yellow">
                        {slide.price}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur-sm"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur-sm"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Pure Veg Badge */}
        <div className="flex justify-center mt-8">
          <div className="inline-flex items-center gap-2 bg-forest-green text-white px-4 py-2 rounded-full">
            <Leaf className="h-5 w-5" />
            <span className="font-medium">100% Pure Vegetarian</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodSlider;
