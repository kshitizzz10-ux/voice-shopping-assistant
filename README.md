# 🛒 VoiceCart — Voice-Powered Smart Shopping Assistant

> An intelligent, voice-first shopping list manager tailored for Indian groceries and global markets, with natural language understanding (NLP), smart suggestions (history-based, seasonal, substitutes), multilingual support, and voice-activated price search in Indian Rupees (₹).

---

## 🌟 Live Demo & Preview
- **Live Application**: [https://voice-shopping-assistant.vercel.app](https://voice-shopping-assistant.vercel.app)
- **Repository**: [https://github.com/kshitizzz10-ux/voice-shopping-assistant](https://github.com/kshitizzz10-ux/voice-shopping-assistant)

---

## 📝 Approach & Technical Architecture (200 Words)

VoiceCart is architected as an offline-first, client-driven Progressive Web Application designed for seamless voice interactions without backend latency. Utilizing the browser-native **Web Speech API (`SpeechRecognition` and `SpeechSynthesis`)**, the system captures spoken audio and provides real-time audio confirmations across 5 languages (English, Hindi, Spanish, French, German).

At the core is a custom-engineered, rule-based **NLP Intent & Entity Extraction Engine**. It parses natural speech commands into actionable intents (`ADD_ITEM`, `REMOVE_ITEM`, `MODIFY_QUANTITY`, `SEARCH_ITEMS`, `CLEAR_LIST`), extracting quantities, units (e.g., packets, kg, litres, loaves), modifiers (e.g., organic, full cream, whole wheat), and price boundaries in Indian Rupees (e.g., "under 60 rupees", "between ₹100 and ₹300", "50 rs se kam").

The **Smart Suggestion Engine** operates across three dimensions:
1. **Purchase Frequency & Cadence Tracker**: predicts when users are running low on recurring staples based on past additions (e.g., Amul milk, Atta, Bananas).
2. **Dynamic Seasonal Calendar**: highlights fresh Indian seasonal produce (Alphonso mangoes, Winter peas, Sarson saag, Gajar) and discounts.
3. **Dietary & Health Substitute Engine**: maps 60+ common grocery items to healthy, plant-based, and diabetic-friendly alternatives (e.g., Jaggery/Gur for Sugar, Ragi/Multigrain Atta, Soya Tofu/Chaap for Paneer).

The user interface is built with React 18 and Tailwind CSS, featuring an animated audio waveform visualizer, live transcript pills, category grouping, and touch-optimized mobile controls.

---

## ✨ Features Overview

### 1. 🎙️ Voice Input & NLP Parsing
- **Natural Voice Recognition**: Add items hands-free using everyday phrases (e.g., *"Add 2 packets of Amul milk"*, *"I need 1 kg fresh Shimla apples"*, *"Buy 1 dozen bananas and 1 loaf of bread"*).
- **Modifier & Unit Extraction**: Automatically extracts quantities, measurement units (kg, g, packets, litres, dozen), and product descriptors (organic, toned, full cream).
- **Compound Commands**: Supports multi-item phrasing using conjunctions (*"and"*, *"aur"*, *"y"*, *"et"*).
- **Hands-Free Spoken Feedback**: Spoken audio confirmation in the user's selected language using Speech Synthesis.

### 2. 🌍 Multilingual Voice Support
- **5 Supported Languages**: English (India, US), Hindi (हिन्दी), Spanish (Español), French (Français), and German (Deutsch).
- Dynamic locale switching for speech recognition engines and localized text-to-speech voice models.

### 3. 💡 3-Tier Smart Suggestions
- **Running Low / Frequent Staples**: Analyzes purchase frequency and restock intervals to suggest items before you run out.
- **Seasonal & Promotional Deals**: Highlights Indian seasonal harvest produce (Mangoes, Winter peas, Sarson saag, Gajar) with discount badges.
- **Dietary & Health Swaps**: Automatically detects items in your list (e.g., dairy milk, white sugar, maida) and suggests healthier alternatives (e.g., almond milk, organic jaggery/gur, ragi/multigrain flour).

### 4. 📋 Intelligent Shopping List Management
- **Automatic Categorization**: Organizes items into 10 structured grocery categories (Produce & Veggies, Dairy & Eggs, Bakery & Breads, Meat & Seafood, Pantry & Masalas, Beverages & Chai, Snacks & Namkeen, Frozen & Instant, Personal Care, Household & Cleaning).
- **Quantity & Unit Management**: Voice and manual +/- steppers supporting units like packets, kg, grams, bottles, litres, and dozen.
- **Progress Tracking**: Check off items as you shop with celebratory feedback and remaining item counts.
- **Persistent Storage**: Saves list state and history locally via `localStorage`.

### 5. 🔍 Voice-Activated Search & Price Filtering in Rupees (₹)
- **300+ Product Catalog**: Built-in Indian grocery database featuring popular brands (Amul, Mother Dairy, Aashirvaad, Tata, Fortune, Haldiram's, Dabur, Dettol, Surf Excel, Colgate, Maggi).
- **Voice Price Queries**: Spoken filters like *"Find toothpaste under 60 rupees"* or *"Find mustard oil between 100 and 200 rs"*.
- **Interactive Price Slider & Desi Toggles**: Filter items by maximum price (₹0 - ₹600+) or toggle organic/desi certified products with 1-click add.

### 6. 📱 Minimalist & Mobile-Optimized UI/UX
- Responsive mobile-first design with bottom controls and large tap targets.
- Equalizer soundwave animation during listening.
- Non-intrusive notification toasts for actions and undos.
- Fallbacks and clear permission prompts for microphone access.

---

## 🎤 Supported Voice Commands Cheat Sheet

| Intent | Example Voice Command | Action Taken |
|---|---|---|
| **Add Single Item** | *"Add 2 packets of Amul milk"* | Adds 2 packets of milk to Dairy & Eggs |
| **Add with Modifier** | *"I need 1 kg fresh Shimla apples"* | Adds 1 kg apples to Produce & Veggies |
| **Hindi Voice Command** | *"दो पैकेट अमूल दूध जोड़ो"* | Adds 2 packets of Amul milk to list |
| **Compound Add** | *"Buy 1 dozen bananas and 1 loaf of bread"* | Adds both items to respective categories |
| **Remove Item** | *"Remove milk from my list"* | Removes milk from list |
| **Modify Quantity** | *"Change milk quantity to 4"* | Updates milk count to 4 |
| **Voice Search** | *"Find toothpaste under 60 rupees"* | Opens search filtered to toothpaste ≤ ₹60 |
| **Price Range Search** | *"Search Fortune oil between 100 and 200 rs"* | Opens search within ₹100 - ₹200 range |
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
git clone https://github.com/kshitizzz10-ux/voice-shopping-assistant.git
cd voice-shopping-assistant

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
│   │   ├── PriceFilter.jsx      # Voice/manual Rupee price slider
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
│   │   └── ShoppingContext.jsx  # Global state provider with INR defaults
│   ├── hooks/
│   │   ├── useLocalStorage.js   # Local storage persistent hook
│   │   ├── useSpeechRecognition.js # Speech recognition hook
│   │   └── useSpeechSynthesis.js   # Text-to-speech audio hook
│   ├── utils/
│   │   ├── categoryClassifier.js   # Intelligent auto-categorization
│   │   ├── commandProcessor.js     # Intent action dispatcher
│   │   ├── constants.js            # App configuration, metadata, & currency
│   │   ├── multilingual.js         # Multilingual dictionaries & phrases
│   │   ├── nlpParser.js            # Natural language processing parser
│   │   ├── productDatabase.js      # Indian grocery catalog & INR pricing
│   │   ├── seasonalData.js         # Indian seasonal calendar recommendations
│   │   └── substituteMap.js        # Health & dietary Indian substitute map
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
