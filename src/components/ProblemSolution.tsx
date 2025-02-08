import React from 'react';
import { Terminal } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <h2 className="text-6xl font-bold tracking-tight">
            The AI Backend Dilemma
          </h2>
          <p className="mt-6 text-xl text-white/60">
            When AI coding assistants hit their limits, Backendhelp steps in
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-5xl mx-auto">
          {/* Problem Scene - Minimalist Jack Butcher Style */}
          <div className="relative aspect-square border-2 border-white group">
            {/* AI Coder Representation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 border-2 border-white rounded-full flex items-center justify-center">
                <Terminal className="w-16 h-16" strokeWidth={1} />
                <div className="absolute -top-16 text-sm font-mono text-white/60">AI ASSISTANT</div>
              </div>
            </div>

            {/* Error Lines */}
            <div className="absolute inset-x-8 top-1/4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-0.5 bg-white/80 transform origin-left animate-[grow_2s_ease-out_infinite]"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </div>

            {/* Token Counter */}
            <div className="absolute bottom-8 inset-x-8">
              <div className="h-1 bg-white/20">
                <div className="h-full bg-white w-[2%] animate-pulse" />
              </div>
              <div className="mt-2 font-mono text-xs text-white/60 tracking-wider">
                TOKENS REMAINING: 2%
              </div>
            </div>

            {/* Cost Counter */}
            <div className="absolute top-8 right-8 font-mono text-xs tracking-wider">
              <div className="animate-[count_4s_linear_infinite]">
                $0
              </div>
              <div className="animate-[count_4s_linear_infinite]">
                $50
              </div>
              <div className="animate-[count_4s_linear_infinite]">
                $100
              </div>
            </div>
          </div>

          {/* Solution Scene - Minimalist Jack Butcher Style */}
          <div className="relative aspect-square border-2 border-white group">
            {/* Expert Developer Representation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-32 h-32 border-2 border-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">
                  <div className="flex flex-col items-center">
                    <Terminal className="w-16 h-16" strokeWidth={1} />
                    <div className="absolute -top-16 text-sm font-mono text-white">BACKENDHELP</div>
                  </div>
                </div>
                {/* Success Indicators */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-12 bg-white/80 origin-bottom transform transition-transform duration-700"
                    style={{
                      left: '50%',
                      bottom: '100%',
                      transform: `rotate(${i * 45}deg)`,
                      transformOrigin: 'bottom',
                      opacity: 0,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Success Lines */}
            <div className="absolute inset-x-8 top-1/4 space-y-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-0.5 bg-white transform origin-left group-hover:scale-x-100 transition-transform duration-700"
                  style={{
                    transform: 'scaleX(0)',
                    transitionDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>

            {/* Value Proposition */}
            <div className="absolute bottom-8 inset-x-8 text-right">
              <div className="font-mono text-xs tracking-wider space-y-1">
                <div className="text-white/60">HUMAN EXPERTISE</div>
                <div className="text-white/60">PROVEN SOLUTIONS</div>
                <div className="text-white">PRODUCTION READY</div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Statement */}
        <div className="mt-32 text-center max-w-2xl mx-auto">
          <p className="text-2xl font-light tracking-wide leading-relaxed">
            <span className="line-through text-white/60">Endless AI Debugging</span>
            <br />
            <span className="text-white">Expert Backend Solutions</span>
          </p>
          <p className="mt-8 text-lg text-white/60">
            Stop wrestling with AI limitations. Let Backendhelp's human experts build your production-ready backend.
          </p>
          <div className="mt-12">
            <a
              href="#pricing"
              className="inline-flex items-center px-12 py-4 border-2 border-white bg-transparent text-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-wider uppercase group"
            >
              Get Started
              <Terminal className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}