import { images } from '../assets/images';

export const restaurantContent = {
  bloggers: {
    delhi: {
      foodBloggers: [
        {
          name: 'DelhiFoodster',
          followers: '500K',
          speciality: 'Street Food',
          reviews: {
            northIndian: [
              { 
                restaurantId: 1,
                rating: 4.8,
                review: 'The butter chicken here is to die for! Authentic Punjabi flavors.',
                date: '2024-02-15',
                images: [images.bloggers.delhi1, images.bloggers.delhi2],
                likes: '15K',
                comments: '2.3K'
              }
            ],
            mughlai: [
              {
                restaurantId: 6,
                rating: 4.9,
                review: 'Best Galouti Kebabs in Delhi! Royal dining experience.',
                date: '2024-02-20',
                images: [images.bloggers.mughlai1, images.bloggers.mughlai2],
                likes: '18K',
                comments: '2.8K'
              }
            ]
          }
        },
        {
          name: 'DelhiBites',
          followers: '300K',
          speciality: 'Fine Dining',
          reviews: {
            // Similar structure
          }
        }
      ]
    },
    mumbai: {
      foodBloggers: [
        {
          name: 'MumbaiMunchies',
          followers: '450K',
          speciality: 'Street Food & Seafood',
          reviews: {
            streetFood: [
              {
                restaurantId: 3,
                rating: 4.7,
                review: 'Best vada pav in Mumbai! Authentic street flavors.',
                date: '2024-02-18',
                images: [images.bloggers.mumbai1, images.bloggers.mumbai2],
                likes: '12K',
                comments: '1.8K'
              }
            ],
            seafood: [
              {
                restaurantId: 2,
                rating: 4.9,
                review: 'Fresh seafood and amazing coastal curries!',
                date: '2024-02-22',
                images: [images.bloggers.coastal1, images.bloggers.coastal2],
                likes: '20K',
                comments: '3.2K'
              }
            ]
          }
        }
      ]
    },
    bangalore: {
      foodBloggers: [
        {
          name: 'BangaloreFoodTales',
          followers: '420K',
          speciality: 'South Indian & Fusion',
          reviews: {
            southIndian: [
              {
                restaurantId: 7,
                rating: 4.9,
                review: 'Best dosa varieties in Bangalore! Must try their Ghee Roast.',
                date: '2024-02-19',
                images: [images.bloggers.blr1, images.bloggers.blr2],
                likes: '22K',
                comments: '3.1K',
                dishes: ['Mysore Masala Dosa', 'Filter Coffee']
              }
            ],
            modernIndian: [
              {
                restaurantId: 8,
                rating: 4.8,
                review: 'Innovative fusion dishes that actually work! Amazing presentation.',
                date: '2024-02-21',
                images: [images.bloggers.fusion1, images.bloggers.fusion2],
                likes: '19K',
                comments: '2.8K',
                dishes: ['Curry Leaf Pasta', 'Masala Steak']
              }
            ]
          },
          featuredContent: {
            videoReviews: ['url1', 'url2'],
            instagramStories: ['story1', 'story2']
          }
        },
        {
          name: 'BengaluruBites',
          followers: '380K',
          speciality: 'Cafe & Breweries',
          reviews: {
            cafes: [
              {
                restaurantId: 9,
                rating: 4.7,
                review: 'Perfect brunch spot with amazing coffee and ambiance!',
                date: '2024-02-23',
                images: [images.bloggers.cafe1, images.bloggers.cafe2],
                likes: '16K',
                comments: '2.1K'
              }
            ]
          }
        }
      ]
    },
    pune: {
      foodBloggers: [
        {
          name: 'PuneFoodDiaries',
          followers: '320K',
          speciality: 'Maharashtrian Cuisine',
          reviews: {
            traditional: [
              {
                restaurantId: 10,
                rating: 4.8,
                review: 'Best Misal Pav in Pune! Authentic Maharashtrian flavors.',
                date: '2024-02-25',
                images: [images.bloggers.pune1, images.bloggers.pune2],
                likes: '16K',
                comments: '2.4K',
                dishes: ['Misal Pav', 'Thalipeeth']
              }
            ]
          }
        }
      ]
    },
    hyderabad: {
      foodBloggers: [
        {
          name: 'HyderabadiFoodie',
          followers: '480K',
          speciality: 'Biryani & Mughlai',
          reviews: {
            biryani: [
              {
                restaurantId: 11,
                rating: 4.9,
                review: 'Paradise Biryani lives up to its name! Royal taste.',
                date: '2024-02-24',
                images: [images.bloggers.hyd1, images.bloggers.hyd2],
                likes: '25K',
                comments: '3.8K',
                dishes: ['Hyderabadi Biryani', 'Haleem']
              }
            ]
          }
        }
      ]
    }
  },

  reels: {
    trending: [
      {
        restaurantId: 1,
        reels: [
          {
            id: 'reel1',
            url: 'reels/restaurant1/butter-chicken.mp4',
            thumbnail: images.reels.butterChicken,
            title: 'Making of Butter Chicken',
            views: '50K',
            likes: '5K',
            shares: '1K',
            tags: ['NorthIndian', 'ButterChicken', 'DelhiFood']
          },
          {
            id: 'reel2',
            url: 'reels/restaurant1/tandoor.mp4',
            thumbnail: images.reels.tandoor,
            title: 'Behind the Tandoor',
            views: '35K',
            likes: '3.2K',
            shares: '800',
            tags: ['Tandoor', 'IndianCuisine', 'ChefSpecial']
          }
        ]
      },
      {
        restaurantId: 2,
        reels: [
          {
            id: 'reel3',
            url: 'reels/restaurant2/seafood-prep.mp4',
            thumbnail: images.reels.seafood,
            title: 'Fresh Catch of the Day',
            views: '45K',
            likes: '4.8K',
            shares: '1.2K',
            tags: ['Seafood', 'MumbaiFoodie', 'CoastalCuisine']
          }
        ]
      }
    ],
    behindTheScenes: [
      {
        restaurantId: 1,
        reels: [
          {
            id: 'bts1',
            url: 'reels/restaurant1/chef-special.mp4',
            thumbnail: images.reels.chefSpecial,
            title: 'A Day with Our Head Chef',
            views: '75K',
            likes: '8.2K',
            shares: '2.1K',
            tags: ['ChefLife', 'KitchenSecrets', 'FoodPrep']
          }
        ]
      }
    ],
    festivalSpecials: [
      {
        restaurantId: 3,
        reels: [
          {
            id: 'fest1',
            url: 'reels/restaurant3/diwali-special.mp4',
            thumbnail: images.reels.diwali,
            title: 'Diwali Special Menu Preview',
            views: '62K',
            likes: '7.1K',
            shares: '1.8K',
            tags: ['DiwaliSpecial', 'FestiveSeason', 'IndianSweets']
          }
        ]
      }
    ],
    quickRecipes: [
      {
        restaurantId: 2,
        reels: [
          {
            id: 'recipe1',
            url: 'reels/restaurant2/quick-prawn.mp4',
            thumbnail: images.reels.prawnCurry,
            title: '5-Minute Prawn Curry',
            views: '55K',
            likes: '6.3K',
            shares: '3.2K',
            tags: ['QuickRecipe', 'SeafoodLover', 'CookingTips']
          }
        ]
      }
    ]
  },

  gallery: {
    restaurants: {
      1: { // Royal Tandoor
        food: [
          {
            category: 'Signature Dishes',
            images: [
              {
                url: images.gallery.butterChicken,
                title: 'Butter Chicken',
                description: 'Our signature butter chicken preparation',
                likes: '2.5K'
              },
              {
                url: images.gallery.dalMakhani,
                title: 'Dal Makhani',
                description: 'Black lentils cooked overnight',
                likes: '1.8K'
              }
            ]
          },
          {
            category: 'Ambience',
            images: [
              {
                url: images.gallery.dining1,
                title: 'Main Dining Area',
                description: 'Royal dining experience',
                likes: '3.2K'
              },
              {
                url: images.gallery.private1,
                title: 'Private Dining',
                description: 'Exclusive private dining room',
                likes: '2.1K'
              }
            ]
          }
        ],
        events: [
          {
            category: 'Special Events',
            images: [
              {
                url: images.gallery.event1,
                title: 'Wine & Dine Night',
                description: 'Monthly special event',
                likes: '1.5K'
              }
            ]
          }
        ]
      },
      2: { // Coastal Flavors
        food: [
          {
            category: 'Seafood Specials',
            images: [
              {
                url: images.gallery.prawns,
                title: 'Tandoori Prawns',
                description: 'Grilled prawns with coastal spices',
                likes: '3.8K'
              }
            ]
          }
        ],
        ambience: [
          // Similar structure for ambience photos
        ]
      },
      3: { // Mumbai Street Food Paradise
        food: [
          {
            category: 'Street Food Favorites',
            images: [
              {
                url: images.gallery.vadaPav,
                title: 'Mumbai Vada Pav',
                description: 'Classic street food with spicy potato patty',
                likes: '4.2K'
              },
              {
                url: images.gallery.pavBhaji,
                title: 'Special Pav Bhaji',
                description: 'Buttery and spicy vegetable mash',
                likes: '3.9K'
              }
            ]
          }
        ],
        ambience: [
          {
            category: 'Street Style Setup',
            images: [
              {
                url: images.gallery.streetView1,
                title: 'Live Counter',
                description: 'Watch your food being prepared',
                likes: '2.8K'
              }
            ]
          }
        ]
      },
      4: { // South Indian Delight
        food: [
          {
            category: 'Dosa Varieties',
            images: [
              {
                url: images.gallery.masalaDosa,
                title: 'Mysore Masala Dosa',
                description: 'Crispy dosa with spicy chutney',
                likes: '5.1K'
              },
              {
                url: images.gallery.idli,
                title: 'Idli Sambar',
                description: 'Soft idlis with sambar and chutney',
                likes: '3.7K'
              }
            ]
          }
        ],
        ambience: [
          {
            category: 'Traditional Setting',
            images: [
              {
                url: images.gallery.southIndian1,
                title: 'Banana Leaf Dining',
                description: 'Traditional South Indian dining experience',
                likes: '4.5K'
              }
            ]
          }
        ]
      }
    }
  }
}; 