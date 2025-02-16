export const restaurantMenus = {
  // North Indian Restaurant Menu Template
  northIndian: {
    chefSpecials: [
      { name: 'Raan-E-Sikandari', price: '₹1299', isVeg: false, description: 'Whole leg of lamb marinated for 24 hours', spiceLevel: 'Medium', prepTime: '45 mins' },
      { name: 'Dal Bukhara', price: '₹499', isVeg: true, description: 'Black lentils cooked overnight', spiceLevel: 'Mild', prepTime: '30 mins' }
    ],
    starters: [
      { name: 'Paneer Tikka', price: '₹349', isVeg: true, description: 'Marinated cottage cheese grilled in tandoor', spiceLevel: 'Medium' },
      { name: 'Chicken Malai Tikka', price: '₹399', isVeg: false, description: 'Creamy chicken tikka', spiceLevel: 'Mild' }
    ],
    mainCourse: [
      { name: 'Butter Chicken', price: '₹449', isVeg: false, description: 'Classic creamy tomato curry with chicken', spiceLevel: 'Medium' },
      { name: 'Paneer Butter Masala', price: '₹399', isVeg: true, description: 'Cottage cheese in rich gravy', spiceLevel: 'Medium' }
    ],
    breads: [
      { name: 'Butter Naan', price: '₹69', isVeg: true, description: 'Leavened bread from tandoor' },
      { name: 'Laccha Paratha', price: '₹79', isVeg: true, description: 'Layered whole wheat bread' }
    ]
  },

  // South Indian Restaurant Menu Template
  southIndian: {
    dosas: [
      { name: 'Masala Dosa', price: '₹199', isVeg: true, description: 'Crispy crepe with potato filling', spiceLevel: 'Medium' },
      { name: 'Mysore Masala Dosa', price: '₹229', isVeg: true, description: 'Spicy variant of masala dosa', spiceLevel: 'Hot' }
    ],
    idlis: [
      { name: 'Plain Idli', price: '₹129', isVeg: true, description: 'Steamed rice cakes', spiceLevel: 'Mild' },
      { name: 'Rava Idli', price: '₹149', isVeg: true, description: 'Semolina idli', spiceLevel: 'Mild' }
    ],
    mainCourse: [
      { name: 'Vegetable Stew', price: '₹299', isVeg: true, description: 'Kerala style vegetable stew', spiceLevel: 'Mild' },
      { name: 'Chicken Chettinad', price: '₹399', isVeg: false, description: 'Spicy chicken curry', spiceLevel: 'Hot' }
    ]
  },

  // City-specific specialties
  mumbaiSpecials: {
    streetFood: [
      { name: 'Vada Pav', price: '₹49', isVeg: true, description: 'Mumbai\'s favorite street food', spiceLevel: 'Medium' },
      { name: 'Pav Bhaji', price: '₹149', isVeg: true, description: 'Spiced vegetable mash with buttered pav', spiceLevel: 'Medium' }
    ],
    seafood: [
      { name: 'Bombay Duck Fry', price: '₹299', isVeg: false, description: 'Crispy fried bombil fish', spiceLevel: 'Medium' },
      { name: 'Koliwada Prawns', price: '₹449', isVeg: false, description: 'Spicy battered prawns', spiceLevel: 'Hot' }
    ]
  },

  delhiSpecials: {
    streetFood: [
      { name: 'Chole Bhature', price: '₹149', isVeg: true, description: 'Delhi style chickpea curry with fried bread', spiceLevel: 'Medium' },
      { name: 'Aloo Tikki', price: '₹79', isVeg: true, description: 'Spiced potato patties', spiceLevel: 'Medium' }
    ],
    kebabs: [
      { name: 'Galouti Kebab', price: '₹399', isVeg: false, description: 'Melt-in-mouth minced meat kebabs', spiceLevel: 'Medium' },
      { name: 'Kakori Kebab', price: '₹449', isVeg: false, description: 'Lucknowi style kebabs', spiceLevel: 'Medium' }
    ]
  },

  bengaluruSpecials: {
    localDelicacies: [
      { name: 'Bisi Bele Bath', price: '₹199', isVeg: true, description: 'Spicy rice and lentil dish', spiceLevel: 'Hot' },
      { name: 'Ragi Mudde', price: '₹129', isVeg: true, description: 'Finger millet balls', spiceLevel: 'Mild' }
    ],
    modernFusion: [
      { name: 'Ghee Roast Chicken Pasta', price: '₹399', isVeg: false, description: 'Fusion of Mangalorean and Italian', spiceLevel: 'Medium' },
      { name: 'Curry Leaf Pesto Dosa', price: '₹249', isVeg: true, description: 'Modern take on classic dosa', spiceLevel: 'Medium' }
    ]
  },

  // Seasonal Menus
  seasonal: {
    summer: {
      beverages: [
        { name: 'Aam Panna', price: '₹129', isVeg: true, description: 'Raw mango cooler', seasonal: true },
        { name: 'Watermelon Mojito', price: '₹149', isVeg: true, description: 'Fresh watermelon drink', seasonal: true }
      ],
      mains: [
        { name: 'Raw Mango Curry', price: '₹299', isVeg: true, description: 'Tangy mango curry', seasonal: true },
        { name: 'Summer Salad Bowl', price: '₹249', isVeg: true, description: 'Mixed fresh fruits and vegetables', seasonal: true }
      ]
    },
    monsoon: {
      snacks: [
        { name: 'Pakora Platter', price: '₹199', isVeg: true, description: 'Assorted fritters', seasonal: true },
        { name: 'Masala Corn', price: '₹149', isVeg: true, description: 'Spiced corn kernels', seasonal: true }
      ],
      beverages: [
        { name: 'Adrak Chai', price: '₹79', isVeg: true, description: 'Ginger tea', seasonal: true },
        { name: 'Masala Coffee', price: '₹89', isVeg: true, description: 'Spiced coffee', seasonal: true }
      ]
    },
    winter: {
      specials: [
        { name: 'Sarson Ka Saag', price: '₹349', isVeg: true, description: 'Mustard greens with makki roti', seasonal: true },
        { name: 'Undhiyu', price: '₹399', isVeg: true, description: 'Mixed winter vegetables', seasonal: true }
      ],
      beverages: [
        { name: 'Kashmiri Kahwa', price: '₹149', isVeg: true, description: 'Saffron tea with nuts', seasonal: true },
        { name: 'Hot Chocolate', price: '₹169', isVeg: true, description: 'Rich chocolate drink', seasonal: true }
      ]
    }
  },

  // Festival Specials
  festivals: {
    diwali: {
      sweets: [
        { name: 'Kaju Katli', price: '₹799/500g', isVeg: true, description: 'Cashew fudge', festival: 'Diwali' },
        { name: 'Besan Ladoo', price: '₹599/500g', isVeg: true, description: 'Gram flour sweets', festival: 'Diwali' }
      ],
      snacks: [
        { name: 'Namkeen Hamper', price: '₹499', isVeg: true, description: 'Assorted savory snacks', festival: 'Diwali' },
        { name: 'Dry Fruit Box', price: '₹999', isVeg: true, description: 'Premium dry fruits', festival: 'Diwali' }
      ]
    },
    eid: {
      mains: [
        { name: 'Special Biryani', price: '₹599', isVeg: false, description: 'Festive biryani', festival: 'Eid' },
        { name: 'Mutton Korma', price: '₹649', isVeg: false, description: 'Rich meat curry', festival: 'Eid' }
      ],
      desserts: [
        { name: 'Sheer Khurma', price: '₹299', isVeg: true, description: 'Vermicelli pudding', festival: 'Eid' },
        { name: 'Zarda', price: '₹249', isVeg: true, description: 'Sweet rice', festival: 'Eid' }
      ]
    },
    navratri: {
      thali: [
        { name: 'Navratri Special Thali', price: '₹399', isVeg: true, description: 'Fasting special meal', festival: 'Navratri' }
      ],
      items: [
        { name: 'Sabudana Khichdi', price: '₹199', isVeg: true, description: 'Sago preparation', festival: 'Navratri' },
        { name: 'Kuttu Puri', price: '₹149', isVeg: true, description: 'Buckwheat bread', festival: 'Navratri' }
      ]
    }
  },

  // Special Diet Menus
  dietarySpecials: {
    jain: {
      starters: [
        { name: 'Jain Spring Rolls', price: '₹249', isVeg: true, description: 'No onion no garlic', dietary: 'Jain' },
        { name: 'Dry Fruit Kebab', price: '₹299', isVeg: true, description: 'Mixed nuts patty', dietary: 'Jain' }
      ],
      mains: [
        { name: 'Jain Dal Tadka', price: '₹249', isVeg: true, description: 'Lentils without onion-garlic', dietary: 'Jain' },
        { name: 'Jain Paneer Masala', price: '₹349', isVeg: true, description: 'Cottage cheese curry', dietary: 'Jain' }
      ]
    },
    keto: {
      mains: [
        { name: 'Keto Butter Chicken', price: '₹449', isVeg: false, description: 'Low carb curry', dietary: 'Keto' },
        { name: 'Cauliflower Rice', price: '₹249', isVeg: true, description: 'Grated cauliflower', dietary: 'Keto' }
      ],
      desserts: [
        { name: 'Keto Chocolate Mousse', price: '₹299', isVeg: true, description: 'Sugar-free dessert', dietary: 'Keto' }
      ]
    }
  },

  // Chef's Tasting Menus
  tasting: {
    vegetarian: {
      price: '₹1499 per person',
      courses: [
        { name: 'Amuse-bouche', description: 'Chef\'s special starter' },
        { name: 'Soup Course', description: 'Seasonal vegetable soup' },
        { name: 'Appetizer', description: 'Trio of starters' },
        { name: 'Main Course', description: 'Selection of three mains' },
        { name: 'Dessert', description: 'Dessert platter' }
      ]
    },
    nonVegetarian: {
      price: '₹1799 per person',
      courses: [
        { name: 'Amuse-bouche', description: 'Chef\'s special starter' },
        { name: 'Soup Course', description: 'Clear chicken soup' },
        { name: 'Appetizer', description: 'Selection of kebabs' },
        { name: 'Main Course', description: 'Signature curry and biryani' },
        { name: 'Dessert', description: 'Dessert platter' }
      ]
    }
  }
};

// Function to generate a complete menu based on restaurant type and city
export const generateRestaurantMenu = (type, city) => {
  const baseMenu = restaurantMenus[type] || {};
  const citySpecials = restaurantMenus[`${city.toLowerCase()}Specials`] || {};
  
  // Get current season and upcoming festival
  const currentSeason = getCurrentSeason();
  const upcomingFestival = getUpcomingFestival();

  // Add seasonal and festival menus
  const seasonalItems = restaurantMenus.seasonal[currentSeason] || {};
  const festivalItems = restaurantMenus.festivals[upcomingFestival] || {};

  // Common items for all restaurants
  const commonItems = {
    beverages: {
      softDrinks: [
        { name: 'Fresh Lime Soda', price: '₹99', isVeg: true, description: 'Sweet or salty' },
        { name: 'Masala Chaas', price: '₹79', isVeg: true, description: 'Spiced buttermilk' }
      ],
      hotBeverages: [
        { name: 'Masala Chai', price: '₹49', isVeg: true, description: 'Indian spiced tea' },
        { name: 'Filter Coffee', price: '₹69', isVeg: true, description: 'South Indian coffee' }
      ]
    },
    desserts: [
      { name: 'Gulab Jamun', price: '₹149', isVeg: true, description: 'Sweet milk dumplings' },
      { name: 'Ice Cream', price: '₹129', isVeg: true, description: 'Various flavors' }
    ]
  };

  return {
    ...baseMenu,
    ...citySpecials,
    ...commonItems,
    seasonal: seasonalItems,
    festival: festivalItems,
    chefTasting: restaurantMenus.tasting,
    dietarySpecials: restaurantMenus.dietarySpecials
  };
};

// Helper functions to determine current season and upcoming festival
const getCurrentSeason = () => {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 5) return 'summer';
  if (month >= 6 && month <= 9) return 'monsoon';
  return 'winter';
};

const getUpcomingFestival = () => {
  // Logic to determine upcoming festival based on date
  // This would need to be implemented based on your festival calendar
  return 'diwali'; // placeholder
};

// Example usage:
// const restaurantMenu = generateRestaurantMenu('northIndian', 'delhi'); 
// const restaurantMenu = generateRestaurantMenu('northIndian', 'delhi'); 