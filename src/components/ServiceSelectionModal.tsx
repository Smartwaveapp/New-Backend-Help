import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface Service {
  name: string;
  category: 'basic' | 'intermediate' | 'advanced' | 'enterprise';
  description: string;
}

interface ServiceSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageType: string;
  onSubmit: (selectedServices: Service[]) => void;
  isLoading?: boolean;
  error?: string | null;
}

const allServices: Service[] = [
  // Basic Services
  { 
    name: 'Basic API Integration',
    category: 'basic',
    description: 'RESTful API Endpoints'
  },
  { 
    name: 'Database Setup',
    category: 'basic',
    description: 'Data Structure & Storage'
  },
  { 
    name: 'Authentication Setup',
    category: 'basic',
    description: 'Secure User Access'
  },
  { 
    name: 'Cloud Storage Configuration',
    category: 'basic',
    description: 'File Management'
  },
  { 
    name: 'Email Automation',
    category: 'basic',
    description: 'Automated Communications'
  },
  
  // Intermediate Services
  { 
    name: 'Basic CRUD Backend',
    category: 'intermediate',
    description: 'Data Operations'
  },
  { 
    name: 'Webhooks Integration',
    category: 'intermediate',
    description: 'Event Notifications'
  },
  { 
    name: 'Basic Analytics Integration',
    category: 'intermediate',
    description: 'Data Insights'
  },
  { 
    name: 'Push Notification System',
    category: 'intermediate',
    description: 'Real-time Alerts'
  },
  { 
    name: 'Payment Gateway Setup',
    category: 'intermediate',
    description: 'Payment Processing'
  },
  
  // Advanced Services
  { 
    name: 'Multi-User Role Management',
    category: 'advanced',
    description: 'Access Control'
  },
  { 
    name: 'Real-Time Chat Backend',
    category: 'advanced',
    description: 'Live Messaging'
  },
  { 
    name: 'Basic Scheduler/Task Queue',
    category: 'advanced',
    description: 'Task Automation'
  },
  { 
    name: 'Basic SaaS Backend',
    category: 'advanced',
    description: 'Multi-tenant System'
  },
  { 
    name: 'AI Model Integration',
    category: 'advanced',
    description: 'AI Integration'
  },
  
  // Enterprise Services
  { 
    name: 'Custom API Development',
    category: 'enterprise',
    description: 'Custom Solutions'
  },
  { 
    name: 'Advanced Analytics Backend',
    category: 'enterprise',
    description: 'Advanced Insights'
  },
  { 
    name: 'Enterprise Backend Solutions',
    category: 'enterprise',
    description: 'Enterprise Scale'
  },
  { 
    name: 'Blockchain Integration',
    category: 'enterprise',
    description: 'Web3 Ready'
  }
];

const packageRequirements = {
  'Small Backend': {
    basic: 2,
    intermediate: 0,
    advanced: 0,
    enterprise: 0,
    total: 2
  },
  'Standard Backend': {
    basic: 1,
    intermediate: 2,
    advanced: 0,
    enterprise: 0,
    total: 3
  },
  'Premium Backend': {
    basic: 2,
    intermediate: 1,
    advanced: 1,
    enterprise: 0,
    total: 4
  },
  'Complete Backend': {
    basic: 1,
    intermediate: 1,
    advanced: 1,
    enterprise: 1,
    total: 4
  }
};

export default function ServiceSelectionModal({ 
  isOpen, 
  onClose, 
  packageType, 
  onSubmit,
  isLoading,
  error 
}: ServiceSelectionModalProps) {
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const requirements = packageRequirements[packageType as keyof typeof packageRequirements];

  const getSelectedCount = (category: string) => 
    selectedServices.filter(service => service.category === category).length;

  const canSelectMore = (category: string) => {
    const currentCount = getSelectedCount(category);
    return currentCount < requirements[category as keyof typeof requirements];
  };

  const isSelectionValid = () => {
    return Object.entries(requirements).every(([category, count]) => {
      if (category === 'total') return true;
      return getSelectedCount(category) === count;
    });
  };

  const toggleService = (service: Service) => {
    const isSelected = selectedServices.some(s => s.name === service.name);
    
    if (isSelected) {
      setSelectedServices(selectedServices.filter(s => s.name !== service.name));
    } else {
      if (canSelectMore(service.category)) {
        setSelectedServices([...selectedServices, service]);
      }
    }
  };

  const isServiceSelected = (service: Service) => 
    selectedServices.some(s => s.name === service.name);

  const renderServiceCategory = (category: string, services: Service[]) => {
    const categoryServices = services.filter(s => s.category === category);
    const selectedCount = getSelectedCount(category);
    const requiredCount = requirements[category as keyof typeof requirements];
    const canSelectAny = requiredCount > 0;

    return (
      <div key={category} className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold tracking-tight">{category} Services</h3>
          <span className={`text-sm ${canSelectAny ? 'text-black' : 'text-black/40'}`}>
            Selected: {selectedCount}/{requiredCount}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {categoryServices.map((service) => (
            <button
              key={service.name}
              onClick={() => toggleService(service)}
              disabled={!isServiceSelected(service) && !canSelectMore(service.category)}
              className={`
                relative p-4 sm:p-6 border text-left transition-all group
                ${!canSelectAny ? 'opacity-40' : ''}
                ${isServiceSelected(service)
                  ? 'border-black bg-black text-white'
                  : 'border-black/10 hover:border-black/20'}
                ${!isServiceSelected(service) && !canSelectMore(service.category)
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'}
                hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
              `}
            >
              <div className="flex items-start justify-between">
                <span className="font-medium tracking-tight">{service.name}</span>
                {isServiceSelected(service) && (
                  <Check className="w-4 h-4" strokeWidth={1.5} />
                )}
              </div>
              <p className={`
                mt-1 text-sm uppercase tracking-wide
                ${isServiceSelected(service) ? 'text-white/60' : 'text-black/40'}
              `}>
                {service.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto p-4 sm:p-8 mx-2 sm:mx-4 relative">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={onClose}
              className="group flex items-center text-sm text-black/60 hover:text-black transition-colors"
            >
              <X className="w-4 h-4 mr-2" strokeWidth={1.5} />
              <span className="uppercase tracking-wider">Back to Homepage</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-black/5 rounded-full transition-colors sm:hidden"
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
          <h2 className="text-3xl font-bold tracking-tight">{packageType}</h2>
          <p className="text-black/60 mt-2 text-sm uppercase tracking-wide">
            Select your services according to the package requirements
          </p>
        </div>

        {renderServiceCategory('basic', allServices)}
        {renderServiceCategory('intermediate', allServices)}
        {renderServiceCategory('advanced', allServices)}
        {renderServiceCategory('enterprise', allServices)}

        <div className="sticky -bottom-4 -mx-4 sm:-mx-8 px-4 sm:px-8 pb-4 pt-8 bg-gradient-to-t from-white via-white">
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onClose}
              className="flex-1 py-4 px-6 text-sm tracking-wider uppercase transition-all border border-black/10 hover:border-black/20 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]"
            >
              Cancel
            </button>
            <button
              onClick={() => onSubmit(selectedServices)}
              disabled={!isSelectionValid()}
              className={`
                flex-1 py-4 px-6 text-sm tracking-wider uppercase transition-all
                ${isSelectionValid() && !isLoading
                  ? 'bg-black text-white hover:bg-black/90 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]'
                  : 'bg-black/20 cursor-not-allowed'}
              `}
            >
              {isLoading ? 'Processing...' : 'Complete Selection'}
            </button>
          </div>
          {error && (
            <p className="mt-4 text-red-600 text-sm text-center">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}