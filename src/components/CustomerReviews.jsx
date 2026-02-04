import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    text: "Best vegetarian food in Kulti! The Paneer Butter Masala is absolutely divine. Fresh and tasty every time!",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    rating: 5,
    text: "The Maharaja Thali is worth every rupee! So much variety and everything tastes homemade. Highly recommend!",
    date: "1 week ago",
  },
  {
    id: 3,
    name: "Anita Devi",
    rating: 5,
    text: "We order from Mangalam every weekend. The Dal Makhni and Butter Naan combo is our family favorite!",
    date: "3 days ago",
  },
  {
    id: 4,
    name: "Suresh Gupta",
    rating: 4,
    text: "Great quality food and quick delivery. The Litti Chokha reminds me of my hometown. Will order again!",
    date: "1 week ago",
  },
  {
    id: 5,
    name: "Meena Patel",
    rating: 5,
    text: "Finally found authentic vegetarian food delivered at home! The Kadhai Paneer is restaurant quality.",
    date: "5 days ago",
  },
  {
    id: 6,
    name: "Vikram Singh",
    rating: 5,
    text: "Ordered for a family gathering and everyone loved it! Great portion sizes and amazing taste.",
    date: "4 days ago",
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy customers
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-background p-6 rounded-xl shadow-soft hover:shadow-card transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? "text-golden-yellow fill-golden-yellow"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-primary/20" />
              </div>
              <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">{review.name}</span>
                <span className="text-sm text-muted-foreground">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "4.9", label: "Average Rating", icon: "⭐" },
            { value: "1000+", label: "Happy Customers", icon: "😊" },
            { value: "5000+", label: "Orders Delivered", icon: "🛵" },
            { value: "98%", label: "Repeat Customers", icon: "❤️" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-background rounded-xl">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-display font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
