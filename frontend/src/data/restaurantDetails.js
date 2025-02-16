import { generateRestaurantMenu } from './restaurantMenus';

export const restaurantDetails = {
  1: {  // Royal Tandoor - Delhi
    menu: generateRestaurantMenu('northIndian', 'delhi'),
    specialFeatures: {
      dietaryOptions: {
        jain: true,
        glutenFree: true,
        vegan: true,
        sugarFree: true
      },
      mealPeriods: {
        lunch: {
          timing: '12:00 PM - 3:30 PM',
          specialBuffet: true,
          buffetPrice: '₹799'
        },
        dinner: {
          timing: '7:00 PM - 11:30 PM',
          specialBuffet: true,
          buffetPrice: '₹999'
        }
      },
      entertainment: {
        liveMusic: {
          days: ['Friday', 'Saturday'],
          timing: '8:00 PM - 11:00 PM',
          genre: 'Classical Indian'
        },
        events: [
          {
            name: 'Wine & Dine Night',
            day: 'Thursday',
            description: 'Complimentary wine tasting with dinner'
          },
          {
            name: 'Sunday Brunch',
            day: 'Sunday',
            description: 'Extended brunch with live stations'
          }
        ]
      },
      seatingPreferences: {
        romantic: {
          available: true,
          description: 'Candlelit tables with privacy',
          priceExtra: '₹500'
        },
        groupDining: {
          available: true,
          maxCapacity: 20,
          advanceBooking: '2 days'
        },
        privateRoom: {
          available: true,
          capacity: '10-15',
          minimumSpend: '₹10000'
        }
      },
      chefTable: {
        available: true,
        capacity: 8,
        pricePerPerson: '₹2499',
        description: 'Exclusive 7-course tasting menu with chef interaction'
      }
    },
    todaysSpecial: [
      { name: 'Tandoori Platter', price: '₹699', description: 'Assortment of grilled delicacies' },
      { name: 'Chef Special Biryani', price: '₹449', description: 'Secret recipe biryani' }
    ],
    seating: {
      totalTables: 20,
      occupied: 12,
      available: 8,
      sections: ['Indoor', 'Outdoor', 'Private Dining']
    },
    bloggers: [
      {
        name: 'FoodieExplorer',
        rating: 4.8,
        review: 'Amazing North Indian cuisine with authentic flavors',
        date: '2024-02-15',
        images: [images.bloggers.review1, images.bloggers.review2]
      }
    ],
    reels: [
      {
        id: 1,
        url: 'reels/restaurant1/reel1.mp4',
        thumbnail: images.reels.thumbnail1,
        views: '10K',
        likes: '500'
      }
    ],
    gallery: [
      {
        category: 'Ambience',
        images: [images.restaurants.ambience1, images.restaurants.ambience2]
      },
      {
        category: 'Food',
        images: [images.restaurants.food1, images.restaurants.food2]
      }
    ],
    reviews: [
      {
        user: 'John D.',
        rating: 5,
        comment: 'Best North Indian food in the city',
        date: '2024-02-20'
      }
    ],
    overview: {
      established: '2015',
      speciality: 'North Indian',
      averageCost: '₹1000 for two',
      popularDishes: ['Butter Chicken', 'Dal Makhani'],
      facilities: ['Parking', 'WiFi', 'Air Conditioning'],
      paymentMethods: ['Cash', 'Cards', 'UPI'],
      additionalInfo: {
        alcohol: 'Served',
        musicType: 'Soft Instrumental',
        dressCode: 'Smart Casual'
      }
    }
  },
  2: {  // Coastal Flavors - Mumbai
    menu: {
      ...generateRestaurantMenu('seafood', 'mumbai'),
      specialSeafood: [
        { name: 'Lobster Thermidor', price: '₹1899', isVeg: false, description: 'Fresh lobster in creamy sauce', spiceLevel: 'Medium' },
        { name: 'Crab Masala', price: '₹899', isVeg: false, description: 'Fresh crab in coastal spices', spiceLevel: 'Hot' }
      ]
    },
    specialFeatures: {
      dietaryOptions: {
        jain: true,
        glutenFree: true,
        vegan: true,
        sugarFree: true
      },
      mealPeriods: {
        lunch: {
          timing: '12:00 PM - 3:30 PM',
          specialBuffet: true,
          buffetPrice: '₹799'
        },
        dinner: {
          timing: '7:00 PM - 11:30 PM',
          specialBuffet: true,
          buffetPrice: '₹999'
        }
      },
      entertainment: {
        liveMusic: {
          days: ['Friday', 'Saturday'],
          timing: '8:00 PM - 11:00 PM',
          genre: 'Classical Indian'
        },
        events: [
          {
            name: 'Wine & Dine Night',
            day: 'Thursday',
            description: 'Complimentary wine tasting with dinner'
          },
          {
            name: 'Sunday Brunch',
            day: 'Sunday',
            description: 'Extended brunch with live stations'
          }
        ]
      },
      seatingPreferences: {
        romantic: {
          available: true,
          description: 'Candlelit tables with privacy',
          priceExtra: '₹500'
        },
        groupDining: {
          available: true,
          maxCapacity: 20,
          advanceBooking: '2 days'
        },
        privateRoom: {
          available: true,
          capacity: '10-15',
          minimumSpend: '₹10000'
        }
      },
      chefTable: {
        available: true,
        capacity: 8,
        pricePerPerson: '₹2499',
        description: 'Exclusive 7-course tasting menu with chef interaction'
      },
      virtualTour: {
        enabled: true,
        tourUrl: 'virtual-tours/coastal-flavors/tour.html',
        highlights: [
          'Seaside Seating',
          'Live Kitchen',
          'Private Dining Areas'
        ],
        viewPoints: [
          {
            name: 'Seaside Deck',
            thumbnail: images.restaurants.deck1,
            description: '180° sea view dining area'
          },
          {
            name: 'Live Kitchen',
            thumbnail: images.restaurants.kitchen1,
            description: 'Watch our chefs in action'
          }
        ]
      },
      liveSeafoodCounter: {
        available: true,
        timing: '12:00 PM - 10:00 PM',
        features: [
          'Pick your own seafood',
          'Choose your cooking style',
          'Customize spice levels'
        ]
      }
    },
    todaysSpecial: [
      { name: 'Seafood Platter', price: '₹999', description: 'Assortment of grilled seafood' },
      { name: 'Lobster Thermidor', price: '₹1499', description: 'Baked lobster with cheese sauce' }
    ],
    seating: {
      totalTables: 15,
      occupied: 10,
      available: 5,
      sections: ['Indoor', 'Sea View']
    },
    bloggers: [
      {
        name: 'SeafoodLover',
        rating: 4.9,
        review: 'Best seafood restaurant in Mumbai. Fresh catch and amazing preparations!',
        date: '2024-02-10',
        images: [images.bloggers.seafood1, images.bloggers.seafood2]
      }
    ],
    reels: [
      {
        id: 1,
        url: 'reels/restaurant2/reel1.mp4',
        thumbnail: images.reels.seafood1,
        views: '15K',
        likes: '750'
      }
    ],
    gallery: [
      {
        category: 'Food',
        images: [images.restaurants.seafood1, images.restaurants.seafood2]
      },
      {
        category: 'Ambience',
        images: [images.restaurants.seaview1, images.restaurants.seaview2]
      }
    ],
    reviews: [
      {
        user: 'Sarah M.',
        rating: 5,
        comment: 'Amazing seafood experience with great sea view',
        date: '2024-02-18'
      }
    ],
    overview: {
      established: '2018',
      speciality: 'Coastal Cuisine',
      averageCost: '₹1500 for two',
      popularDishes: ['Pomfret Curry', 'Prawn Koliwada'],
      facilities: ['Valet Parking', 'Sea View', 'Air Conditioning'],
      paymentMethods: ['Cash', 'Cards', 'UPI'],
      additionalInfo: {
        alcohol: 'Served',
        musicType: 'Live Band (Weekends)',
        dressCode: 'Smart Casual'
      }
    }
  },
  3: {  // Pure Veg Paradise - Mumbai
    menu: {
      ...generateRestaurantMenu('gujarati', 'mumbai'),
      thalis: [
        { name: 'Gujarati Thali', price: '₹399', isVeg: true, description: 'Complete meal with various dishes', spiceLevel: 'Medium' },
        { name: 'Jain Special Thali', price: '₹449', isVeg: true, description: 'No onion no garlic thali', spiceLevel: 'Mild' }
      ]
    },
    todaysSpecial: [
      { name: 'Kathiyawadi Thali', price: '₹499', description: 'Special thali with regional dishes' },
      { name: 'Farsaan Platter', price: '₹349', description: 'Assorted Gujarati snacks' }
    ],
    seating: {
      totalTables: 25,
      occupied: 15,
      available: 10,
      sections: ['Family', 'Group Dining', 'Private']
    },
    bloggers: [
      {
        name: 'VegFoodLover',
        rating: 4.7,
        review: 'Authentic Gujarati flavors, perfect for family dining',
        date: '2024-02-12',
        images: [images.bloggers.gujarati1, images.bloggers.gujarati2]
      }
    ],
    reels: [
      {
        id: 1,
        url: 'reels/restaurant3/reel1.mp4',
        thumbnail: images.reels.gujarati1,
        views: '12K',
        likes: '600'
      }
    ],
    gallery: [
      {
        category: 'Food',
        images: [images.restaurants.gujarati1, images.restaurants.gujarati2]
      },
      {
        category: 'Ambience',
        images: [images.restaurants.interior1, images.restaurants.interior2]
      }
    ],
    reviews: [
      {
        user: 'Priya P.',
        rating: 5,
        comment: 'Best Gujarati thali in Mumbai',
        date: '2024-02-19'
      }
    ],
    overview: {
      established: '2016',
      speciality: 'Gujarati Cuisine',
      averageCost: '₹800 for two',
      popularDishes: ['Undhiyu', 'Gujarati Thali'],
      facilities: ['Family Seating', 'Prayer Room', 'Air Conditioning'],
      paymentMethods: ['Cash', 'Cards', 'UPI'],
      additionalInfo: {
        alcohol: 'Not Served',
        musicType: 'Traditional Gujarati',
        dressCode: 'Casual'
      }
    }
  },
  4: {  // Mumbai Spice
    menu: {
      starters: [
        { name: 'Vada Pav', price: '₹49', isVeg: true, description: 'Mumbai\'s favorite street food' },
        { name: 'Bhel Puri', price: '₹79', isVeg: true, description: 'Puffed rice with tangy chutneys' }
      ],
      mainCourse: [
        { name: 'Pav Bhaji', price: '₹149', isVeg: true, description: 'Spiced vegetable mash with buttered pav' },
        { name: 'Misal Pav', price: '₹129', isVeg: true, description: 'Spicy sprouts curry with bread' }
      ],
      desserts: [
        { name: 'Kulfi Falooda', price: '₹129', isVeg: true, description: 'Indian ice cream with vermicelli' }
      ]
    },
    todaysSpecial: [
      { name: 'Mumbai Special Thali', price: '₹299', description: 'Complete meal with local favorites' },
      { name: 'Chaat Platter', price: '₹249', description: 'Assortment of street food items' }
    ],
    seating: {
      totalTables: 12,
      occupied: 8,
      available: 4,
      sections: ['Street Style', 'Regular']
    },
    bloggers: [
      {
        name: 'StreetFoodKing',
        rating: 4.6,
        review: 'Authentic Mumbai street food in a clean setting',
        date: '2024-02-14',
        images: [images.bloggers.street1, images.bloggers.street2]
      }
    ],
    reels: [
      {
        id: 1,
        url: 'reels/restaurant4/reel1.mp4',
        thumbnail: images.reels.street1,
        views: '20K',
        likes: '1.2K'
      }
    ],
    gallery: [
      {
        category: 'Food',
        images: [images.restaurants.street1, images.restaurants.street2]
      },
      {
        category: 'Ambience',
        images: [images.restaurants.casual1, images.restaurants.casual2]
      }
    ],
    reviews: [
      {
        user: 'Raj S.',
        rating: 4.5,
        comment: 'Perfect place for Mumbai street food cravings',
        date: '2024-02-17'
      }
    ],
    overview: {
      established: '2019',
      speciality: 'Mumbai Street Food',
      averageCost: '₹400 for two',
      popularDishes: ['Vada Pav', 'Pav Bhaji'],
      facilities: ['Quick Service', 'Takeaway', 'Air Conditioning'],
      paymentMethods: ['Cash', 'UPI'],
      additionalInfo: {
        alcohol: 'Not Served',
        musicType: 'Bollywood',
        dressCode: 'Casual'
      }
    }
  },
  5: {  // The Great Punjab
    menu: {
      starters: [
        { name: 'Amritsari Fish', price: '₹449', isVeg: false, description: 'Crispy fish with Punjabi spices' },
        { name: 'Tandoori Mushroom', price: '₹349', isVeg: true, description: 'Marinated mushrooms grilled in tandoor' }
      ],
      mainCourse: [
        { name: 'Butter Chicken', price: '₹499', isVeg: false, description: 'Delhi style butter chicken' },
        { name: 'Dal Makhani', price: '₹349', isVeg: true, description: 'Creamy black lentils' },
        { name: 'Sarson Ka Saag', price: '₹399', isVeg: true, description: 'Traditional Punjabi mustard greens' }
      ],
      desserts: [
        { name: 'Phirni', price: '₹199', isVeg: true, description: 'Traditional rice pudding' }
      ]
    },
    todaysSpecial: [
      { name: 'Punjabi Thali', price: '₹699', description: 'Complete meal with North Indian delicacies' },
      { name: 'Kebab Platter', price: '₹899', description: 'Assorted kebabs from our tandoor' }
    ],
    seating: {
      totalTables: 30,
      occupied: 22,
      available: 8,
      sections: ['Indoor', 'Rooftop', 'Private Dining']
    },
    bloggers: [
      {
        name: 'DelhiFoodie',
        rating: 4.8,
        review: 'Best butter chicken in Delhi NCR!',
        date: '2024-02-16',
        images: [images.bloggers.punjabi1, images.bloggers.punjabi2]
      }
    ],
    reels: [
      {
        id: 1,
        url: 'reels/restaurant5/reel1.mp4',
        thumbnail: images.reels.punjabi1,
        views: '25K',
        likes: '1.5K'
      }
    ],
    gallery: [
      {
        category: 'Food',
        images: [images.restaurants.punjabi1, images.restaurants.punjabi2]
      },
      {
        category: 'Ambience',
        images: [images.restaurants.rooftop1, images.restaurants.rooftop2]
      }
    ],
    reviews: [
      {
        user: 'Amit K.',
        rating: 5,
        comment: 'Authentic Punjabi flavors, great ambiance',
        date: '2024-02-21'
      }
    ],
    overview: {
      established: '2014',
      speciality: 'North Indian & Punjabi',
      averageCost: '₹1200 for two',
      popularDishes: ['Butter Chicken', 'Dal Makhani', 'Amritsari Fish'],
      facilities: ['Valet Parking', 'Live Music', 'Rooftop Seating'],
      paymentMethods: ['Cash', 'Cards', 'UPI'],
      additionalInfo: {
        alcohol: 'Full Bar Available',
        musicType: 'Live Punjabi Music (Weekends)',
        dressCode: 'Smart Casual'
      }
    }
  },
  6: {  // Delhi Darbar
    menu: {
      starters: [
        { name: 'Galouti Kebab', price: '₹499', isVeg: false, description: 'Melt-in-mouth minced meat kebabs' },
        { name: 'Kakori Kebab', price: '₹549', isVeg: false, description: 'Traditional Lucknowi kebabs' }
      ],
      mainCourse: [
        { name: 'Nihari', price: '₹599', isVeg: false, description: 'Slow-cooked meat stew' },
        { name: 'Murgh Musallam', price: '₹699', isVeg: false, description: 'Whole chicken in rich gravy' },
        { name: 'Biryani', price: '₹499', isVeg: false, description: 'Fragrant rice with meat' }
      ],
      desserts: [
        { name: 'Shahi Tukda', price: '₹249', isVeg: true, description: 'Royal bread pudding' }
      ]
    },
    todaysSpecial: [
      { name: 'Royal Mughlai Thali', price: '₹899', description: 'Assortment of Mughlai delicacies' },
      { name: 'Kebab Tasting Platter', price: '₹799', description: 'Selection of our finest kebabs' }
    ],
    seating: {
      totalTables: 25,
      occupied: 18,
      available: 7,
      sections: ['Main Hall', 'Private Dining', 'Courtyard']
    },
    bloggers: [
      {
        name: 'MughlaiMaster',
        rating: 4.7,
        review: 'Authentic Mughlai cuisine that takes you back in time',
        date: '2024-02-18',
        images: [images.bloggers.mughlai1, images.bloggers.mughlai2]
      }
    ],
    reels: [
      {
        id: 1,
        url: 'reels/restaurant6/reel1.mp4',
        thumbnail: images.reels.mughlai1,
        views: '18K',
        likes: '900'
      }
    ],
    gallery: [
      {
        category: 'Food',
        images: [images.restaurants.mughlai1, images.restaurants.mughlai2]
      },
      {
        category: 'Ambience',
        images: [images.restaurants.royal1, images.restaurants.royal2]
      }
    ],
    reviews: [
      {
        user: 'Zara M.',
        rating: 4.8,
        comment: 'Best Mughlai food in Delhi, royal experience',
        date: '2024-02-20'
      }
    ],
    overview: {
      established: '2012',
      speciality: 'Mughlai Cuisine',
      averageCost: '₹1500 for two',
      popularDishes: ['Galouti Kebab', 'Nihari', 'Biryani'],
      facilities: ['Valet Parking', 'Private Dining', 'Live Qawwali'],
      paymentMethods: ['Cash', 'Cards', 'UPI'],
      additionalInfo: {
        alcohol: 'Full Bar Available',
        musicType: 'Classical Indian & Qawwali',
        dressCode: 'Smart Casual to Formal'
      }
    }
  }
  // ... Similar structure for all 31 restaurants
}; 