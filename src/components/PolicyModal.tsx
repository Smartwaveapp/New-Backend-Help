import React, { useState, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

export default function PolicyModal({ isOpen, onClose, onAccept }: PolicyModalProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sections = [
    {
      id: 'terms',
      title: 'Terms of Service',
      content: `Service Scope – BackendHelp provides backend development services as outlined in our pricing packages. Custom projects require separate agreements.
Payments – All payments are processed via Paddle. Full payment is required before work begins.
Project Timeline – Estimated delivery times depend on project scope and client responsiveness.
Client Responsibilities – Clients must provide necessary details, feedback, and access for project completion.
Modifications & Revisions – Minor revisions are included; significant scope changes may require additional payment.
Liability Disclaimer – We are not responsible for third-party service failures, security breaches outside our scope, or project misuse.
Termination – We reserve the right to cancel a project due to unforeseen circumstances, with refunds handled per our refund policy.`
    },
    {
      id: 'privacy',
      title: 'Privacy Notice',
      content: `Data Collection – We collect client-provided information (e.g., email, project details) strictly for service delivery.
Data Usage – Your data is used only for project execution, communication, and legal compliance.
Data Security – We use encryption, secure storage, and access controls to protect your information.
Third-Party Services – We may integrate third-party tools (e.g., Paddle, Slack), each governed by their respective policies.
Data Retention – We retain project data only for as long as necessary to fulfill our services and legal obligations.
Your Rights – You can request data deletion or modification at any time by contacting us.`
    },
    {
      id: 'refund',
      title: 'Refund Policy',
      content: `No Refunds on Completed Work – Due to the nature of our services, completed projects are non-refundable.
Pre-Work Refunds – If you request a cancellation before work begins, you're eligible for a 70% refund (30% covers administrative and opportunity costs).
Partial Refunds – If work has started but not completed, a partial refund may be granted based on work completed.
Non-Refundable Cases – Refunds are not available for client delays, lack of responsiveness, or change of mind after work starts.
Custom Projects – Refund terms for custom enterprise projects will be agreed upon separately before the project starts.`
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto mx-4 relative">
        <div className="sticky top-0 bg-white border-b border-black/10 p-6 flex justify-between items-center">
          <h2 className="text-xl font-bold tracking-tight">Terms & Policies</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="border border-black/10">
              <button
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                className="w-full p-4 flex items-center justify-between text-left hover:bg-black/5 transition-colors"
              >
                <span className="font-medium">{section.title}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    expandedSection === section.id ? 'rotate-180' : ''
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              {expandedSection === section.id && (
                <div className="p-4 border-t border-black/10 text-sm text-black/60 whitespace-pre-line">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="sticky bottom-0 bg-white border-t border-black/10 p-6">
          <button
            onClick={onAccept}
            className="w-full py-4 px-6 bg-black text-white text-sm tracking-wider uppercase hover:bg-black/90 transition-colors"
          >
            Accept All Policies
          </button>
          <p className="mt-4 text-xs text-center text-black/60">
            By clicking "Accept All Policies", you agree to our Terms of Service, Privacy Notice, and Refund Policy.
          </p>
        </div>
      </div>
    </div>
  );
}