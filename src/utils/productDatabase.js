import { CATEGORIES } from './constants.js';

export const PRODUCT_CATALOG = [
  // Produce
  { id: 'p1', name: 'Organic Honeycrisp Apples', category: CATEGORIES.PRODUCE, brand: 'Organic Valley', price: 4.99, unit: 'lbs', organic: true, tags: ['fruit', 'crisp', 'apple', 'fresh'] },
  { id: 'p2', name: 'Fuji Apples', category: CATEGORIES.PRODUCE, brand: 'Stemilt', price: 2.99, unit: 'lbs', organic: false, tags: ['fruit', 'sweet', 'apple'] },
  { id: 'p3', name: 'Organic Bananas', category: CATEGORIES.PRODUCE, brand: 'Chiquita', price: 1.49, unit: 'bunches', organic: true, tags: ['fruit', 'potassium', 'banana', 'fresh'] },
  { id: 'p4', name: 'Fresh Strawberries', category: CATEGORIES.PRODUCE, brand: "Driscoll's", price: 3.99, unit: 'packs', organic: false, tags: ['berry', 'sweet', 'fruit', 'strawberry'] },
  { id: 'p5', name: 'Organic Blueberries', category: CATEGORIES.PRODUCE, brand: "Driscoll's", price: 4.49, unit: 'packs', organic: true, tags: ['berry', 'antioxidant', 'fruit'] },
  { id: 'p6', name: 'Baby Spinach', category: CATEGORIES.PRODUCE, brand: 'Earthbound Farm', price: 2.99, unit: 'bags', organic: true, tags: ['greens', 'salad', 'vegetable', 'iron'] },
  { id: 'p7', name: 'Hass Avocados', category: CATEGORIES.PRODUCE, brand: 'Mission', price: 3.49, unit: 'packs', organic: false, tags: ['healthy fats', 'guacamole', 'avocado'] },
  { id: 'p8', name: 'Organic Avocados', category: CATEGORIES.PRODUCE, brand: 'Calavo', price: 4.99, unit: 'packs', organic: true, tags: ['healthy fats', 'avocado', 'organic'] },
  { id: 'p9', name: 'Roma Tomatoes', category: CATEGORIES.PRODUCE, brand: 'Sunset', price: 1.99, unit: 'lbs', organic: false, tags: ['salad', 'vegetable', 'cooking', 'tomato'] },
  { id: 'p10', name: 'English Seedless Cucumbers', category: CATEGORIES.PRODUCE, brand: 'Mucii', price: 1.29, unit: 'items', organic: false, tags: ['salad', 'crisp', 'cucumber'] },
  { id: 'p11', name: 'Broccoli Crowns', category: CATEGORIES.PRODUCE, brand: 'Andy Boy', price: 2.29, unit: 'lbs', organic: false, tags: ['vegetable', 'green', 'broccoli'] },
  { id: 'p12', name: 'Organic Carrots', category: CATEGORIES.PRODUCE, brand: 'Grimmway Farms', price: 1.89, unit: 'bags', organic: true, tags: ['vegetable', 'crunchy', 'carrot'] },
  { id: 'p13', name: 'Yellow Onions', category: CATEGORIES.PRODUCE, brand: 'Sweet Sweets', price: 2.49, unit: 'bags', organic: false, tags: ['cooking', 'essential', 'onion'] },
  { id: 'p14', name: 'Fresh Garlic Bulbs', category: CATEGORIES.PRODUCE, brand: 'Christopher Ranch', price: 1.19, unit: 'packs', organic: false, tags: ['aromatic', 'cooking', 'garlic'] },
  { id: 'p15', name: 'Seedless Red Grapes', category: CATEGORIES.PRODUCE, brand: 'Sunview', price: 3.49, unit: 'lbs', organic: false, tags: ['fruit', 'snack', 'grapes'] },
  { id: 'p16', name: 'Lemons', category: CATEGORIES.PRODUCE, brand: 'Sunkist', price: 2.99, unit: 'bags', organic: false, tags: ['citrus', 'sour', 'lemon', 'vitamin c'] },
  { id: 'p17', name: 'Limes', category: CATEGORIES.PRODUCE, brand: 'Sunkist', price: 1.99, unit: 'bags', organic: false, tags: ['citrus', 'lime'] },
  { id: 'p18', name: 'Bell Peppers (Tricolor)', category: CATEGORIES.PRODUCE, brand: 'Village Farms', price: 3.99, unit: 'packs', organic: false, tags: ['crisp', 'peppers', 'vegetable'] },
  { id: 'p19', name: 'Potatoes (Russet)', category: CATEGORIES.PRODUCE, brand: 'Idahoan', price: 3.49, unit: 'bags', organic: false, tags: ['staple', 'baking', 'potato'] },
  { id: 'p20', name: 'Sweet Potatoes', category: CATEGORIES.PRODUCE, brand: 'NC Yam', price: 2.19, unit: 'lbs', organic: true, tags: ['healthy', 'sweet', 'potato'] },
  { id: 'p21', name: 'Organic Kale', category: CATEGORIES.PRODUCE, brand: 'Cal-Organic', price: 2.49, unit: 'bunches', organic: true, tags: ['superfood', 'smoothie', 'greens'] },
  { id: 'p22', name: 'Fresh Ginger Root', category: CATEGORIES.PRODUCE, brand: 'Spice Island', price: 2.99, unit: 'lbs', organic: true, tags: ['spice', 'tea', 'ginger'] },
  { id: 'p23', name: 'Watermelon (Mini)', category: CATEGORIES.PRODUCE, brand: 'Dulce', price: 4.99, unit: 'items', organic: false, tags: ['summer', 'refreshing', 'fruit'] },
  { id: 'p24', name: 'Mangoes (Ataulfo)', category: CATEGORIES.PRODUCE, brand: 'Splendido', price: 1.49, unit: 'items', organic: false, tags: ['tropical', 'sweet', 'fruit'] },
  { id: 'p25', name: 'Mushrooms (Baby Bella)', category: CATEGORIES.PRODUCE, brand: 'Giorgio', price: 2.69, unit: 'packs', organic: false, tags: ['savory', 'umami', 'mushroom'] },

  // Dairy & Eggs
  { id: 'd1', name: 'Whole Milk', category: CATEGORIES.DAIRY_EGGS, brand: 'Horizon Organic', price: 4.89, unit: 'gallons', organic: true, tags: ['milk', 'calcium', 'dairy'] },
  { id: 'd2', name: '2% Reduced Fat Milk', category: CATEGORIES.DAIRY_EGGS, brand: 'Fairlife', price: 4.39, unit: 'bottles', organic: false, tags: ['milk', 'protein', 'low-fat'] },
  { id: 'd3', name: 'Unsweetened Almond Milk', category: CATEGORIES.DAIRY_EGGS, brand: 'Silk', price: 3.49, unit: 'cartons', organic: true, tags: ['dairy-free', 'vegan', 'almond', 'plant-based'] },
  { id: 'd4', name: 'Creamy Oat Milk', category: CATEGORIES.DAIRY_EGGS, brand: 'Oatly', price: 4.99, unit: 'cartons', organic: true, tags: ['dairy-free', 'vegan', 'coffee', 'oat milk'] },
  { id: 'd5', name: 'Organic Soy Milk', category: CATEGORIES.DAIRY_EGGS, brand: 'Silk', price: 3.69, unit: 'cartons', organic: true, tags: ['plant-based', 'protein', 'dairy-free'] },
  { id: 'd6', name: 'Large Grade A Eggs', category: CATEGORIES.DAIRY_EGGS, brand: 'Egglands Best', price: 3.79, unit: 'dozen', organic: false, tags: ['eggs', 'breakfast', 'protein'] },
  { id: 'd7', name: 'Pasture-Raised Organic Eggs', category: CATEGORIES.DAIRY_EGGS, brand: 'Vital Farms', price: 6.49, unit: 'dozen', organic: true, tags: ['eggs', 'pasture-raised', 'ethical'] },
  { id: 'd8', name: 'Unsalted Butter', category: CATEGORIES.DAIRY_EGGS, brand: 'Kerrygold', price: 4.69, unit: 'packs', organic: false, tags: ['butter', 'baking', 'irish'] },
  { id: 'd9', name: 'Plant-Based Butter', category: CATEGORIES.DAIRY_EGGS, brand: 'Miyokos Creamery', price: 5.29, unit: 'packs', organic: true, tags: ['dairy-free', 'vegan', 'butter'] },
  { id: 'd10', name: 'Greek Yogurt (Plain 0%)', category: CATEGORIES.DAIRY_EGGS, brand: 'Fage', price: 5.49, unit: 'tubs', organic: false, tags: ['yogurt', 'probiotics', 'protein'] },
  { id: 'd11', name: 'Vanilla Greek Yogurt', category: CATEGORIES.DAIRY_EGGS, brand: 'Chobani', price: 4.99, unit: 'tubs', organic: false, tags: ['yogurt', 'breakfast', 'sweet'] },
  { id: 'd12', name: 'Cheddar Cheese Block', category: CATEGORIES.DAIRY_EGGS, brand: 'Cabot', price: 3.99, unit: 'packs', organic: false, tags: ['cheese', 'snack', 'sharp'] },
  { id: 'd13', name: 'Shredded Mozzarella Cheese', category: CATEGORIES.DAIRY_EGGS, brand: 'Kraft', price: 3.29, unit: 'bags', organic: false, tags: ['pizza', 'cheese', 'pasta'] },
  { id: 'd14', name: 'Heavy Whipping Cream', category: CATEGORIES.DAIRY_EGGS, brand: 'Darigold', price: 3.19, unit: 'cartons', organic: false, tags: ['baking', 'coffee', 'cream'] },
  { id: 'd15', name: 'Sour Cream', category: CATEGORIES.DAIRY_EGGS, brand: 'Daisy', price: 2.19, unit: 'tubs', organic: false, tags: ['dips', 'tacos', 'baking'] },
  { id: 'd16', name: 'Cream Cheese', category: CATEGORIES.DAIRY_EGGS, brand: 'Philadelphia', price: 2.89, unit: 'packs', organic: false, tags: ['bagels', 'baking', 'spread'] },
  { id: 'd17', name: 'Organic Cottage Cheese', category: CATEGORIES.DAIRY_EGGS, brand: 'Good Culture', price: 3.69, unit: 'tubs', organic: true, tags: ['protein', 'snack', 'cottage cheese'] },
  { id: 'd18', name: 'Parmigiano-Reggiano', category: CATEGORIES.DAIRY_EGGS, brand: 'Zanetti', price: 7.99, unit: 'packs', organic: false, tags: ['gourmet', 'cheese', 'pasta'] },

  // Bakery
  { id: 'b1', name: 'Whole Wheat Sandwich Bread', category: CATEGORIES.BAKERY, brand: "Nature's Own", price: 3.49, unit: 'loaves', organic: false, tags: ['bread', 'sandwich', 'wheat'] },
  { id: 'b2', name: 'Artisan Sourdough Loaf', category: CATEGORIES.BAKERY, brand: 'La Brea Bakery', price: 4.99, unit: 'loaves', organic: true, tags: ['sourdough', 'artisan', 'bread'] },
  { id: 'b3', name: 'Gluten-Free White Bread', category: CATEGORIES.BAKERY, brand: "Canyon Bakehouse", price: 6.29, unit: 'loaves', organic: false, tags: ['gluten-free', 'allergy-friendly', 'bread'] },
  { id: 'b4', name: 'Plain Bagels (6-Pack)', category: CATEGORIES.BAKERY, brand: "Thomas'", price: 3.99, unit: 'packs', organic: false, tags: ['breakfast', 'bagels', 'bread'] },
  { id: 'b5', name: 'Everything Bagels', category: CATEGORIES.BAKERY, brand: "Dave's Killer Bread", price: 5.49, unit: 'packs', organic: true, tags: ['organic', 'breakfast', 'bagel'] },
  { id: 'b6', name: 'Whole Wheat English Muffins', category: CATEGORIES.BAKERY, brand: "Thomas'", price: 3.29, unit: 'packs', organic: false, tags: ['breakfast', 'toasting'] },
  { id: 'b7', name: 'Brioche Burger Buns', category: CATEGORIES.BAKERY, brand: "St Pierre", price: 4.19, unit: 'packs', organic: false, tags: ['bbq', 'burgers', 'buns'] },
  { id: 'b8', name: 'Corn Tortillas (30-ct)', category: CATEGORIES.BAKERY, brand: 'Mission', price: 2.19, unit: 'packs', organic: false, tags: ['gluten-free', 'tacos', 'mexican'] },
  { id: 'b9', name: 'Flour Tortillas (Large)', category: CATEGORIES.BAKERY, brand: 'Guerrero', price: 2.89, unit: 'packs', organic: false, tags: ['burritos', 'wraps', 'tortilla'] },
  { id: 'b10', name: 'Fresh Croissants (4-Pack)', category: CATEGORIES.BAKERY, brand: 'Bakery Fresh', price: 4.79, unit: 'packs', organic: false, tags: ['pastry', 'butter', 'french'] },

  // Meat & Seafood
  { id: 'm1', name: 'Boneless Skinless Chicken Breasts', category: CATEGORIES.MEAT_SEAFOOD, brand: 'Perdue', price: 9.99, unit: 'packs', organic: false, tags: ['chicken', 'protein', 'poultry', 'dinner'] },
  { id: 'm2', name: 'Organic Chicken Thighs', category: CATEGORIES.MEAT_SEAFOOD, brand: 'Bell & Evans', price: 8.49, unit: 'packs', organic: true, tags: ['organic', 'chicken', 'juicy'] },
  { id: 'm3', name: 'Grass-Fed Ground Beef (85/15)', category: CATEGORIES.MEAT_SEAFOOD, brand: 'Laura\'s Lean', price: 7.99, unit: 'lbs', organic: true, tags: ['beef', 'burgers', 'grass-fed'] },
  { id: 'm4', name: 'Wild Atlantic Salmon Fillet', category: CATEGORIES.MEAT_SEAFOOD, brand: 'Orca Bay', price: 12.99, unit: 'lbs', organic: false, tags: ['fish', 'omega-3', 'salmon', 'seafood'] },
  { id: 'm5', name: 'Pork Tenderloin', category: CATEGORIES.MEAT_SEAFOOD, brand: 'Smithfield', price: 6.99, unit: 'lbs', organic: false, tags: ['meat', 'roast', 'pork'] },
  { id: 'm6', name: 'Applewood Smoked Bacon', category: CATEGORIES.MEAT_SEAFOOD, brand: 'Applegate', price: 6.49, unit: 'packs', organic: true, tags: ['bacon', 'breakfast', 'organic'] },
  { id: 'm7', name: 'Raw Jumbo Shrimp (Peeled)', category: CATEGORIES.MEAT_SEAFOOD, brand: 'Aqua Star', price: 11.49, unit: 'bags', organic: false, tags: ['seafood', 'shrimp', 'frozen'] },
  { id: 'm8', name: 'Plant-Based Ground Beef', category: CATEGORIES.MEAT_SEAFOOD, brand: 'Beyond Meat', price: 5.99, unit: 'packs', organic: false, tags: ['vegan', 'substitute', 'plant-based'] },
  { id: 'm9', name: 'Turkey Breast Slices', category: CATEGORIES.MEAT_SEAFOOD, brand: "Boar's Head", price: 5.89, unit: 'packs', organic: false, tags: ['deli', 'sandwiches', 'lunch'] },

  // Pantry & Condiments
  { id: 'pt1', name: 'Extra Virgin Olive Oil', category: CATEGORIES.PANTRY, brand: 'California Olive Ranch', price: 13.99, unit: 'bottles', organic: true, tags: ['oil', 'cooking', 'olive oil', 'italian'] },
  { id: 'pt2', name: 'Organic Coconut Oil', category: CATEGORIES.PANTRY, brand: 'Nutiva', price: 8.99, unit: 'jars', organic: true, tags: ['oil', 'baking', 'vegan', 'keto'] },
  { id: 'pt3', name: 'Organic Peanut Butter (Creamy)', category: CATEGORIES.PANTRY, brand: 'Santa Cruz', price: 4.99, unit: 'jars', organic: true, tags: ['spread', 'protein', 'peanut butter'] },
  { id: 'pt4', name: 'Creamy Almond Butter', category: CATEGORIES.PANTRY, brand: 'Justin\'s', price: 7.49, unit: 'jars', organic: false, tags: ['substitute', 'nut butter', 'snack'] },
  { id: 'pt5', name: 'Raw Unfiltered Honey', category: CATEGORIES.PANTRY, brand: 'Nature Nate\'s', price: 6.99, unit: 'bottles', organic: true, tags: ['sweetener', 'natural', 'tea', 'honey'] },
  { id: 'pt6', name: '100% Pure Maple Syrup', category: CATEGORIES.PANTRY, brand: 'Maple Grove', price: 8.49, unit: 'bottles', organic: true, tags: ['pancakes', 'natural', 'sweetener'] },
  { id: 'pt7', name: 'Organic Stevia Sweetener', category: CATEGORIES.PANTRY, brand: 'Pyure', price: 5.29, unit: 'boxes', organic: true, tags: ['zero-calorie', 'sugar-free', 'keto'] },
  { id: 'pt8', name: 'Jasmine White Rice', category: CATEGORIES.PANTRY, brand: 'Dynasty', price: 4.89, unit: 'bags', organic: false, tags: ['rice', 'staple', 'asian'] },
  { id: 'pt9', name: 'Organic Quinoa (Tricolor)', category: CATEGORIES.PANTRY, brand: 'Lundberg', price: 5.99, unit: 'bags', organic: true, tags: ['grain', 'protein', 'gluten-free'] },
  { id: 'pt10', name: 'Organic Penne Rigate Pasta', category: CATEGORIES.PANTRY, brand: 'Barilla', price: 2.19, unit: 'boxes', organic: false, tags: ['pasta', 'italian', 'dinner'] },
  { id: 'pt11', name: 'Gluten-Free Pasta', category: CATEGORIES.PANTRY, brand: 'Banza Chickpea', price: 3.99, unit: 'boxes', organic: false, tags: ['gluten-free', 'protein', 'chickpea'] },
  { id: 'pt12', name: 'Marinara Tomato Sauce', category: CATEGORIES.PANTRY, brand: "Rao's Homemade", price: 7.99, unit: 'jars', organic: false, tags: ['sauce', 'pasta', 'gourmet'] },
  { id: 'pt13', name: 'Organic Black Beans', category: CATEGORIES.PANTRY, brand: 'Eden Foods', price: 1.79, unit: 'cans', organic: true, tags: ['beans', 'fiber', 'pantry'] },
  { id: 'pt14', name: 'Chickpeas (Garbanzo Beans)', category: CATEGORIES.PANTRY, brand: 'Goya', price: 1.49, unit: 'cans', organic: false, tags: ['beans', 'hummus', 'salad'] },
  { id: 'pt15', name: 'Soy Sauce (Low Sodium)', category: CATEGORIES.PANTRY, brand: 'Kikkoman', price: 3.19, unit: 'bottles', organic: false, tags: ['asian', 'condiment', 'stir-fry'] },
  { id: 'pt16', name: 'Organic Apple Cider Vinegar', category: CATEGORIES.PANTRY, brand: "Bragg", price: 4.49, unit: 'bottles', organic: true, tags: ['health', 'dressing', 'vinegar'] },
  { id: 'pt17', name: 'All-Purpose Flour', category: CATEGORIES.PANTRY, brand: 'King Arthur', price: 4.99, unit: 'bags', organic: false, tags: ['baking', 'flour', 'staple'] },
  { id: 'pt18', name: 'Granulated Pure Cane Sugar', category: CATEGORIES.PANTRY, brand: 'Domino', price: 3.89, unit: 'bags', organic: false, tags: ['sugar', 'baking', 'sweet'] },

  // Beverages
  { id: 'bev1', name: 'Sparkling Mineral Water (12-Pack)', category: CATEGORIES.BEVERAGES, brand: 'LaCroix', price: 5.49, unit: 'packs', organic: false, tags: ['water', 'sparkling', 'zero-calorie'] },
  { id: 'bev2', name: 'Purified Drinking Water (24-Pack)', category: CATEGORIES.BEVERAGES, brand: 'Nestle Pure Life', price: 4.99, unit: 'packs', organic: false, tags: ['water', 'hydration', 'bottles'] },
  { id: 'bev3', name: '100% Pure Orange Juice', category: CATEGORIES.BEVERAGES, brand: 'Tropicana', price: 4.29, unit: 'bottles', organic: false, tags: ['juice', 'vitamin-c', 'breakfast'] },
  { id: 'bev4', name: 'Organic Green Tea (20 bags)', category: CATEGORIES.BEVERAGES, brand: 'Traditional Medicinals', price: 4.49, unit: 'boxes', organic: true, tags: ['tea', 'antioxidant', 'hot'] },
  { id: 'bev5', name: 'Cold Brew Coffee Concentrate', category: CATEGORIES.BEVERAGES, brand: 'Chameleon', price: 8.99, unit: 'bottles', organic: true, tags: ['coffee', 'caffeine', 'beverage'] },
  { id: 'bev6', name: 'Whole Bean Dark Roast Coffee', category: CATEGORIES.BEVERAGES, brand: "Peet's", price: 9.99, unit: 'bags', organic: false, tags: ['coffee', 'roast', 'morning'] },
  { id: 'bev7', name: 'Organic Kombucha (Gingerade)', category: CATEGORIES.BEVERAGES, brand: 'GTs Living Foods', price: 3.69, unit: 'bottles', organic: true, tags: ['probiotics', 'gut-health', 'fermented'] },
  { id: 'bev8', name: 'Lemonade (All Natural)', category: CATEGORIES.BEVERAGES, brand: 'Simply Lemonade', price: 2.99, unit: 'bottles', organic: false, tags: ['summer', 'sweet', 'refreshing'] },

  // Snacks & Sweets
  { id: 'sn1', name: 'Organic Tortilla Chips', category: CATEGORIES.SNACKS, brand: 'Late July', price: 3.99, unit: 'bags', organic: true, tags: ['chips', 'salsa', 'snack'] },
  { id: 'sn2', name: 'Dark Chocolate Bar (72%)', category: CATEGORIES.SNACKS, brand: 'Ghirardelli', price: 3.29, unit: 'bars', organic: false, tags: ['chocolate', 'dessert', 'sweet'] },
  { id: 'sn3', name: 'Raw Roasted Mixed Nuts', category: CATEGORIES.SNACKS, brand: "Planters", price: 6.99, unit: 'cans', organic: false, tags: ['nuts', 'protein', 'snack', 'almonds'] },
  { id: 'sn4', name: 'Sea Salt Popcorn', category: CATEGORIES.SNACKS, brand: 'SkinnyPop', price: 3.49, unit: 'bags', organic: false, tags: ['popcorn', 'low-calorie', 'snack'] },
  { id: 'sn5', name: 'Granola Bars (Oats & Honey)', category: CATEGORIES.SNACKS, brand: 'Nature Valley', price: 3.89, unit: 'boxes', organic: false, tags: ['granola', 'hiking', 'snack'] },
  { id: 'sn6', name: 'Fruit & Nut Energy Bars', category: CATEGORIES.SNACKS, brand: 'LÄRABAR', price: 5.99, unit: 'boxes', organic: true, tags: ['gluten-free', 'vegan', 'clean-eating'] },
  { id: 'sn7', name: 'Gummy Bears Candy', category: CATEGORIES.SNACKS, brand: 'Haribo', price: 1.99, unit: 'bags', organic: false, tags: ['candy', 'sweet', 'kids'] },

  // Frozen Foods
  { id: 'fz1', name: 'Frozen Triple Berry Blend', category: CATEGORIES.FROZEN, brand: 'Wyman\'s', price: 9.99, unit: 'bags', organic: true, tags: ['smoothie', 'berries', 'frozen'] },
  { id: 'fz2', name: 'Thin Crust Pepperoni Pizza', category: CATEGORIES.FROZEN, brand: 'DiGiorno', price: 6.99, unit: 'items', organic: false, tags: ['pizza', 'quick-meal', 'dinner'] },
  { id: 'fz3', name: 'Gluten-Free Cauliflower Crust Pizza', category: CATEGORIES.FROZEN, brand: 'Caulipower', price: 8.49, unit: 'items', organic: false, tags: ['gluten-free', 'healthy', 'pizza'] },
  { id: 'fz4', name: 'Vanilla Bean Ice Cream', category: CATEGORIES.FROZEN, brand: 'Häagen-Dazs', price: 4.99, unit: 'pints', organic: false, tags: ['dessert', 'ice cream', 'treat'] },
  { id: 'fz5', name: 'Dairy-Free Coconut Ice Cream', category: CATEGORIES.FROZEN, brand: 'NadaMoo!', price: 5.99, unit: 'pints', organic: true, tags: ['vegan', 'dairy-free', 'dessert'] },
  { id: 'fz6', name: 'Frozen Edamame Pods', category: CATEGORIES.FROZEN, brand: 'Seapoint Farms', price: 2.79, unit: 'bags', organic: true, tags: ['snack', 'japanese', 'protein'] },
  { id: 'fz7', name: 'Frozen Vegetable Medley', category: CATEGORIES.FROZEN, brand: "Birds Eye", price: 2.29, unit: 'bags', organic: false, tags: ['vegetables', 'steamer', 'side'] },

  // Personal Care
  { id: 'pc1', name: 'Total Whitening Toothpaste', category: CATEGORIES.PERSONAL_CARE, brand: 'Colgate', price: 3.49, unit: 'tubes', organic: false, tags: ['toothpaste', 'dental', 'oral'] },
  { id: 'pc2', name: 'Natural Whitening Toothpaste', category: CATEGORIES.PERSONAL_CARE, brand: "Tom's of Maine", price: 4.89, unit: 'tubes', organic: true, tags: ['natural', 'fluoride-free', 'toothpaste'] },
  { id: 'pc3', name: 'Hydrating Body Wash', category: CATEGORIES.PERSONAL_CARE, brand: 'Dove', price: 6.99, unit: 'bottles', organic: false, tags: ['shower', 'soap', 'skin'] },
  { id: 'pc4', name: 'Moisturizing Shampoo', category: CATEGORIES.PERSONAL_CARE, brand: 'Pantene', price: 5.49, unit: 'bottles', organic: false, tags: ['haircare', 'shower', 'shampoo'] },
  { id: 'pc5', name: 'Daily Facial Cleanser', category: CATEGORIES.PERSONAL_CARE, brand: 'CeraVe', price: 11.99, unit: 'bottles', organic: false, tags: ['skincare', 'derma', 'cleanser'] },
  { id: 'pc6', name: 'Mineral Sunscreen SPF 50', category: CATEGORIES.PERSONAL_CARE, brand: 'Sun Bum', price: 13.49, unit: 'bottles', organic: false, tags: ['sun-protection', 'summer', 'spf'] },
  { id: 'pc7', name: 'Organic Lip Balm (3-Pack)', category: CATEGORIES.PERSONAL_CARE, brand: "Burt's Bees", price: 5.29, unit: 'packs', organic: true, tags: ['lip balm', 'beeswax', 'moisture'] },

  // Household & Cleaning
  { id: 'hh1', name: 'Liquid Laundry Detergent', category: CATEGORIES.HOUSEHOLD, brand: 'Tide', price: 12.99, unit: 'bottles', organic: false, tags: ['laundry', 'cleaning', 'soap'] },
  { id: 'hh2', name: 'Plant-Based Laundry Detergent', category: CATEGORIES.HOUSEHOLD, brand: 'Seventh Generation', price: 13.49, unit: 'bottles', organic: true, tags: ['eco-friendly', 'laundry', 'green'] },
  { id: 'hh3', name: 'Dishwashing Liquid Soap', category: CATEGORIES.HOUSEHOLD, brand: 'Dawn Ultra', price: 3.29, unit: 'bottles', organic: false, tags: ['dishes', 'kitchen', 'cleaning'] },
  { id: 'hh4', name: 'Ultra Soft Toilet Paper (12 Rolls)', category: CATEGORIES.HOUSEHOLD, brand: 'Charmin', price: 14.99, unit: 'packs', organic: false, tags: ['paper', 'bathroom', 'staple'] },
  { id: 'hh5', name: 'Paper Towels (6 Double Rolls)', category: CATEGORIES.HOUSEHOLD, brand: 'Bounty', price: 11.49, unit: 'packs', organic: false, tags: ['kitchen', 'cleanup', 'paper'] },
  { id: 'hh6', name: 'Disinfecting Surface Wipes', category: CATEGORIES.HOUSEHOLD, brand: 'Clorox', price: 4.79, unit: 'canisters', organic: false, tags: ['disinfectant', 'cleaning', 'germs'] },
  { id: 'hh7', name: 'Heavy Duty Trash Bags (40 ct)', category: CATEGORIES.HOUSEHOLD, brand: 'Glad', price: 9.89, unit: 'boxes', organic: false, tags: ['trash', 'garbage', 'kitchen'] },
];

export function searchProducts({
  query = '',
  minPrice = 0,
  maxPrice = 100,
  category = null,
  organicOnly = false,
}) {
  const cleanQuery = query.toLowerCase().trim();
  
  return PRODUCT_CATALOG.filter((item) => {
    if (item.price < minPrice || item.price > maxPrice) return false;
    if (category && category !== 'All' && item.category !== category) return false;
    if (organicOnly && !item.organic) return false;
    if (!cleanQuery) return true;
    
    const nameMatch = item.name.toLowerCase().includes(cleanQuery);
    const brandMatch = item.brand.toLowerCase().includes(cleanQuery);
    const tagMatch = item.tags.some((tag) => tag.toLowerCase().includes(cleanQuery));
    const catMatch = item.category.toLowerCase().includes(cleanQuery);
    
    return nameMatch || brandMatch || tagMatch || catMatch;
  });
}
