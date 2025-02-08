import React from 'react';
import { CreditCard, MessageSquare, Database, CheckSquare, Rocket, ArrowRight, ArrowDown } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: CreditCard,
      title: 'Choose & Pay',
      description: 'Select your package and complete payment'
    },
    {
      icon: MessageSquare,
      title: 'Join Slack',
      description: 'Get added to your private project channel'
    },
    {
      icon: Database,
      title: 'Backend Setup',
      description: 'Our experts begin the implementation'
    },
    {
      icon: CheckSquare,
      title: 'Testing & Review',
      description: 'Rigorous testing and quality checks'
    },
    {
      icon: Rocket,
      title: 'Delivery & Handover',
      description: 'Clean code handover and documentation'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight headline-gradient">
            How It Works
          </h2>
          <p className="mt-6 text-lg md:text-2xl text-black/60 max-w-2xl mx-auto font-light">
            From concept to production in five simple steps
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Progress Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-black/10" />
          
          {/* Mobile Progress Line */}
          <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-0.5 bg-black/10" />
          
          {/* Steps */}
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-16 md:gap-16 lg:gap-24">
            {steps.map((step, index) => (
              <div key={step.title} className="relative group flex flex-col items-center">
                {/* Step Box */}
                <div className="w-full max-w-[280px] md:w-auto aspect-square border-2 border-black p-8 bg-white flex flex-col items-center justify-center text-center transition-all duration-500 group-hover:bg-black group-hover:text-white group-hover:-translate-y-2 group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                  <step.icon className="w-16 h-16 mb-6 transition-transform duration-500 group-hover:scale-110" strokeWidth={1} />
                  <h3 className="font-mono text-base md:text-lg tracking-wider mb-3">{step.title}</h3>
                  <p className="text-sm md:text-base opacity-60 font-light">{step.description}</p>
                  
                  {/* Step Number */}
                  <div className="absolute -top-5 -right-5 w-10 h-10 bg-black text-white text-base flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:rotate-12">
                    {index + 1}
                  </div>
                </div>

                {/* Desktop Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-8 w-16 h-[2px] bg-black/10">
                    <div className="absolute top-1/2 right-0 w-4 h-4 bg-black/60 rounded-full -translate-y-1/2 group-hover:bg-black transition-all duration-500 group-hover:scale-150" />
                  </div>
                )}
                
                {/* Mobile Connection Arrow */}
                {index < steps.length - 1 && (
                  <div className="md:hidden mt-8 mb-8">
                    <ArrowDown className="w-6 h-6 text-black/40 group-hover:text-black transition-colors" strokeWidth={1} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center px-16 py-8 border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-500 text-base tracking-wider uppercase group hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
          >
            Start Your Project
            <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}