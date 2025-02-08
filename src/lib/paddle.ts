// Paddle integration temporarily disabled
// import Paddle from '@paddle/paddle-js';

// Local storage key for policy acceptance
const POLICY_ACCEPTANCE_KEY = 'backendhelp_policy_accepted';

// Check if user has accepted policies
export const hasPolicyAcceptance = () => {
  return localStorage.getItem(POLICY_ACCEPTANCE_KEY) === 'true';
};

// Set policy acceptance
export const setPolicyAcceptance = () => {
  localStorage.setItem(POLICY_ACCEPTANCE_KEY, 'true');
};

// Mock functions for development
export const initializePaddle = async () => {
  console.log('Paddle integration disabled');
};

export const createCheckout = async (
  priceId: string,
  customerEmail?: string,
  services?: string[]
) => {
  // Check policy acceptance before proceeding
  if (!hasPolicyAcceptance()) {
    throw new Error('Please accept our policies before proceeding');
  }

  console.log('Checkout creation disabled', { priceId, customerEmail, services });
  throw new Error('Paddle integration is currently disabled');
};

export const PRICE_IDS = {
  'Small Backend': 'disabled',
  'Standard Backend': 'disabled',
  'Premium Backend': 'disabled',
  'Complete Backend': 'disabled',
} as const;