import React, { useState } from 'react';
import { Send, ArrowUpRight } from 'lucide-react';

export default function CustomOffer() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '4c3f5777-1155-4d42-9d5e-a796166e585b',
          ...Object.fromEntries(formData)
        }),
      });

      if (!response.ok) throw new Error('Form submission failed');

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      e.currentTarget.reset();
    } catch (error) {
      setError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="custom" className="py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {showSuccess && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-black text-white px-8 py-4 rounded-lg shadow-lg flex items-center justify-center space-x-2 animate-fade-in">
            <span className="text-sm uppercase tracking-wider">Message sent successfully!</span>
          </div>
        )}

        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold tracking-tight text-black">
            Enterprise & Custom Solutions
          </h2>
          <p className="mt-4 text-lg text-black/60">
            Let's architect your vision together
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-12"
        >
          <div className="space-y-8">
            <div className="group border border-black/10 p-8 hover:border-black/20 transition-all">
              <label htmlFor="company" className="block text-sm uppercase tracking-wider font-medium text-black/80">
                Company Name
              </label>
              <div className="relative mt-2">
                <input
                  type="text"
                  id="company"
                  name="company"
                  autoComplete="organization"
                  required
                  className="block w-full border-0 border-b border-black/20 bg-transparent px-0 py-3 text-black placeholder:text-black/40 focus:border-black/40 focus:ring-0"
                  placeholder="Your company name"
                />
                <ArrowUpRight className="absolute right-0 top-4 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
              </div>
            </div>

            <div className="group border border-black/10 p-8 hover:border-black/20 transition-all">
              <label htmlFor="email" className="block text-sm uppercase tracking-wider font-medium text-black/80">
                Email
              </label>
              <div className="relative mt-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="block w-full border-0 border-b border-black/20 bg-transparent px-0 py-3 text-black placeholder:text-black/40 focus:border-black/40 focus:ring-0"
                  placeholder="your@email.com"
                />
                <ArrowUpRight className="absolute right-0 top-4 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
              </div>
            </div>

            <div className="group border border-black/10 p-8 hover:border-black/20 transition-all">
              <label htmlFor="solution" className="block text-sm uppercase tracking-wider font-medium text-black/80">
                Interested Solution
              </label>
              <div className="relative mt-2">
                <select
                  id="solution"
                  name="solution"
                  required
                  className="block w-full border-0 border-b border-black/20 bg-transparent px-0 py-3 text-black focus:border-black/40 focus:ring-0 appearance-none cursor-pointer"
                >
                  <option value="" disabled selected>Select a solution</option>
                  <option value="sales-automation">AI-Driven Sales Automation</option>
                  <option value="legal-tech">Legal Document Generator</option>
                  <option value="property-management">Property Management System</option>
                  <option value="fraud-detection">Financial Fraud Detection</option>
                  <option value="healthcare">Healthcare Records Management</option>
                  <option value="market-intelligence">Market Intelligence Platform</option>
                  <option value="recruiting">AI Recruiting Platform</option>
                  <option value="cybersecurity">Cybersecurity System</option>
                  <option value="content-generation">Content Generation Platform</option>
                  <option value="supply-chain">Supply Chain Optimization</option>
                  <option value="custom">Custom Solution</option>
                </select>
                <ArrowUpRight className="absolute right-0 top-4 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
              </div>
            </div>

            <div className="group border border-black/10 p-8 hover:border-black/20 transition-all">
              <label htmlFor="requirements" className="block text-sm uppercase tracking-wider font-medium text-black/80">
                Project Requirements
              </label>
              <div className="relative mt-2">
                <textarea
                  id="requirements"
                  rows={6}
                  name="requirements"
                  spellCheck="true"
                  required
                  className="block w-full border-0 border-b border-black/20 bg-transparent px-0 py-3 text-black placeholder:text-black/40 focus:border-black/40 focus:ring-0 resize-none"
                  placeholder="Describe your project requirements, technical specifications, and any specific needs..."
                />
                <ArrowUpRight className="absolute right-0 top-4 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
              </div>
            </div>

            <div className="group border border-black/10 p-8 hover:border-black/20 transition-all">
              <label htmlFor="budget" className="block text-sm uppercase tracking-wider font-medium text-black/80">
                Budget Range
              </label>
              <div className="relative mt-2">
                <select
                  id="budget"
                  defaultValue=""
                  name="budget"
                  required
                  className="block w-full border-0 border-b border-black/20 bg-transparent px-0 py-3 text-black focus:border-black/40 focus:ring-0 appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-black/40">Select your budget range</option>
                  <option value="700-2k">$700 - $2,000</option>
                  <option value="2k-5k">$2,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
                <ArrowUpRight className="absolute right-0 top-4 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full group border border-black/90 bg-white px-8 py-6 text-sm tracking-wider uppercase hover:bg-black hover:text-white transition-all flex items-center justify-center"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Custom Offer'}
            <Send className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
          </button>
          {error && (
            <p className="mt-4 text-red-600 text-sm text-center">{error}</p>
          )}
        </form>
      </div>
    </section>
  );
}
