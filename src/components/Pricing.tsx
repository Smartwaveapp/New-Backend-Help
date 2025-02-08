import React from 'react';
import { useState } from 'react';
import { Check, ArrowRight, Send } from 'lucide-react';
import { hasPolicyAcceptance, setPolicyAcceptance } from '../lib/paddle';
import { POLAR_LINKS } from '../lib/polar';
import ServiceSelectionModal from './ServiceSelectionModal';
import PolicyModal from './PolicyModal';

interface Service {
  name: string;
  category: 'basic' | 'intermediate' | 'advanced' | 'enterprise';
}

const packages = [
  {
    name: 'Small Backend',
    price: 700,
    description: 'Choose any 2 services from Basic',
    features: [
      'Basic API Integration',
      'Database Setup',
      'Authentication Setup',
      'Cloud Storage Configuration',
      'Email Automation'
    ]
  },
  {
    name: 'Standard Backend',
    price: 2000,
    description: 'Choose any 3 services from Basic & Intermediate',
    features: [
      'All Basic services',
      'Basic CRUD Backend',
      'Webhooks Integration',
      'Basic Analytics Integration',
      'Push Notification System'
    ]
  },
  {
    name: 'Premium Backend',
    price: 3500,
    description: 'Choose any 4 services: 2 Basic, 1 Intermediate, 1 Advanced',
    features: [
      'All Basic & Intermediate services',
      'Multi-User Role Management',
      'Real-Time Chat Backend',
      'Basic SaaS Backend',
      'AI Model Integration'
    ]
  },
  {
    name: 'Complete Backend',
    price: 5000,
    description: 'Choose any 4 services: 1 Basic, 1 Intermediate, 1 Advanced, 1 Enterprise',
    features: [
      'All services from previous tiers',
      'Custom API Development',
      'Advanced Analytics Backend',
      'Enterprise Backend Solutions',
      'Blockchain Integration'
    ]
  }
];

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPolicyModal, setShowPolicyModal] = useState(false);

  const handleGetStarted = (packageName: string) => {
    if (!hasPolicyAcceptance()) {
      setSelectedPackage(packageName);
      setShowPolicyModal(true);
    } else {
      setSelectedPackage(packageName);
      setIsModalOpen(true);
    }
  };

  const handlePolicyAcceptance = () => {
    setPolicyAcceptance();
    setShowPolicyModal(false);
    setIsModalOpen(true);
  };

  const handleServiceSelection = async (services: Service[]) => {
    setIsLoading(true);
    setError(null);
    
    // Store selected services in session storage for reference
    sessionStorage.setItem('selectedServices', JSON.stringify(services));
    
    // Redirect to Polar checkout
    window.location.href = POLAR_LINKS[selectedPackage as keyof typeof POLAR_LINKS];
  };

  return (
    <section id="pricing" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold tracking-tight">
            Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Choose the perfect package for your backend needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="flex flex-col border border-white/10 p-8 hover:border-white/20 transition-all hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
            >
              <h3 className="text-2xl font-semibold tracking-tight">{pkg.name}</h3>
              <p className="mt-4 text-white/60 text-sm">{pkg.description}</p>
              <p className="mt-8 flex items-baseline">
                <span className="text-5xl font-bold tracking-tight">
                  ${pkg.price}
                </span>
              </p>
              <ul className="mt-8 space-y-4 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="w-5 h-5 text-white shrink-0" strokeWidth={1.5} />
                    <span className="ml-3 text-sm text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleGetStarted(pkg.name)}
                className="mt-8 group border border-white/90 bg-black px-6 py-4 text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-all flex items-center justify-center"
                data-polar-checkout
                data-polar-checkout-theme="dark"
                data-href={POLAR_LINKS[pkg.name as keyof typeof POLAR_LINKS]}
              >
                {isLoading ? 'Processing...' : 'Get started'}
                <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
              </button>
            </div>
          ))}
        </div>

        <ServiceSelectionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          packageType={selectedPackage}
          onSubmit={handleServiceSelection}
          isLoading={isLoading}
          error={error}
        />
        
        <PolicyModal
          isOpen={showPolicyModal}
          onClose={() => setShowPolicyModal(false)}
          onAccept={handlePolicyAcceptance}
        />
      </div>
    </section>
  );
}