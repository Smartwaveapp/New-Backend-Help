import React from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

const serviceCategories = [
  {
    title: 'Basic Services',
    description: 'Foundation for scalable backends',
    services: [
      {
        name: 'Basic API Integration',
        description: 'RESTful API endpoints with standard CRUD operations, request validation, and error handling.'
      },
      {
        name: 'Database Setup',
        description: 'Database schema design, migrations, and basic queries optimization for your application data.'
      },
      {
        name: 'Authentication Setup',
        description: 'Secure user authentication with JWT tokens, password hashing, and session management.'
      },
      {
        name: 'Cloud Storage Configuration',
        description: 'Set up and configure cloud storage for files, images, and documents with secure access controls.'
      },
      {
        name: 'Email Automation',
        description: 'Automated email sending system with templates, scheduling, and delivery tracking.'
      }
    ]
  },
  {
    title: 'Intermediate Services',
    description: 'Enhanced functionality and integrations',
    services: [
      {
        name: 'Basic CRUD Backend',
        description: 'Advanced CRUD operations with relationship handling, bulk operations, and data validation.'
      },
      {
        name: 'Webhooks Integration',
        description: 'Custom webhook system for real-time event notifications and third-party integrations.'
      },
      {
        name: 'Basic Analytics Integration',
        description: 'Track and analyze user behavior, system performance, and business metrics.'
      },
      {
        name: 'Push Notification System',
        description: 'Real-time push notifications for web and mobile with delivery tracking.'
      },
      {
        name: 'Payment Gateway Setup',
        description: 'Secure payment processing with popular payment gateways, including subscription handling.'
      }
    ]
  },
  {
    title: 'Advanced Services',
    description: 'Complex systems and real-time features',
    services: [
      {
        name: 'Multi-User Role Management',
        description: 'Complex role-based access control (RBAC) with custom permissions and hierarchical roles.'
      },
      {
        name: 'Real-Time Chat Backend',
        description: 'Scalable real-time chat system with message history, typing indicators, and presence detection.'
      },
      {
        name: 'Basic Scheduler/Task Queue',
        description: 'Background job processing system with scheduling, retries, and monitoring.'
      },
      {
        name: 'Basic SaaS Backend',
        description: 'Multi-tenant architecture with isolated data, custom domains, and subscription management.'
      },
      {
        name: 'Social Media Integrations',
        description: 'Comprehensive social media platform integrations with OAuth and API connectivity.'
      },
      {
        name: 'AI Model Integration',
        description: 'Integration with AI/ML models for predictions, recommendations, and data analysis.'
      }
    ]
  },
  {
    title: 'Enterprise Services',
    description: 'High-scale, mission-critical solutions',
    services: [
      {
        name: 'Custom API Development',
        description: 'Fully customized API development with complex business logic, optimizations, and scalability.'
      },
      {
        name: 'Advanced Data Analytics Backend',
        description: 'Enterprise-grade analytics with real-time processing, custom metrics, and advanced reporting.'
      },
      {
        name: 'E-commerce Backend',
        description: 'Complete e-commerce solution with inventory, orders, payments, and shipping management.'
      },
      {
        name: 'Real-Time Collaboration Backend',
        description: 'Real-time collaboration features with conflict resolution and state synchronization.'
      },
      {
        name: 'Enterprise Backend',
        description: 'High-scale enterprise solutions with microservices, caching, and load balancing.'
      },
      {
        name: 'IoT Device Integration',
        description: 'IoT device management, data collection, and real-time monitoring systems.'
      },
      {
        name: 'Machine Learning Backend',
        description: 'Dedicated ML infrastructure with model training, deployment, and monitoring.'
      },
      {
        name: 'Blockchain Integration',
        description: 'Integration with blockchain networks for smart contracts, transactions, and decentralized apps.'
      }
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold tracking-tight text-black">
            Services
          </h2>
          <p className="mt-4 text-lg text-black/60">
            Choose from our comprehensive range of backend development services
          </p>
        </div>

        <div className="space-y-12">
          {serviceCategories.map((category) => {
            return (
              <details key={category.title} className="group">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none border border-black/10 hover:border-black/20 transition-all">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">{category.title}</h3>
                    <p className="mt-2 text-black/60">{category.description}</p>
                  </div>
                  <ChevronDown className="w-6 h-6 transition-transform group-open:rotate-180" strokeWidth={1.5} />
                </summary>
                <div className="pt-8 pb-4 px-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.services.map((service) => (
                    <div key={service.name} className="group p-6 border border-black/10 hover:border-black/20 transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <h4 className="font-medium text-lg mb-2">{service.name}</h4>
                      <p className="text-sm text-black/60 mb-4">{service.description}</p>
                      <div className="flex items-center justify-end">
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}