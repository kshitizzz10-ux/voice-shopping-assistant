# 🛒 VoiceCart — Voice-Powered Smart Shopping Assistant

> An intelligent, voice-first shopping list manager with natural language understanding (NLP), smart suggestions (history-based, seasonal, substitutes), multilingual support, and voice-activated price search.

---

## 🌟 Live Demo & Preview
- **Live Application**: [https://voice-shopping-assistant.vercel.app](https://voice-shopping-assistant.vercel.app)
- **Repository**: [https://github.com/kshitizgoyal10/voice-command-shopping-assistant](https://github.com/kshitizgoyal10/voice-command-shopping-assistant)

---

## 📝 Approach & Technical Architecture (200 Words)

VoiceCart is architected as an offline-first, client-driven Progressive Web Application designed for seamless voice interactions without backend latency. Utilizing the browser-native **Web Speech API (`SpeechRecognition` and `SpeechSynthesis`)**, the system captures spoken audio and provides real-time audio confirmations across 5 languages (English, Hindi, Spanish, French, German).

At the core is a custom-engineered, rule-based **NLP Intent & Entity Extraction Engine**. It parses natural speech commands into actionable intents (`ADD_ITEM`, `REMOVE_ITEM`, `MODIFY_QUANTITY`, `SEARCH_ITEMS`, `CLEAR_LIST`), extracting quantities, units (e.g., bottles, kg, loaves), modifiers (e.g., organic, whole wheat), and price boundaries (e.g., "under $5", "between $2 and $10").

The **Smart Suggestion Engine** operates across three dimensions:
1. **Purchase Frequency & Cadence Tracker**: predicts when users are running low on recurring staples based on past additions.
2. **Dynamic Seasonal Calendar**: highlights fresh produce and seasonal discounts.
3. **Dietary & Health Substitute Engine**: maps 60+ common grocery items to allergen-free, vegan, and lower-calorie alternatives.

The user interface is built with React 18 and Tailwind CSS, featuring an animated audio waveform visualizer, live transcript pills, category grouping, and touch-optimized mobile controls.

---

## ✨ Features Overview

### 1. 🎙️ Voice Input & NLP Parsing
- **Natural Voice Recognition**: Add items hands-free using everyday phrases (e.g., *"Add 2 bottles of whole milk"*, *"I need 3 apples"*, *"Buy 5 bananas and 2 loaves of bread"*).
- **Modifier & Unit Extraction**: Automatically extracts quantities, measurement units, and product descriptors (e.g., organic, low-fat).
- **Compound Commands**: Supports multi-item phrasing using conjunctions (*"and"*, *"aur"*, *"y"*, *"et"*).
- **Hands-Free Spoken Feedback**: Spoken audio confirmation in the user's selected language using Speech Synthesis.

### 2. 🌍 Multilingual Voice Support
- **5 Supported Languages**: English (US, UK, IN), Hindi (हिन्दी), Spanish (Español), French (Français), and German (Deutsch).
- Dynamic locale switching for speech recognition engines and localized text-to-speech voice models.

### 3. 💡 3-Tier Smart Suggestions
- **Running Low / Frequent Staples**: Analyzes purchase frequency and restock intervals to suggest items before you run out.
- **Seasonal & Promotional Deals**: Highlights seasonal harvest produce, winter warmers, and summer staples with discount badges.
- **Dietary & Health Swaps**: Automatically detects items in your list (e.g., dairy milk, white sugar, wheat bread) and suggests plant-based, gluten-free, or natural alternatives (e.g., oat milk, raw honey, almond flour).

### 4. 📋 Intelligent Shopping List Management
- **Automatic Categorization**: Organizes items into 10 structured grocery categories (Produce, Dairy & Eggs, Bakery, Meat & Seafood, Pantry, Beverages, Snacks, Frozen, Personal Care, Household).
- **Quantity & Unit Management**: Voice and manual +/- steppers supporting units like bottles, cans, lbs, kg, loaves, and packs.
- **Progress Tracking**: Check off items as you shop with celebratory feedback and remaining item counts.
- **Persistent Storage**: Saves list state and history locally via `localStorage`.

### 5. 🔍 Voice-Activated Search & Price Filtering
- **300+ Product Catalog**: Built-in grocery database with brands, price ranges, units, and dietary tags.
- **Voice Price Queries**: Spoken filters like *"Find toothpaste under $5"* or *"Find organic apples between $2 and $6"*.
- **Interactive Price Slider & Dietary Toggles**: Filter items by maximum price or toggle organic-only products with 1-click add.

### 6. 📱 Minimalist & Mobile-Optimized UI/UX
- Responsive mobile-first design with bottom controls and large tap targets.
- Equalizer soundwave animation during listening.
- Non-intrusive notification toasts for actions and undos.
- Fallbacks and clear permission prompts for microphone access.

---

## 🎤 Supported Voice Commands Cheat Sheet

| Intent | Example Voice Command | Action Taken |
|---|---|---|
| **Add Single Item** | *"Add 2 bottles of whole milk"* | Adds 2 bottles of milk to Dairy & Eggs |
| **Add with Modifier** | *"I need 3 organic apples"* | Adds 3 organic apples to Produce |
| **Compound Add** | *"Buy 5 bananas and 1 loaf of sourdough bread"* | Adds both items to respective categories |
| **Remove Item** | *"Remove milk from my list"* | Removes milk from list |
| **Modify Quantity** | *"Change milk quantity to 4"* | Updates milk count to 4 |
| **Voice Search** | *"Find toothpaste under $5"* | Opens search filtered to toothpaste ≤ $5 |
| **Price Range Search** | *"Search olive oil between $5 and $15"* | Opens search within $5 - $15 price range |
| **Clear Completed** | *"Clear checked items"* | Removes all checked off items |
| **Clear List** | *"Clear my list"* | Empties the shopping list |

---

## 🛠️ Tech Stack & Dependencies

- **Frontend**: React 18, Vite 6
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Icons**: Lucide React
- **Voice Recognition**: Web Speech API (`webkitSpeechRecognition` / `SpeechRecognition`)
- **Speech Synthesis**: Web Speech API (`window.speechSynthesis`)
- **State & Storage**: React Context, `useReducer`, `localStorage`

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18+ (tested on Node.js v20 / v24)
- Google Chrome, Microsoft Edge, or Safari (for Web Speech API support)

### Installation
```bash
# Clone the repository
git clone https://github.com/kshitizgoyal10/voice-command-shopping-assistant.git
cd voice-command-shopping-assistant

# Install dependencies
npm install

# Start development server
npm run dev
```

### Running Tests
```bash
npm test
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 📁 Repository Structure

```
voice-command-shopping-assistant/
├── public/
│   ├── favicon.svg              # App icon
│   └── manifest.json            # PWA manifest
├── scripts/
│   └── test-nlp.js              # NLP & logic verification test suite
├── src/
│   ├── components/
│   │   ├── CategoryGroup.jsx    # Collapsible category accordion
│   │   ├── Header.jsx           # App header, stats, language selector
│   │   ├── LanguageSelector.jsx # Multilingual dropdown selector
│   │   ├── LoadingSpinner.jsx   # Loading state indicators
│   │   ├── PriceFilter.jsx      # Voice/manual price slider
│   │   ├── QuantityControl.jsx  # +/- quantity stepper
│   │   ├── SearchBar.jsx        # Voice search modal & catalog view
│   │   ├── ShoppingItem.jsx     # Item card with swipe/strike actions
│   │   ├── ShoppingList.jsx     # Main list view & quick add form
│   │   ├── SuggestionPanel.jsx  # Smart suggestion drawer (3 tabs)
│   │   ├── Toast.jsx            # Action status toasts
│   │   ├── VoiceButton.jsx      # Floating animated mic button
│   │   ├── VoiceFeedback.jsx    # Real-time transcript & audio waveform
│   │   └── VoiceHelpModal.jsx   # Voice commands cheatsheet modal
│   ├── context/
│   │   └── ShoppingContext.jsx  # Global state provider
│   ├── hooks/
│   │   ├── useLocalStorage.js   # Local storage persistent hook
│   │   ├── useSpeechRecognition.js # Speech recognition hook
│   │   └── useSpeechSynthesis.js   # Text-to-speech audio hook
│   ├── utils/
│   │   ├── categoryClassifier.js   # Intelligent auto-categorization
│   │   ├── commandProcessor.js     # Intent action dispatcher
│   │   ├── constants.js            # App configuration & metadata
│   │   ├── multilingual.js         # Multilingual dictionaries & phrases
│   │   ├── nlpParser.js            # Natural language processing parser
│   │   ├── productDatabase.js      # 300+ item grocery catalog
│   │   ├── seasonalData.js         # Seasonal calendar recommendations
│   │   └── substituteMap.js        # Health & dietary substitute map
│   ├── App.jsx                  # Root application component
│   ├── index.css                # Global styles & waveform animations
│   └── main.jsx                 # Application entry point
├── .gitignore                   # Submission compliance exclusions
├── index.html                   # HTML entry
├── package.json                 # Minimal dependencies
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind theme configuration
├── vite.config.js               # Vite configuration
└── README.md                    # Project documentation
```

---

## 📄 License
MIT License. Built for the Technical Assessment Project.
