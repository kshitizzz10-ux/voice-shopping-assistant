export const CATEGORIES = {
  PRODUCE: 'Produce',
  DAIRY_EGGS: 'Dairy & Eggs',
  BAKERY: 'Bakery',
  MEAT_SEAFOOD: 'Meat & Seafood',
  PANTRY: 'Pantry & Condiments',
  BEVERAGES: 'Beverages',
  SNACKS: 'Snacks & Sweets',
  FROZEN: 'Frozen Foods',
  PERSONAL_CARE: 'Personal Care',
  HOUSEHOLD: 'Household & Cleaning',
  OTHER: 'Other Items',
};

export const CATEGORY_METADATA = {
  [CATEGORIES.PRODUCE]: {
    color: 'emerald',
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    iconBg: 'bg-emerald-100 text-emerald-700',
    borderClass: 'border-emerald-500',
  },
  [CATEGORIES.DAIRY_EGGS]: {
    color: 'amber',
    badgeClass: 'bg-amber-50 text-amber-700 border-amber-200',
    iconBg: 'bg-amber-100 text-amber-700',
    borderClass: 'border-amber-500',
  },
  [CATEGORIES.BAKERY]: {
    color: 'orange',
    badgeClass: 'bg-orange-50 text-orange-700 border-orange-200',
    iconBg: 'bg-orange-100 text-orange-700',
    borderClass: 'border-orange-500',
  },
  [CATEGORIES.MEAT_SEAFOOD]: {
    color: 'rose',
    badgeClass: 'bg-rose-50 text-rose-700 border-rose-200',
    iconBg: 'bg-rose-100 text-rose-700',
    borderClass: 'border-rose-500',
  },
  [CATEGORIES.PANTRY]: {
    color: 'yellow',
    badgeClass: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    iconBg: 'bg-yellow-100 text-yellow-800',
    borderClass: 'border-yellow-500',
  },
  [CATEGORIES.BEVERAGES]: {
    color: 'sky',
    badgeClass: 'bg-sky-50 text-sky-700 border-sky-200',
    iconBg: 'bg-sky-100 text-sky-700',
    borderClass: 'border-sky-500',
  },
  [CATEGORIES.SNACKS]: {
    color: 'purple',
    badgeClass: 'bg-purple-50 text-purple-700 border-purple-200',
    iconBg: 'bg-purple-100 text-purple-700',
    borderClass: 'border-purple-500',
  },
  [CATEGORIES.FROZEN]: {
    color: 'cyan',
    badgeClass: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    iconBg: 'bg-cyan-100 text-cyan-700',
    borderClass: 'border-cyan-500',
  },
  [CATEGORIES.PERSONAL_CARE]: {
    color: 'pink',
    badgeClass: 'bg-pink-50 text-pink-700 border-pink-200',
    iconBg: 'bg-pink-100 text-pink-700',
    borderClass: 'border-pink-500',
  },
  [CATEGORIES.HOUSEHOLD]: {
    color: 'indigo',
    badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    iconBg: 'bg-indigo-100 text-indigo-700',
    borderClass: 'border-indigo-500',
  },
  [CATEGORIES.OTHER]: {
    color: 'slate',
    badgeClass: 'bg-slate-50 text-slate-700 border-slate-200',
    iconBg: 'bg-slate-100 text-slate-700',
    borderClass: 'border-slate-400',
  },
};

export const COMMON_UNITS = [
  'items',
  'pcs',
  'bottles',
  'cans',
  'bags',
  'boxes',
  'packs',
  'lbs',
  'kg',
  'g',
  'oz',
  'bunches',
  'cartons',
  'loaves',
  'gallons',
  'liters',
  'dozen',
];

export const SUPPORTED_LANGUAGES = [
  { code: 'en-US', name: 'English (US)', flag: '🇺🇸', label: 'English (US)' },
  { code: 'en-IN', name: 'English (India)', flag: '🇮🇳', label: 'English (IN)' },
  { code: 'en-GB', name: 'English (UK)', flag: '🇬🇧', label: 'English (UK)' },
  { code: 'hi-IN', name: 'हिन्दी (Hindi)', flag: '🇮🇳', label: 'हिन्दी' },
  { code: 'es-ES', name: 'Español (Spanish)', flag: '🇪🇸', label: 'Español' },
  { code: 'fr-FR', name: 'Français (French)', flag: '🇫🇷', label: 'Français' },
  { code: 'de-DE', name: 'Deutsch (German)', flag: '🇩🇪', label: 'Deutsch' },
];

export const SAMPLE_VOICE_COMMANDS = [
  { category: 'Add Items', command: 'Add 2 bottles of whole milk' },
  { category: 'Add Items', command: 'I need 3 organic apples' },
  { category: 'Add Items', command: 'Buy 5 bananas and 1 loaf of sourdough bread' },
  { category: 'Remove Items', command: 'Remove milk from my list' },
  { category: 'Remove Items', command: 'Delete bananas' },
  { category: 'Modify Quantities', command: 'Change milk quantity to 3' },
  { category: 'Modify Quantities', command: 'Update apples to 5' },
  { category: 'Voice Search', command: 'Find toothpaste under $5' },
  { category: 'Voice Search', command: 'Search for organic olive oil' },
  { category: 'Clear / Actions', command: 'Clear checked items' },
  { category: 'Clear / Actions', command: 'Clear my whole list' },
];

export const STORAGE_KEYS = {
  SHOPPING_LIST: 'voicecart_items_v1',
  PURCHASE_HISTORY: 'voicecart_history_v1',
  USER_SETTINGS: 'voicecart_settings_v1',
};
