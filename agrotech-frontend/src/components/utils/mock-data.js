export const markets = [
  {
    id: 1,
    name: 'Midwest',
    states: ['Illinois', 'Indiana', 'Iowa', 'Kansas', 'Michigan', 'Minnesota', 'Missouri', 'Nebraska', 'Ohio', 'Wisconsin'],
    tradingVolume: 420,
    growth: 12.4
  },
  {
    id: 2,
    name: 'South',
    states: ['Alabama', 'Arkansas', 'Florida', 'Georgia', 'Kentucky', 'Louisiana', 'Mississippi', 'North Carolina', 'South Carolina', 'Tennessee', 'Virginia', 'West Virginia'],
    tradingVolume: 340,
    growth: 18.2
  },
  {
    id: 3,
    name: 'West',
    states: ['Alaska', 'Arizona', 'California', 'Colorado', 'Hawaii', 'Idaho', 'Montana', 'Nevada', 'New Mexico', 'Oregon', 'Utah', 'Washington', 'Wyoming'],
    tradingVolume: 285,
    growth: 10.5
  },
  {
    id: 4,
    name: 'Northeast',
    states: ['Connecticut', 'Delaware', 'Maine', 'Maryland', 'Massachusetts', 'New Hampshire', 'New Jersey', 'New York', 'Pennsylvania', 'Rhode Island', 'Vermont'],
    tradingVolume: 190,
    growth: 8.3
  }
];

// Crops
export const crops = [
  {
    id: 'wheat',
    name: 'Wheat',
    price: 7.85,
    priceChange: 2.3,
    trend: 'up',
    harvestMonths: [6, 7, 8], // Jun, Jul, Aug
    varieties: ['Hard Red Winter', 'Soft Red Winter', 'Hard Red Spring', 'Soft White', 'Durum']
  },
  {
    id: 'corn',
    name: 'Corn',
    price: 6.25,
    priceChange: 1.1,
    trend: 'up',
    harvestMonths: [9, 10, 11], // Sep, Oct, Nov
    varieties: ['Dent Corn', 'Flint Corn', 'Popcorn', 'Sweet Corn', 'Flour Corn']
  },
  {
    id: 'soybeans',
    name: 'Soybeans',
    price: 14.50,
    priceChange: -0.5,
    trend: 'down',
    harvestMonths: [9, 10, 11], // Sep, Oct, Nov
    varieties: ['Commodity', 'Specialty', 'High Protein', 'Organic', 'Non-GMO']
  },
  {
    id: 'rice',
    name: 'Rice',
    price: 18.30,
    priceChange: 3.7,
    trend: 'up',
    harvestMonths: [8, 9, 10], // Aug, Sep, Oct
    varieties: ['Long-grain', 'Medium-grain', 'Short-grain', 'Jasmine', 'Basmati']
  },
  {
    id: 'barley',
    name: 'Barley',
    price: 5.65,
    priceChange: 0.8,
    trend: 'up',
    harvestMonths: [6, 7, 8], // Jun, Jul, Aug
    varieties: ['Feed', 'Malting', 'Food', 'Hulless']
  },
  {
    id: 'cotton',
    name: 'Cotton',
    price: 0.86,
    priceChange: -1.2,
    trend: 'down',
    harvestMonths: [9, 10, 11], // Sep, Oct, Nov
    varieties: ['Upland', 'Pima', 'Organic', 'Colored']
  }
];

// Quality Grades
export const qualityGrades = [
  {
    id: 'premium',
    name: 'Premium',
    description: 'Highest quality with minimal impurities, typically commands top market prices.',
    priceMultiplier: 1.15
  },
  {
    id: 'standard',
    name: 'Standard',
    description: 'Meets industry quality standards, suitable for most applications.',
    priceMultiplier: 1.0
  },
  {
    id: 'organic',
    name: 'Organic',
    description: 'Certified organic produce grown without synthetic pesticides or fertilizers.',
    priceMultiplier: 1.3
  }
];

// Units
export const units = [
  {
    id: 'bushels',
    name: 'Bushels',
    abbreviation: 'bu',
    conversionToMetricTons: {
      wheat: 0.027216,
      corn: 0.0254,
      soybeans: 0.0272155,
      rice: 0.0204116
    }
  },
  {
    id: 'tons',
    name: 'Tons',
    abbreviation: 't',
    conversionToMetricTons: 0.90718474
  },
  {
    id: 'kg',
    name: 'Kilograms',
    abbreviation: 'kg',
    conversionToMetricTons: 0.001
  }
];

// Transaction Statuses
export const transactionStatuses = [
  {
    id: 'pending',
    name: 'Pending',
    description: 'Transaction has been initiated but not yet confirmed by both parties.'
  },
  {
    id: 'in-transit',
    name: 'In Transit',
    description: 'Payment confirmed, produce is in transit to the buyer.'
  },
  {
    id: 'completed',
    name: 'Completed',
    description: 'Transaction fully completed with delivery confirmed and payment processed.'
  },
  {
    id: 'cancelled',
    name: 'Cancelled',
    description: 'Transaction cancelled by either party before completion.'
  }
];

// Payment Methods
export const paymentMethods = [
  {
    id: 'bank-transfer',
    name: 'Bank Transfer',
    processingTime: '1-3 business days',
    fee: '0%'
  },
  {
    id: 'credit-card',
    name: 'Credit Card',
    processingTime: 'Immediate',
    fee: '2.9% + $0.30'
  },
  {
    id: 'escrow',
    name: 'Platform Escrow',
    processingTime: 'Release upon delivery confirmation',
    fee: '1.5%'
  }
];

// Transaction Types
export const transactionTypes = [
  {
    id: 'direct-sale',
    name: 'Direct Sale',
    description: 'Immediate sale of available produce at current market prices.'
  },
  {
    id: 'forward-contract',
    name: 'Forward Contract',
    description: 'Agreement to buy/sell at a predetermined price at a future date.'
  },
  {
    id: 'spot-sale',
    name: 'Spot Sale',
    description: 'Transaction for immediate delivery at current market prices.'
  }
];