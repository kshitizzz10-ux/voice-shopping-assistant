import { CATEGORIES } from './constants.js';

export const PRODUCT_CATALOG = [
  // Produce & Veggies
  { id: 'p1', name: 'Fresh Shimla Apples (1 kg)', category: CATEGORIES.PRODUCE, brand: 'Himachal Fresh', price: 140, unit: 'kg', organic: false, tags: ['fruit', 'crisp', 'apple', 'fresh', 'seb'] },
  { id: 'p2', name: 'Organic Royal Gala Apples', category: CATEGORIES.PRODUCE, brand: 'Organic India', price: 190, unit: 'kg', organic: true, tags: ['fruit', 'apple', 'organic', 'seb'] },
  { id: 'p3', name: 'Robusta Bananas (1 Dozen)', category: CATEGORIES.PRODUCE, brand: 'Fresh Farm', price: 50, unit: 'dozen', organic: false, tags: ['fruit', 'banana', 'kela'] },
  { id: 'p4', name: 'Fresh Strawberries (Box)', category: CATEGORIES.PRODUCE, brand: 'Mahabaleshwar', price: 90, unit: 'boxes', organic: false, tags: ['berry', 'sweet', 'strawberry'] },
  { id: 'p5', name: 'Desi Palak / Spinach', category: CATEGORIES.PRODUCE, brand: 'Farm Fresh', price: 25, unit: 'bunches', organic: true, tags: ['greens', 'palak', 'spinach', 'iron'] },
  { id: 'p6', name: 'Hass Avocados (2 pcs)', category: CATEGORIES.PRODUCE, brand: 'Imported', price: 180, unit: 'packs', organic: false, tags: ['healthy fats', 'avocado'] },
  { id: 'p7', name: 'Fresh Desi Tomatoes (1 kg)', category: CATEGORIES.PRODUCE, brand: 'Farm Fresh', price: 35, unit: 'kg', organic: false, tags: ['salad', 'tamatar', 'tomato'] },
  { id: 'p8', name: 'Hybrid Red Tomatoes (1 kg)', category: CATEGORIES.PRODUCE, brand: 'Farm Fresh', price: 40, unit: 'kg', organic: false, tags: ['cooking', 'tomato', 'tamatar'] },
  { id: 'p9', name: 'Fresh Green Cucumbers / Kheera', category: CATEGORIES.PRODUCE, brand: 'Farm Fresh', price: 30, unit: 'kg', organic: false, tags: ['salad', 'cucumber', 'kheera'] },
  { id: 'p10', name: 'Fresh Cauliflower / Gobhi', category: CATEGORIES.PRODUCE, brand: 'Farm Fresh', price: 35, unit: 'pcs', organic: false, tags: ['vegetable', 'gobhi', 'cauliflower'] },
  { id: 'p11', name: 'Fresh Green Broccoli', category: CATEGORIES.PRODUCE, brand: 'Hydroponic', price: 80, unit: 'pcs', organic: true, tags: ['vegetable', 'broccoli', 'green'] },
  { id: 'p12', name: 'Red Carrots / Gajar (1 kg)', category: CATEGORIES.PRODUCE, brand: 'Farm Fresh', price: 40, unit: 'kg', organic: false, tags: ['gajar', 'carrot', 'halwa'] },
  { id: 'p13', name: 'Nashik Red Onions / Pyaaz (1 kg)', category: CATEGORIES.PRODUCE, brand: 'Nashik Fresh', price: 35, unit: 'kg', organic: false, tags: ['essential', 'onion', 'pyaaz'] },
  { id: 'p14', name: 'New Crop Potatoes / Aalu (1 kg)', category: CATEGORIES.PRODUCE, brand: 'Agra Special', price: 30, unit: 'kg', organic: false, tags: ['staple', 'aalu', 'potato'] },
  { id: 'p15', name: 'Fresh Garlic / Lahsun (250g)', category: CATEGORIES.PRODUCE, brand: 'Desi', price: 45, unit: 'packs', organic: false, tags: ['lahsun', 'garlic', 'masala'] },
  { id: 'p16', name: 'Fresh Ginger / Adrak (250g)', category: CATEGORIES.PRODUCE, brand: 'Desi', price: 35, unit: 'packs', organic: false, tags: ['adrak', 'ginger', 'chai'] },
  { id: 'p17', name: 'Seedless Green Grapes (500g)', category: CATEGORIES.PRODUCE, brand: 'Nashik Grapes', price: 75, unit: 'packs', organic: false, tags: ['fruit', 'grapes', 'angoor'] },
  { id: 'p18', name: 'Fresh Lemons / Nimbu (4 pcs)', category: CATEGORIES.PRODUCE, brand: 'Farm Fresh', price: 20, unit: 'packs', organic: false, tags: ['lemon', 'nimbu', 'citrus'] },
  { id: 'p19', name: 'Capsicum / Shimla Mirch (500g)', category: CATEGORIES.PRODUCE, brand: 'Farm Fresh', price: 40, unit: 'packs', organic: false, tags: ['shimla mirch', 'capsicum'] },
  { id: 'p20', name: 'Fresh Green Peas / Matar (1 kg)', category: CATEGORIES.PRODUCE, brand: 'Winter Fresh', price: 50, unit: 'kg', organic: false, tags: ['matar', 'peas', 'winter'] },
  { id: 'p21', name: 'Desi Coriander / Dhaniya', category: CATEGORIES.PRODUCE, brand: 'Farm Fresh', price: 15, unit: 'bunches', organic: false, tags: ['dhaniya', 'coriander', 'herbs'] },
  { id: 'p22', name: 'Fresh Green Chillies / Hari Mirch', category: CATEGORIES.PRODUCE, brand: 'Farm Fresh', price: 15, unit: 'packs', organic: false, tags: ['mirch', 'chilli', 'spicy'] },
  { id: 'p23', name: 'Striped Watermelon (1 pc ~2.5 kg)', category: CATEGORIES.PRODUCE, brand: 'Farm Fresh', price: 70, unit: 'items', organic: false, tags: ['summer', 'fruit', 'tarbooj'] },
  { id: 'p24', name: 'Alphonso Mangoes (1 Box / 6 pcs)', category: CATEGORIES.PRODUCE, brand: 'Ratnagiri', price: 399, unit: 'boxes', organic: true, tags: ['mango', 'aam', 'alphonso', 'summer'] },
  { id: 'p25', name: 'Fresh Button Mushrooms (200g)', category: CATEGORIES.PRODUCE, brand: 'Mushroom World', price: 50, unit: 'packs', organic: false, tags: ['mushroom', 'khumb'] },

  // Dairy & Eggs
  { id: 'd1', name: 'Amul Taaza Toned Milk (1 L)', category: CATEGORIES.DAIRY_EGGS, brand: 'Amul', price: 56, unit: 'packets', organic: false, tags: ['milk', 'doodh', 'toned'] },
  { id: 'd2', name: 'Amul Gold Full Cream Milk (1 L)', category: CATEGORIES.DAIRY_EGGS, brand: 'Amul', price: 68, unit: 'packets', organic: false, tags: ['milk', 'doodh', 'full-cream'] },
  { id: 'd3', name: 'Mother Dairy Cow Milk (500ml)', category: CATEGORIES.DAIRY_EGGS, brand: 'Mother Dairy', price: 28, unit: 'packets', organic: false, tags: ['milk', 'cow milk', 'doodh'] },
  { id: 'd4', name: 'Amul Fresh Malai Paneer (200g)', category: CATEGORIES.DAIRY_EGGS, brand: 'Amul', price: 90, unit: 'packs', organic: false, tags: ['paneer', 'cottage cheese', 'protein'] },
  { id: 'd5', name: 'Mother Dairy Classic Dahi / Curd (400g)', category: CATEGORIES.DAIRY_EGGS, brand: 'Mother Dairy', price: 35, unit: 'tubs', organic: false, tags: ['dahi', 'curd', 'yogurt'] },
  { id: 'd6', name: 'Amul Salted Butter (100g)', category: CATEGORIES.DAIRY_EGGS, brand: 'Amul', price: 58, unit: 'packs', organic: false, tags: ['butter', 'makhan', 'amul butter'] },
  { id: 'd7', name: 'Amul Desi Ghee (1 L Ceka Pack)', category: CATEGORIES.DAIRY_EGGS, brand: 'Amul', price: 610, unit: 'packs', organic: false, tags: ['ghee', 'desi ghee', 'pure'] },
  { id: 'd8', name: 'Patanjali Cow Ghee (500ml)', category: CATEGORIES.DAIRY_EGGS, brand: 'Patanjali', price: 325, unit: 'jars', organic: false, tags: ['ghee', 'cow ghee', 'ayurvedic'] },
  { id: 'd9', name: 'Farm Fresh White Eggs (6 pcs)', category: CATEGORIES.DAIRY_EGGS, brand: 'Eggoz', price: 48, unit: 'packs', organic: false, tags: ['eggs', 'anda', 'protein'] },
  { id: 'd10', name: 'Organic Free-Range Brown Eggs (6 pcs)', category: CATEGORIES.DAIRY_EGGS, brand: 'Eggoz Organic', price: 75, unit: 'packs', organic: true, tags: ['eggs', 'brown eggs', 'organic'] },
  { id: 'd11', name: 'Epigamia Greek Yogurt (Wild Blueberry)', category: CATEGORIES.DAIRY_EGGS, brand: 'Epigamia', price: 60, unit: 'tubs', organic: false, tags: ['yogurt', 'greek yogurt', 'protein'] },
  { id: 'd12', name: 'Amul Cheese Slices (10 Slices / 200g)', category: CATEGORIES.DAIRY_EGGS, brand: 'Amul', price: 140, unit: 'packs', organic: false, tags: ['cheese', 'slices', 'sandwich'] },
  { id: 'd13', name: 'Amul Diced Mozzarella Pizza Cheese (200g)', category: CATEGORIES.DAIRY_EGGS, brand: 'Amul', price: 125, unit: 'packs', organic: false, tags: ['cheese', 'pizza', 'mozzarella'] },
  { id: 'd14', name: 'Amul Fresh Cream (250ml)', category: CATEGORIES.DAIRY_EGGS, brand: 'Amul', price: 65, unit: 'cartons', organic: false, tags: ['cream', 'malai', 'gravy'] },
  { id: 'd15', name: 'Raw Pressery Unsweetened Almond Milk (1 L)', category: CATEGORIES.DAIRY_EGGS, brand: 'Raw Pressery', price: 280, unit: 'bottles', organic: true, tags: ['dairy-free', 'vegan', 'almond milk', 'plant-based'] },
  { id: 'd16', name: 'Oatly Oat Milk Barista Edition (1 L)', category: CATEGORIES.DAIRY_EGGS, brand: 'Oatly', price: 340, unit: 'cartons', organic: true, tags: ['dairy-free', 'vegan', 'oat milk', 'coffee'] },

  // Bakery & Breads
  { id: 'b1', name: 'Harvest Gold 100% Atta Whole Wheat Bread (400g)', category: CATEGORIES.BAKERY, brand: 'Harvest Gold', price: 50, unit: 'loaves', organic: false, tags: ['bread', 'atta bread', 'wheat'] },
  { id: 'b2', name: 'Britannia 100% Whole Wheat Bread (400g)', category: CATEGORIES.BAKERY, brand: 'Britannia', price: 45, unit: 'loaves', organic: false, tags: ['bread', 'sandwich', 'breakfast'] },
  { id: 'b3', name: 'English Oven Multi Grain Bread (400g)', category: CATEGORIES.BAKERY, brand: 'English Oven', price: 55, unit: 'loaves', organic: false, tags: ['bread', 'multigrain', 'healthy'] },
  { id: 'b4', name: 'The Baker\'s Dozen Sourdough Bread (250g)', category: CATEGORIES.BAKERY, brand: 'The Bakers Dozen', price: 120, unit: 'loaves', organic: true, tags: ['sourdough', 'artisan', 'bread'] },
  { id: 'b5', name: 'Harvest Gold Bombay Pav (6 pcs)', category: CATEGORIES.BAKERY, brand: 'Harvest Gold', price: 25, unit: 'packs', organic: false, tags: ['pav', 'pav bhaji', 'buns'] },
  { id: 'b6', name: 'English Oven Burger Buns (2 pcs)', category: CATEGORIES.BAKERY, brand: 'English Oven', price: 30, unit: 'packs', organic: false, tags: ['burger', 'buns', 'snack'] },
  { id: 'b7', name: 'iD Fresh Whole Wheat Malabar Parota (5 pcs)', category: CATEGORIES.BAKERY, brand: 'iD Fresh', price: 85, unit: 'packs', organic: false, tags: ['paratha', 'parota', 'ready-to-cook'] },
  { id: 'b8', name: 'iD Fresh 100% Whole Wheat Chapatis (10 pcs)', category: CATEGORIES.BAKERY, brand: 'iD Fresh', price: 70, unit: 'packs', organic: false, tags: ['roti', 'chapati', 'ready-to-eat'] },
  { id: 'b9', name: 'Britannia Fruit Cake (120g)', category: CATEGORIES.BAKERY, brand: 'Britannia', price: 30, unit: 'packs', organic: false, tags: ['cake', 'fruit cake', 'tea snack'] },

  // Meat & Seafood
  { id: 'm1', name: 'Fresh Boneless Chicken Breast (500g)', category: CATEGORIES.MEAT_SEAFOOD, brand: 'Licious', price: 210, unit: 'packs', organic: false, tags: ['chicken', 'boneless', 'protein', 'murga'] },
  { id: 'm2', name: 'Fresh Chicken Curry Cut (500g)', category: CATEGORIES.MEAT_SEAFOOD, brand: 'Licious', price: 145, unit: 'packs', organic: false, tags: ['chicken', 'curry cut', 'meat'] },
  { id: 'm3', name: 'Fresh Rohu Fish Cut Bengali (500g)', category: CATEGORIES.MEAT_SEAFOOD, brand: 'FreshToHome', price: 180, unit: 'packs', organic: false, tags: ['fish', 'rohu', 'machli'] },
  { id: 'm4', name: 'Fresh Prawns Cleaned & Deveined (250g)', category: CATEGORIES.MEAT_SEAFOOD, brand: 'Licious', price: 240, unit: 'packs', organic: false, tags: ['prawns', 'shrimp', 'seafood'] },
  { id: 'm5', name: 'Fresh Mutton Curry Cut (500g)', category: CATEGORIES.MEAT_SEAFOOD, brand: 'FreshToHome', price: 440, unit: 'packs', organic: false, tags: ['mutton', 'lamb', 'meat'] },
  { id: 'm6', name: 'Zorabian Chicken Tikka (250g)', category: CATEGORIES.MEAT_SEAFOOD, brand: 'Zorabian', price: 170, unit: 'packs', organic: false, tags: ['tikka', 'ready-to-cook', 'chicken'] },

  // Pantry & Masalas
  { id: 'pt1', name: 'Aashirvaad Shudh Chakki Atta (5 kg)', category: CATEGORIES.PANTRY, brand: 'Aashirvaad', price: 235, unit: 'bags', organic: false, tags: ['atta', 'flour', 'roti', 'wheat'] },
  { id: 'pt2', name: 'Fortune Sunlite Refined Sunflower Oil (1 L)', category: CATEGORIES.PANTRY, brand: 'Fortune', price: 135, unit: 'packets', organic: false, tags: ['oil', 'tel', 'cooking oil'] },
  { id: 'pt3', name: 'Fortune Kachi Ghani Mustard Oil / Sarson Tel (1 L)', category: CATEGORIES.PANTRY, brand: 'Fortune', price: 155, unit: 'bottles', organic: false, tags: ['sarson tel', 'mustard oil', 'desi'] },
  { id: 'pt4', name: 'Figaro Pure Olive Oil (500ml)', category: CATEGORIES.PANTRY, brand: 'Figaro', price: 420, unit: 'bottles', organic: false, tags: ['olive oil', 'cooking', 'healthy'] },
  { id: 'pt5', name: 'Tata Salt Vacuum Evaporated (1 kg)', category: CATEGORIES.PANTRY, brand: 'Tata', price: 28, unit: 'packets', organic: false, tags: ['salt', 'namak', 'iodized'] },
  { id: 'pt6', name: 'Madhur Pure & Hygienic Sugar (1 kg)', category: CATEGORIES.PANTRY, brand: 'Madhur', price: 50, unit: 'packets', organic: false, tags: ['sugar', 'cheeni', 'sweet'] },
  { id: 'pt7', name: 'Organic Jaggery Powder / Shakkar (500g)', category: CATEGORIES.PANTRY, brand: 'Organic Tattva', price: 65, unit: 'packs', organic: true, tags: ['jaggery', 'gur', 'shakkar', 'natural sweetener'] },
  { id: 'pt8', name: 'Daawat Rozana Super Basmati Rice (5 kg)', category: CATEGORIES.PANTRY, brand: 'Daawat', price: 380, unit: 'bags', organic: false, tags: ['rice', 'chawal', 'basmati'] },
  { id: 'pt9', name: 'Tata Sampann Unpolished Toor Dal (1 kg)', category: CATEGORIES.PANTRY, brand: 'Tata Sampann', price: 165, unit: 'packets', organic: false, tags: ['toor dal', 'arhar dal', 'dal', 'protein'] },
  { id: 'pt10', name: 'Tata Sampann Moong Dal Dhuli (1 kg)', category: CATEGORIES.PANTRY, brand: 'Tata Sampann', price: 140, unit: 'packets', organic: false, tags: ['moong dal', 'dal', 'healthy'] },
  { id: 'pt11', name: 'Tata Sampann Chana Dal (1 kg)', category: CATEGORIES.PANTRY, brand: 'Tata Sampann', price: 110, unit: 'packets', organic: false, tags: ['chana dal', 'dal', 'protein'] },
  { id: 'pt12', name: 'Kabuli Chana / Chickpeas (1 kg)', category: CATEGORIES.PANTRY, brand: 'Fortune', price: 145, unit: 'packets', organic: false, tags: ['chole', 'chana', 'protein'] },
  { id: 'pt13', name: 'Rajma Chitra / Kidney Beans (1 kg)', category: CATEGORIES.PANTRY, brand: 'Tata Sampann', price: 170, unit: 'packets', organic: false, tags: ['rajma', 'beans', 'punjabi'] },
  { id: 'pt14', name: 'MDH Deggi Mirch Powder (100g)', category: CATEGORIES.PANTRY, brand: 'MDH', price: 78, unit: 'boxes', organic: false, tags: ['mirch', 'masala', 'chilli powder'] },
  { id: 'pt15', name: 'Everest Turmeric / Haldi Powder (100g)', category: CATEGORIES.PANTRY, brand: 'Everest', price: 36, unit: 'boxes', organic: false, tags: ['haldi', 'turmeric', 'masala'] },
  { id: 'pt16', name: 'Everest Coriander / Dhaniya Powder (100g)', category: CATEGORIES.PANTRY, brand: 'Everest', price: 38, unit: 'boxes', organic: false, tags: ['dhaniya', 'coriander powder', 'masala'] },
  { id: 'pt17', name: 'MDH Garam Masala (100g)', category: CATEGORIES.PANTRY, brand: 'MDH', price: 92, unit: 'boxes', organic: false, tags: ['garam masala', 'spices', 'flavor'] },
  { id: 'pt18', name: 'Catch Black Pepper Sprinkler (100g)', category: CATEGORIES.PANTRY, brand: 'Catch', price: 99, unit: 'bottles', organic: false, tags: ['kali mirch', 'pepper', 'seasoning'] },
  { id: 'pt19', name: 'Dabur 100% Pure Honey (500g)', category: CATEGORIES.PANTRY, brand: 'Dabur', price: 210, unit: 'bottles', organic: false, tags: ['honey', 'shahad', 'natural sweetener'] },
  { id: 'pt20', name: 'Pintola All-Natural Peanut Butter Crunchy (1 kg)', category: CATEGORIES.PANTRY, brand: 'Pintola', price: 349, unit: 'jars', organic: false, tags: ['peanut butter', 'protein', 'gym', 'healthy'] },
  { id: 'pt21', name: 'Maggi 2-Minute Masala Noodles (Pack of 4)', category: CATEGORIES.PANTRY, brand: 'Nestle Maggi', price: 56, unit: 'packs', organic: false, tags: ['maggi', 'instant noodles', 'snack'] },
  { id: 'pt22', name: 'Kissan Fresh Tomato Ketchup (950g)', category: CATEGORIES.PANTRY, brand: 'Kissan', price: 125, unit: 'bottles', organic: false, tags: ['sauce', 'ketchup', 'condiment'] },

  // Beverages & Chai
  { id: 'bev1', name: 'Tata Tea Gold Leaf Chai (500g)', category: CATEGORIES.BEVERAGES, brand: 'Tata Tea', price: 285, unit: 'packets', organic: false, tags: ['chai', 'tea', 'tata tea', 'morning'] },
  { id: 'bev2', name: 'Wagh Bakri Premium Leaf Tea (500g)', category: CATEGORIES.BEVERAGES, brand: 'Wagh Bakri', price: 260, unit: 'packets', organic: false, tags: ['tea', 'chai', 'assam'] },
  { id: 'bev3', name: 'Nescafe Classic Instant Coffee Jar (100g)', category: CATEGORIES.BEVERAGES, brand: 'Nescafe', price: 320, unit: 'jars', organic: false, tags: ['coffee', 'nescafe', 'instant coffee'] },
  { id: 'bev4', name: 'Bru Instant Coffee Jar (100g)', category: CATEGORIES.BEVERAGES, brand: 'Bru', price: 210, unit: 'jars', organic: false, tags: ['coffee', 'bru', 'chicory'] },
  { id: 'bev5', name: 'Bournvita Health Drink Jar (500g)', category: CATEGORIES.BEVERAGES, brand: 'Cadbury Bournvita', price: 240, unit: 'jars', organic: false, tags: ['health drink', 'milk mix', 'chocolate'] },
  { id: 'bev6', name: 'Real 100% Mixed Fruit Juice (1 L)', category: CATEGORIES.BEVERAGES, brand: 'Real', price: 110, unit: 'cartons', organic: false, tags: ['juice', 'fruit juice', 'real'] },
  { id: 'bev7', name: 'Kinley Packaged Drinking Water (1 L)', category: CATEGORIES.BEVERAGES, brand: 'Kinley', price: 20, unit: 'bottles', organic: false, tags: ['water', 'pani', 'bottle'] },
  { id: 'bev8', name: 'Bisleri Club Soda (750ml)', category: CATEGORIES.BEVERAGES, brand: 'Bisleri', price: 20, unit: 'bottles', organic: false, tags: ['soda', 'sparkling water'] },
  { id: 'bev9', name: 'Organic India Tulsi Green Tea (25 Tea Bags)', category: CATEGORIES.BEVERAGES, brand: 'Organic India', price: 180, unit: 'boxes', organic: true, tags: ['green tea', 'tulsi', 'detox', 'healthy'] },

  // Snacks & Namkeen
  { id: 'sn1', name: 'Haldiram\'s Nagpur Aloo Bhujia (400g)', category: CATEGORIES.SNACKS, brand: 'Haldirams', price: 110, unit: 'packets', organic: false, tags: ['bhujia', 'aloo bhujia', 'namkeen', 'snack'] },
  { id: 'sn2', name: 'Haldiram\'s Khatta Meetha Mixture (400g)', category: CATEGORIES.SNACKS, brand: 'Haldirams', price: 105, unit: 'packets', organic: false, tags: ['namkeen', 'khatta meetha', 'snack'] },
  { id: 'sn3', name: 'Parle-G Original Glucose Biscuits (800g)', category: CATEGORIES.SNACKS, brand: 'Parle', price: 80, unit: 'packets', organic: false, tags: ['biscuit', 'parle-g', 'chai biscuit'] },
  { id: 'sn4', name: 'Britannia Good Day Butter Cookies (600g)', category: CATEGORIES.SNACKS, brand: 'Britannia', price: 120, unit: 'packets', organic: false, tags: ['cookies', 'good day', 'butter'] },
  { id: 'sn5', name: 'Lay\'s India\'s Magic Masala Chips (50g)', category: CATEGORIES.SNACKS, brand: 'Lays', price: 20, unit: 'packets', organic: false, tags: ['chips', 'magic masala', 'crisps'] },
  { id: 'sn6', name: 'Kurkure Masala Munch (90g)', category: CATEGORIES.SNACKS, brand: 'Kurkure', price: 20, unit: 'packets', organic: false, tags: ['kurkure', 'namkeen', 'spicy'] },
  { id: 'sn7', name: 'Cadbury Dairy Milk Silk Chocolate (150g)', category: CATEGORIES.SNACKS, brand: 'Cadbury', price: 175, unit: 'bars', organic: false, tags: ['chocolate', 'silk', 'sweet', 'dairy milk'] },
  { id: 'sn8', name: 'Nutraj California Raw Almonds / Badam (500g)', category: CATEGORIES.SNACKS, brand: 'Nutraj', price: 420, unit: 'packets', organic: true, tags: ['badam', 'almonds', 'dry fruits', 'healthy'] },
  { id: 'sn9', name: 'Nutraj Whole Cashews / Kaju (500g)', category: CATEGORIES.SNACKS, brand: 'Nutraj', price: 450, unit: 'packets', organic: false, tags: ['kaju', 'cashews', 'dry fruits'] },

  // Frozen & Instant
  { id: 'fz1', name: 'Sumeru Green Peas Frozen (500g)', category: CATEGORIES.FROZEN, brand: 'Sumeru', price: 85, unit: 'packets', organic: false, tags: ['frozen matar', 'peas'] },
  { id: 'fz2', name: 'McCain French Fries (420g)', category: CATEGORIES.FROZEN, brand: 'McCain', price: 115, unit: 'packets', organic: false, tags: ['french fries', 'potato', 'snack'] },
  { id: 'fz3', name: 'McCain Smiles (375g)', category: CATEGORIES.FROZEN, brand: 'McCain', price: 110, unit: 'packets', organic: false, tags: ['mccain', 'kids snack', 'potato'] },
  { id: 'fz4', name: 'Amul Vanilla Gold Ice Cream Tub (1 L)', category: CATEGORIES.FROZEN, brand: 'Amul', price: 180, unit: 'tubs', organic: false, tags: ['ice cream', 'vanilla', 'dessert'] },
  { id: 'fz5', name: 'Kwality Wall\'s Chocobar Ice Cream (6 pcs)', category: CATEGORIES.FROZEN, brand: 'Kwality Walls', price: 150, unit: 'packs', organic: false, tags: ['chocobar', 'ice cream'] },

  // Personal Care
  { id: 'pc1', name: 'Colgate Strong Teeth Toothpaste (500g Saver Pack)', category: CATEGORIES.PERSONAL_CARE, brand: 'Colgate', price: 210, unit: 'tubes', organic: false, tags: ['toothpaste', 'colgate', 'dental'] },
  { id: 'pc2', name: 'Dabur Red Ayurvedic Toothpaste (200g)', category: CATEGORIES.PERSONAL_CARE, brand: 'Dabur', price: 115, unit: 'tubes', organic: true, tags: ['dabur red', 'ayurvedic', 'toothpaste'] },
  { id: 'pc3', name: 'Dettol Original Bathing Soap (Pack of 4 x 125g)', category: CATEGORIES.PERSONAL_CARE, brand: 'Dettol', price: 180, unit: 'packs', organic: false, tags: ['soap', 'dettol', 'bath'] },
  { id: 'pc4', name: 'Dove Cream Beauty Bathing Bar (Pack of 3)', category: CATEGORIES.PERSONAL_CARE, brand: 'Dove', price: 195, unit: 'packs', organic: false, tags: ['dove', 'soap', 'moisturizing'] },
  { id: 'pc5', name: 'Head & Shoulders Anti-Dandruff Shampoo (340ml)', category: CATEGORIES.PERSONAL_CARE, brand: 'Head & Shoulders', price: 280, unit: 'bottles', organic: false, tags: ['shampoo', 'haircare'] },
  { id: 'pc6', name: 'Parachute 100% Pure Coconut Oil (500ml)', category: CATEGORIES.PERSONAL_CARE, brand: 'Parachute', price: 145, unit: 'bottles', organic: true, tags: ['coconut oil', 'hair oil', 'nariyal tel'] },
  { id: 'pc7', name: 'Nivea Soft Light Moisturizer Cream (200ml)', category: CATEGORIES.PERSONAL_CARE, brand: 'Nivea', price: 240, unit: 'tubs', organic: false, tags: ['cream', 'moisturizer', 'skincare'] },

  // Household & Cleaning
  { id: 'hh1', name: 'Surf Excel Quick Wash Detergent Powder (1 kg)', category: CATEGORIES.HOUSEHOLD, brand: 'Surf Excel', price: 145, unit: 'packets', organic: false, tags: ['detergent', 'surf excel', 'laundry'] },
  { id: 'hh2', name: 'Ariel Matic Front Load Liquid Detergent (1 L)', category: CATEGORIES.HOUSEHOLD, brand: 'Ariel', price: 230, unit: 'bottles', organic: false, tags: ['liquid detergent', 'washing machine'] },
  { id: 'hh3', name: 'Vim Dishwash Gel Lemon (750ml Bottle)', category: CATEGORIES.HOUSEHOLD, brand: 'Vim', price: 155, unit: 'bottles', organic: false, tags: ['vim', 'dishwash', 'gel'] },
  { id: 'hh4', name: 'Lizol Floral Surface Disinfectant Cleaner (1 L)', category: CATEGORIES.HOUSEHOLD, brand: 'Lizol', price: 199, unit: 'bottles', organic: false, tags: ['lizol', 'floor cleaner', 'germs'] },
  { id: 'hh5', name: 'Harpic Power Plus Toilet Cleaner (1 L)', category: CATEGORIES.HOUSEHOLD, brand: 'Harpic', price: 185, unit: 'bottles', organic: false, tags: ['harpic', 'toilet cleaner'] },
  { id: 'hh6', name: 'Origami Kitchen Towel Paper Roll (Pack of 2)', category: CATEGORIES.HOUSEHOLD, brand: 'Origami', price: 120, unit: 'packs', organic: false, tags: ['kitchen towel', 'tissue', 'paper'] },
  { id: 'hh7', name: 'Garbage Trash Bags Medium 30 Bags', category: CATEGORIES.HOUSEHOLD, brand: 'Shalimar', price: 85, unit: 'packs', organic: false, tags: ['trash bags', 'dustbin', 'garbage'] },
];

export function searchProducts({
  query = '',
  minPrice = 0,
  maxPrice = 1000,
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
