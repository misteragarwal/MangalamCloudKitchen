// Menu Items for Mangalam Cloud Kitchen - Pure Veg
// All items from the uploaded menu images

// Import images
import thaliImg from "@/assets/menu/thali.jpg";
import dalMakhaniImg from "@/assets/menu/dal-makhani.jpg";
import kadhaiPaneerImg from "@/assets/menu/kadhai-paneer.jpg";
import chilliPaneerImg from "@/assets/menu/chilli-paneer.jpg";
import friedRiceImg from "@/assets/menu/fried-rice.jpg";
import choleBhatureImg from "@/assets/menu/chole-bhature.jpg";
import chowmeinImg from "@/assets/menu/chowmein.jpg";
import littiChokhaImg from "@/assets/menu/litti-chokha.jpg";
import malaiKoftaImg from "@/assets/menu/malai-kofta.jpg";
import gulabJamunImg from "@/assets/menu/gulab-jamun.jpg";
import naanImg from "@/assets/menu/garlic-naan.jpg";
import vegBiryaniImg from "@/assets/menu/veg-biryani.jpg";

export const menuItems = [
  // DAL
  { id: "tarka-dal", name: "Tarka Dal", description: "Traditional yellow dal tempered with cumin, garlic and spices", price: 90, category: "dal", isPopular: false },
  { id: "dal-makhni", name: "Dal Makhni", description: "Slow-cooked black lentils with butter and cream", price: 130, category: "dal", isPopular: true, image: dalMakhaniImg },
  { id: "dal-fry", name: "Dal Fry", description: "Spiced yellow dal with onion tomato tadka", price: 130, category: "dal", isPopular: false },
  { id: "panch-mela-dal", name: "Panch Mela Dal", description: "Five lentil mix cooked with aromatic spices", price: 120, category: "dal", isPopular: false },

  // VEGETABLES
  { id: "allu-sabji", name: "Allu Sabji", description: "Simple and delicious potato curry", price: 90, category: "vegetables", isPopular: false },
  { id: "kashmiri-alu-dum", name: "Kashmiri Alu Dum", description: "Baby potatoes in rich Kashmiri style gravy", price: 170, category: "vegetables", isPopular: true },
  { id: "allu-do-pyaza", name: "Allu Do Pyaza", description: "Potatoes cooked with double onion gravy", price: 150, category: "vegetables", isPopular: false },
  { id: "allu-dum", name: "Allu Dum", description: "Spiced baby potatoes in thick gravy", price: 120, category: "vegetables", isPopular: false },
  { id: "pakori-kadhi", name: "Pakori Kadhi", description: "Yogurt based curry with crispy fritters", price: 100, category: "vegetables", isPopular: true },
  { id: "sangari-ki-subji", name: "Sangari Ki Subji", description: "Traditional Rajasthani dried beans curry", price: 210, category: "vegetables", isPopular: false },
  { id: "chana-masala", name: "Chana Masala", description: "Chickpeas cooked in spiced tomato gravy", price: 130, category: "vegetables", isPopular: true },
  { id: "papar-mangori", name: "Papar Mangori", description: "Traditional Rajasthani papad curry", price: 120, category: "vegetables", isPopular: false },
  { id: "seasonal-sabji", name: "Seasonal Sabji", description: "Fresh seasonal vegetable preparation", price: 100, category: "vegetables", isPopular: false },
  { id: "gatta-ki-subji", name: "Gatta Ki Subji", description: "Gram flour dumplings in spiced yogurt curry", price: 150, category: "vegetables", isPopular: true },
  { id: "veg-kofta", name: "Veg Kofta", description: "Mixed vegetable balls in creamy gravy", price: 140, category: "vegetables", isPopular: false },
  { id: "malai-kofta", name: "Malai Kofta", description: "Paneer-potato balls in rich creamy sauce", price: 190, category: "vegetables", isPopular: true, image: malaiKoftaImg },
  { id: "mix-veg", name: "Mix Veg", description: "Assorted vegetables in mild spiced gravy", price: 170, category: "vegetables", isPopular: false },
  { id: "veg-manchurian", name: "Veg Manchurian", description: "Indo-Chinese style vegetable balls in sauce", price: 160, category: "vegetables", isPopular: true },
  { id: "stuffed-tomato", name: "Stuffed Tomato", description: "Tomatoes stuffed with spiced filling", price: 120, category: "vegetables", isPopular: false },
  { id: "stuffed-shimla", name: "Stuffed Shimla", description: "Capsicum stuffed with potato masala", price: 140, category: "vegetables", isPopular: false },

  // PANEER SPECIAL
  { id: "sahi-paneer", name: "Sahi Paneer", description: "Royal paneer in rich tomato cashew gravy", price: 190, category: "paneer", isPopular: true },
  { id: "kadhai-paneer", name: "Kadhai Paneer", description: "Paneer cooked with capsicum in kadhai masala", price: 210, category: "paneer", isPopular: true, image: kadhaiPaneerImg },
  { id: "chilli-paneer", name: "Chilli Paneer", description: "Spicy Indo-Chinese style paneer", price: 180, category: "paneer", isPopular: true, image: chilliPaneerImg },
  { id: "paneer-do-pyaza", name: "Paneer Do Pyaza", description: "Paneer with double onion gravy", price: 180, category: "paneer", isPopular: false },
  { id: "mutter-paneer", name: "Mutter Paneer", description: "Cottage cheese with green peas curry", price: 160, category: "paneer", isPopular: true },
  { id: "paneer-spicy", name: "Paneer Spicy", description: "Paneer cubes in hot spicy gravy", price: 170, category: "paneer", isPopular: false },
  { id: "paneer-butter-masala", name: "Paneer Butter Masala", description: "Creamy butter tomato paneer curry", price: 170, category: "paneer", isPopular: true },

  // RICE
  { id: "plain-rice", name: "Plain Rice", description: "Steamed basmati rice", price: 35, category: "rice", isPopular: false },
  { id: "jera-rice", name: "Jera Rice", description: "Cumin flavored aromatic rice", price: 100, category: "rice", isPopular: true },
  { id: "fried-rice", name: "Fried Rice", description: "Indo-Chinese style vegetable fried rice", price: 140, category: "rice", isPopular: true, image: friedRiceImg },
  { id: "veg-pulao", name: "Veg Pulao", description: "Fragrant rice with mixed vegetables", price: 160, category: "rice", isPopular: true, image: vegBiryaniImg },
  { id: "mutter-pulao", name: "Mutter Pulao", description: "Rice cooked with green peas", price: 130, category: "rice", isPopular: false },

  // THALI
  { id: "mangalam-veg-thali", name: "Mangalam Veg Thali", description: "Rice, Dal, 1 Plain Subji, 1 Gravy Subji, 2 Ghee Falka, Salad, Achar, Sweet/Curd", price: 160, category: "thali", isPopular: true, image: thaliImg },
  { id: "mangalam-maharaja-thali", name: "Mangalam Maharaja Thali", description: "Mutter Pulao, Dal Makhni, 1 Butter Naan, 1 Ghee Fulka, 1 Messi Roti, 1 Paneer Butter Masala, 1 Gravy Subji, 1 Gulab Jamun, Curd, Papar, Salad, Achar", price: 250, category: "thali", isPopular: true, image: thaliImg },

  // ROTI/BREADS
  { id: "falka", name: "Falka", description: "Thin Indian flatbread", price: 7, category: "roti", isPopular: false },
  { id: "ghee-falka", name: "Ghee Falka", description: "Flatbread topped with pure ghee", price: 10, category: "roti", isPopular: true },
  { id: "mesi-roti", name: "Mesi Roti", description: "Fenugreek flavored flatbread", price: 15, category: "roti", isPopular: false },
  { id: "plain-paratha", name: "Plain Paratha", description: "Layered Indian flatbread", price: 15, category: "roti", isPopular: false },
  { id: "sattu-paratha", name: "Sattu Paratha", description: "Paratha stuffed with roasted gram flour", price: 20, category: "roti", isPopular: false },
  { id: "allu-paratha", name: "Allu Paratha", description: "Potato stuffed paratha", price: 25, category: "roti", isPopular: true },
  { id: "paneer-paratha", name: "Paneer Paratha", description: "Cottage cheese stuffed paratha", price: 30, category: "roti", isPopular: true },
  { id: "butter-naan", name: "Butter Naan", description: "Soft tandoor bread with butter", price: 30, category: "roti", isPopular: true, image: naanImg },
  { id: "masala-kulcha", name: "Masala Kulcha", description: "Spiced stuffed kulcha bread", price: 40, category: "roti", isPopular: false },
  { id: "paneer-kulcha", name: "Paneer Kulcha", description: "Paneer stuffed kulcha bread", price: 50, category: "roti", isPopular: true },
  { id: "kadhai-puri", name: "Kadhai Puri", description: "Deep fried puffed bread", price: 10, category: "roti", isPopular: false },

  // DESSERT
  { id: "hot-gulab-jamun", name: "Hot Gulab Jamun", description: "Warm milk dumplings in sugar syrup", price: 20, category: "dessert", isPopular: true, unit: "/pc", image: gulabJamunImg },
  { id: "rabri-gulab-jamun", name: "Rabri Gulab Jamun", description: "Gulab jamun served with rich rabri", price: 100, category: "dessert", isPopular: true, unit: "/plate", image: gulabJamunImg },

  // RAITA & SIDES
  { id: "bundi-raita", name: "Bundi Raita", description: "Yogurt with crispy bundi pearls", price: 50, category: "raita", isPopular: true },
  { id: "fruit-raita", name: "Fruit Raita", description: "Yogurt with mixed fresh fruits", price: 70, category: "raita", isPopular: false },
  { id: "plain-curd", name: "Plain Curd", description: "Fresh homemade curd", price: 40, category: "raita", isPopular: false },
  { id: "onion-salad", name: "Onion Salad", description: "Fresh onion rings with lemon", price: 40, category: "raita", isPopular: false },
  { id: "green-salad", name: "Green Salad", description: "Fresh mixed green vegetables", price: 60, category: "raita", isPopular: false },
  { id: "rosted-papar", name: "Rosted Papar", description: "Crispy roasted papad", price: 10, category: "raita", isPopular: false },
  { id: "lahsun-chatni", name: "Lahsun Chatni", description: "Spicy garlic chutney", price: 60, category: "raita", isPopular: true },

  // STARTERS & SNACKS
  { id: "paneer-roll", name: "Paneer Roll", description: "Grilled paneer wrapped in roomali roti", price: 60, category: "starters", isPopular: true, unit: "/pc" },
  { id: "chowmin-roll", name: "Chowmin Roll", description: "Crispy noodles wrapped in roti", price: 60, category: "starters", isPopular: false, unit: "/pc" },
  { id: "cheese-corn-sandwich", name: "Cheese Corn Sandwich", description: "Grilled sandwich with cheese and corn", price: 60, category: "starters", isPopular: true, unit: "/pc" },
  { id: "cheese-veg-sandwich", name: "Cheese Veg Sandwich", description: "Vegetable cheese grilled sandwich", price: 50, category: "starters", isPopular: false, unit: "/pc" },
  { id: "aluu-masala-sandwich", name: "Aluu Masala Sandwich", description: "Spiced potato grilled sandwich", price: 45, category: "starters", isPopular: false, unit: "/pc" },
  { id: "chowmin", name: "Chowmin", description: "Indo-Chinese vegetable noodles", price: 90, category: "starters", isPopular: true, image: chowmeinImg },
  { id: "chowmin-manchurian", name: "Chowmin + Manchurian", description: "Noodles served with veg manchurian", price: 170, category: "starters", isPopular: true, unit: "/4pc", image: chowmeinImg },
  { id: "chole-bhature", name: "Chole Bhature", description: "Spiced chickpeas with fried bread", price: 100, category: "starters", isPopular: true, image: choleBhatureImg },
  { id: "rajesthani-litti-chokha-plain", name: "Rajesthani Litti Chokha Plain", description: "Traditional wheat balls with mashed veggies", price: 100, category: "starters", isPopular: true, unit: "/5pc", image: littiChokhaImg },
  { id: "rajesthani-litti-chokha-ghee", name: "Rajesthani Litti Chokha Ghee", description: "Litti chokha dipped in pure ghee", price: 125, category: "starters", isPopular: true, unit: "/5pc", image: littiChokhaImg },
  { id: "aluu-masala-litti", name: "Aluu Masala Litti", description: "Potato stuffed litti with chokha", price: 100, category: "starters", isPopular: false, unit: "/5pc" },
  { id: "sweet-corn-chaat", name: "Sweet Corn Chaat", description: "Tangy sweet corn chaat", price: 100, category: "starters", isPopular: true },
  { id: "veg-corn-pakora", name: "Veg Corn Pakora", description: "Crispy corn vegetable fritters", price: 140, category: "starters", isPopular: false, unit: "/8pc" },
  { id: "paneer-pakora", name: "Paneer Pakora", description: "Crispy fried paneer fritters", price: 160, category: "starters", isPopular: true, unit: "/8pc" },
  { id: "cheese-ball", name: "Cheese Ball", description: "Crispy fried cheese balls", price: 180, category: "starters", isPopular: true, unit: "/8pc" },
  { id: "khaman-dhokla", name: "Khaman Dhokla", description: "Soft steamed gram flour cakes", price: 100, category: "starters", isPopular: true, unit: "/5pc" },
];

export const categories = [
  { id: "all", name: "All Items" },
  { id: "thali", name: "Thali" },
  { id: "paneer", name: "Paneer Special" },
  { id: "vegetables", name: "Vegetables" },
  { id: "dal", name: "Dal" },
  { id: "rice", name: "Rice" },
  { id: "roti", name: "Roti & Breads" },
  { id: "starters", name: "Starters & Snacks" },
  { id: "raita", name: "Raita & Sides" },
  { id: "dessert", name: "Desserts" },
];

export const businessInfo = {
  name: "Mangalam Cloud Kitchen",
  tagline: "Pure Veg Cloud Kitchen",
  address: "Kulti Kendwa Bazaar 6no Gate",
  email: "mangalamcloudkitchen8@gmail.com",
  phone1: "8617878006",
  phone2: "9933169393",
  whatsapp: "918967815459",
  hours: "9:00 AM - 9:00 PM",
  closedDay: "Thursday Evening Close",
  delivery: {
    freeUpTo5km: { minOrder: 499, text: "Free delivery upto 5km (Min ₹499)" },
    freeUpTo10km: { minOrder: 999, text: "Free delivery upto 10km (Min ₹999)" },
    chargesPerKm: "₹10, ₹20, ₹30, ₹40 as per distance",
    maxDistance: "15 km"
  }
};

// Delivery locations with specific charges
export const deliveryLocations = [
  { id: "kulti", name: "Kulti", charge: 0 },
  { id: "kendwa", name: "Kendwa Bazaar", charge: 0 },
  { id: "barakar", name: "Barakar", charge: 20 },
  { id: "dishergarh", name: "Dishergarh", charge: 20 },
  { id: "hirapur", name: "Hirapur", charge: 30 },
  { id: "asansol", name: "Asansol", charge: 40 },
  { id: "burnpur", name: "Burnpur", charge: 40 },
  { id: "jamuria", name: "Jamuria", charge: 30 },
  { id: "raniganj", name: "Raniganj", charge: 50 },
  { id: "ondal", name: "Ondal", charge: 40 },
  { id: "other", name: "Other Location", charge: 50 },
];
