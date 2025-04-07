import React from 'react';
import { Brain, ArrowRight, Bot, Scale, Building, Shield, Microscope, Users, Lock, Camera, Box } from 'lucide-react';

interface Solution {
  icon: React.ElementType;
  title: string;
  category: string;
  features: string[];
  benefits: string[];
}

const solutions: Solution[] = [
  {
    icon: Bot,
    title: "AI-Driven Sales Automation",
    category: "Sales & Marketing",
    features: [
      "Full-cycle sales automation",
      "Multi-channel outreach automation",
      "AI-powered objection handling",
      "Live call analytics",
      "CRM integration"
    ],
    benefits: [
      "Reduce sales team operational costs significantly",
      "Increase lead conversion rates",
      "Automate repetitive sales tasks",
      "Improve sales team efficiency"
    ]
  },
  {
    icon: Scale,
    title: "Legal Document Generator",
    category: "Legal Tech",
    features: [
      "AI contract drafting & review",
      "Compliance checking",
      "Automated case research",
      "Law firm software integration",
      "Risk assessment"
    ],
    benefits: [
      "Minimize contract review costs",
      "Reduce legal errors significantly",
      "Speed up document processing",
      "Improve compliance accuracy"
    ]
  },
  {
    icon: Building,
    title: "Property Management System",
    category: "Real Estate",
    features: [
      "Automated rent collection",
      "AI tenant screening",
      "Predictive maintenance",
      "Digital lease automation",
      "AI tenant support"
    ],
    benefits: [
      "Reduce property management costs",
      "Prevent fraud and costly evictions",
      "Improve tenant satisfaction",
      "Optimize property operations"
    ]
  },
  {
    icon: Shield,
    title: "Financial Fraud Detection",
    category: "FinTech",
    features: [
      "Real-time fraud detection",
      "Automated KYC & AML",
      "Blockchain audit trails",
      "Payment gateway integration",
      "Risk scoring"
    ],
    benefits: [
      "Prevent financial fraud losses",
      "Ensure regulatory compliance",
      "Reduce operational risks",
      "Improve transaction security"
    ]
  },
  {
    icon: Microscope,
    title: "Healthcare Records Management",
    category: "HealthTech",
    features: [
      "AI-powered record processing",
      "Patient risk prediction",
      "Automated claims filing",
      "Secure communication",
      "Medical transcription"
    ],
    benefits: [
      "Ensure HIPAA compliance",
      "Reduce claim rejections",
      "Improve patient care",
      "Streamline operations"
    ]
  },
  {
    icon: Brain,
    title: "Market Intelligence Platform",
    category: "Business Intelligence",
    features: [
      "Competitor strategy analysis",
      "Trend forecasting",
      "Price optimization",
      "Strategy reporting",
      "Real-time alerts"
    ],
    benefits: [
      "Gain competitive advantages",
      "Optimize pricing strategies",
      "Improve market positioning",
      "Make data-driven decisions"
    ]
  },
  {
    icon: Users,
    title: "AI Recruiting Platform",
    category: "HR Tech",
    features: [
      "AI resume screening",
      "Video interview analysis",
      "Skill assessments",
      "ATS integration",
      "AI training programs"
    ],
    benefits: [
      "Reduce hiring costs",
      "Improve candidate quality",
      "Speed up recruitment",
      "Enhance onboarding"
    ]
  },
  {
    icon: Lock,
    title: "Cybersecurity System",
    category: "Security",
    features: [
      "Real-time threat detection",
      "Automated vulnerability scanning",
      "Behavior analytics",
      "Blockchain audit logs",
      "Enterprise integration"
    ],
    benefits: [
      "Prevent costly data breaches",
      "Ensure security compliance",
      "Protect sensitive data",
      "Reduce security risks"
    ]
  },
  {
    icon: Camera,
    title: "Content Generation Platform",
    category: "Media & Entertainment",
    features: [
      "AI virtual influencers",
      "Personalized content creation",
      "Voice synthesis",
      "Social media integration",
      "Trend prediction"
    ],
    benefits: [
      "Reduce content creation costs",
      "Scale content production",
      "Improve engagement",
      "Optimize marketing ROI"
    ]
  },
  {
    icon: Box,
    title: "Supply Chain Optimization",
    category: "Logistics",
    features: [
      "AI demand forecasting",
      "Supplier management",
      "Warehouse automation",
      "Product tracking",
      "ERP integration"
    ],
    benefits: [
      "Reduce inventory costs",
      "Optimize operations",
      "Improve supply chain efficiency",
      "Prevent stockouts"
    ]
  }
];

export default function CustomAISolutions() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold tracking-tight text-black">
            Custom AI Software Solutions
          </h2>
          <p className="mt-4 text-lg text-black/60">
            Transform your business with powerful AI-driven software
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group border border-black/10 p-8 hover:border-black/20 transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <solution.icon className="w-8 h-8 mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold tracking-tight">{solution.title}</h3>
                  <p className="text-sm text-black/60 mt-1">{solution.category}</p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-medium uppercase tracking-wider mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="text-sm text-black/60">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h4 className="text-sm font-medium uppercase tracking-wider mb-3">Economic Benefits</h4>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit) => (
                    <li key={benefit} className="text-sm text-black/60">
                      • {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href="#custom"
                className="inline-flex items-center text-sm tracking-wider uppercase group-hover:translate-x-2 transition-transform"
              >
                Explore Solution
                <ArrowRight className="ml-2 w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <a
            href="#custom"
            className="inline-flex items-center px-12 py-4 border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-wider uppercase"
          >
            Request Custom Solution
            <ArrowRight className="ml-2 w-4 h-4" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
