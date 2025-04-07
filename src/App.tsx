import React from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Pricing from './components/Pricing';
import ProblemSolution from './components/ProblemSolution';
import TechShowcase from './components/TechShowcase';
import CustomOffer from './components/CustomOffer';
import CustomAISolutions from './components/CustomAISolutions';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-black/5 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Terminal className="w-8 h-8 text-black" strokeWidth={1.5} />
              <span className="ml-2 text-xl font-bold tracking-tight">Backendhelp</span>
            </div>
            <button
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-black" strokeWidth={1.5} />
              ) : (
                <Menu className="w-6 h-6 text-black" strokeWidth={1.5} />
              )}
            </button>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-black/60 hover:text-black transition-colors uppercase text-sm tracking-wider">Services</a>
              <a href="#pricing" className="text-black/60 hover:text-black transition-colors uppercase text-sm tracking-wider">Pricing</a>
              <a href="#custom" className="text-black/60 hover:text-black transition-colors uppercase text-sm tracking-wider">Enterprise</a>
              <a
                href="https://cal.com/backendhelp/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="minimal-button"
              >
                Book a Call
              </a>
            </div>
          </div>
          {/* Mobile Menu */}
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} py-4`}>
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                onClick={closeMobileMenu}
                className="text-black/60 hover:text-black transition-colors uppercase text-sm tracking-wider"
              >
                Services
              </a>
              <a
                href="#pricing"
                onClick={closeMobileMenu}
                className="text-black/60 hover:text-black transition-colors uppercase text-sm tracking-wider"
              >
                Pricing
              </a>
              <a
                href="#custom"
                onClick={closeMobileMenu}
                className="text-black/60 hover:text-black transition-colors uppercase text-sm tracking-wider"
              >
                Enterprise
              </a>
              <a
                href="https://cal.com/backendhelp/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="minimal-button inline-block text-center"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="pt-16">
        <Hero />
        <HowItWorks />
        <Services />
        <Pricing />
        <TechShowcase />
        <ProblemSolution />
        <CustomAISolutions />
        <CustomOffer />
      </main>
      
      <footer className="bg-black text-white py-12 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center">
                <Terminal className="w-6 h-6 text-white" strokeWidth={1.5} />
                <span className="ml-2 text-lg font-semibold">Backendhelp</span>
              </div>
              <p className="mt-4 text-white/60">
                Expert backend development services for AI-powered applications.
              </p>
            </div>
            <div>
              <h3 className="font-semibold uppercase tracking-wider text-sm mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-white/60 hover:text-white">Services</a></li>
                <li><a href="#pricing" className="text-white/60 hover:text-white">Pricing</a></li>
                <li><a href="#custom" className="text-white/60 hover:text-white">Enterprise Solutions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold uppercase tracking-wider text-sm mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-white/60">nattydev2@gmail.com</li>
                <li>
                  <a
                    href="https://cal.com/backendhelp/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Book a consultation
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
