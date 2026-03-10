export interface MenuItem {
  name: string;
  nameTh?: string;
  nameJp?: string;
  description?: string;
  price: number | string;
  highlight?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  icon: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'premium-wagyu',
    title: 'Premium WAGYU Beef',
    subtitle: 'Top Quality & A5 Rank',
    icon: '🥩',
    items: [
      { name: 'Premium WAGYU 5 Assorted', nameJp: "Chef's Selection", description: "Chef's selection of 5 premium A5 rank cuts", price: 1480, highlight: true },
      { name: 'Premium WAGYU 3 Assorted', nameJp: "Chef's Selection", description: "Chef's selection of 3 premium A5 rank cuts", price: 980, highlight: true },
      { name: 'Prime Rib', nameJp: 'GOKUJO KARUBI', description: 'Highest quality rib cut with exceptional marbling', price: 980 },
      { name: 'Premium Rib', nameJp: 'TOKUSEN KARUBI', description: 'Highly marbled, melt-in-your-mouth premium rib', price: 790 },
      { name: 'Premium Loin', nameJp: 'TOKUSEN ROSU', description: 'Top-tier loin cut', price: 780 },
      { name: 'Premium Top Sirloin Cap', nameJp: 'TOROICHIBO', description: 'Fine marbling and tenderness', price: 689 },
      { name: 'Premium Sirloin Butt', nameJp: 'RANPU', description: 'Intense original beef flavor', price: 689 },
      { name: 'Premium Top Blade', nameJp: 'MISUJI', description: 'Balance of rib richness and loin tenderness', price: 649 },
      { name: 'Eye of Knuckle', nameJp: 'MARUSHIN', description: 'Top-level deliciousness among thigh meats', price: 589 },
      { name: 'Tri Tip', nameJp: 'HIUCHI', description: 'Lean meat and rich fat simultaneously', price: 589 },
      { name: 'Wagyu Dice', description: 'Upper-class cuts diced for various textures', price: 489 },
      { name: 'Rib Finger', description: 'Rich, flavorful meat for those who love rich tastes', price: 489 },
    ],
  },
  {
    id: 'standard-beef',
    title: 'Standard Beef',
    subtitle: 'WAGYU Cuts',
    icon: '🔥',
    items: [
      { name: 'Premium Tongue', nameJp: 'TOKUSEN TANSHIO', price: 640 },
      { name: 'Superior Outside Skirt', nameJp: 'JO HARAMI', price: 399 },
      { name: 'Superior Rib', nameJp: 'JO KARUBI', price: 369 },
      { name: 'Superior Tongue', nameJp: 'JO TANSHIO', price: 349 },
      { name: 'Superior Loin', nameJp: 'JO ROSU', price: 349 },
      { name: 'SAWA Outside Skirt', nameJp: 'HARAMI', price: 289 },
      { name: 'SAWA Rib', nameJp: 'KARUBI', price: 269 },
      { name: 'SAWA Loin', nameJp: 'ROSU', price: 269 },
      { name: 'SAWA Tongue', nameJp: 'TANSHIO', price: 199 },
    ],
  },
  {
    id: 'pork-chicken',
    title: 'Fresh Pork & Chicken',
    subtitle: '',
    icon: '🍗',
    items: [
      { name: 'Korean Barbecue', nameTh: 'Samgyeopsal', price: 299 },
      { name: 'Pork Throat Cartilage', nameTh: 'Donatsu', price: 199 },
      { name: 'Pork Jowls Meat', price: 189 },
      { name: 'Pork Belly', price: 169 },
      { name: 'Thigh Karubi', nameTh: 'Chicken', price: 169 },
      { name: 'Breast Loin', nameTh: 'Chicken', price: 169 },
      { name: 'Sausage', price: 149 },
    ],
  },
  {
    id: 'seafood',
    title: 'Seafood',
    subtitle: '',
    icon: '🦐',
    items: [
      { name: 'Assorted 3 Kinds of Seafood', price: 590 },
      { name: 'Grilled Shrimp', price: 240 },
      { name: 'Fresh Grilled Squid', price: 240 },
      { name: 'Grilled Scallop', price: 199 },
    ],
  },
  {
    id: 'sashimi-salads',
    title: 'Sashimi, Salads & Appetizers',
    subtitle: '',
    icon: '🥗',
    items: [
      { name: 'Premium Wagyu Sushi', price: 490, highlight: true },
      { name: 'Premium Wagyu Seasoned Beef', price: 440 },
      { name: 'Premium Seasoned Raw Beef', price: 269 },
      { name: 'Fresh Beef Liver', price: 269 },
      { name: 'Assorted Kimchi', price: 190 },
      { name: 'Assorted Namul', price: 170 },
      { name: 'Stir-fried Garlic Green Soybean', price: 149 },
      { name: 'Wagyu Beef Tendon Stew', price: 149 },
      { name: 'SAWA Special Salad', price: 120 },
      { name: 'Kimchi', price: 120 },
    ],
  },
  {
    id: 'rice-soups',
    title: 'Rice, Soups & Noodles',
    subtitle: '',
    icon: '🍜',
    items: [
      { name: 'Stone Cooked Bibimbap', price: 299 },
      { name: 'Wagyu Bibimbap', description: 'Korean rice dish', price: 279 },
      { name: 'Wagyu Beef Rice', price: 269 },
      { name: 'Wagyu Karubi Soup', price: 199 },
      { name: 'Cold Noodles SAWA Style', price: 199 },
      { name: 'SAWA Soup', price: 170 },
      { name: 'Vegetables Soup', price: 139 },
      { name: 'Egg Soup', price: 99 },
      { name: 'Japanese Rice', description: 'Small / Big', price: '39฿ / 59฿' },
    ],
  },
  {
    id: 'beverages',
    title: 'Beverages',
    subtitle: 'Sake, Spirits & Beer',
    icon: '🍶',
    items: [
      { name: 'Johnnie Walker Black Bottle', price: 2300 },
      { name: 'Chivas Regal Bottle', price: 2300 },
      { name: 'Suntory KAKU Bottle', price: 1900 },
      { name: 'Zaku Junmai Sake', description: '720ml', price: 1400, highlight: true },
      { name: 'Ginrei Gaasan Junmai Sake', description: '720ml', price: 900 },
      { name: 'Kirei Umeshu / Momoshu', description: 'Plum / Peach Wine', price: 390 },
      { name: 'Kizakura Athukan', description: 'Hot Sake', price: 290 },
      { name: 'Kizakura', description: 'Cold Sake', price: 160 },
      { name: 'Asahi Super Dry', description: 'Draft / Bottle', price: 99 },
      { name: 'Singha / Leo / Chang / Heineken / San Miguel', price: '89฿ – 99฿' },
      { name: 'Various Sours', description: 'Lime, Lemon, Plum, Kyoho, Hakuto', price: '120฿ – 140฿' },
      { name: 'Soft Drinks', description: 'Tea, Cola, Sprite, Sodas', price: 40 },
    ],
  },
];
