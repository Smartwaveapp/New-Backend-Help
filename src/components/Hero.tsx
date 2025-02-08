import React from 'react';
import { ArrowRight, Puzzle } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-7xl font-bold tracking-tight headline-gradient sm:text-8xl max-w-4xl mx-auto leading-[1.1]">
            Let's do backend
            <br />
            <span className="text-black">right</span>
            <br />
            for you
          </h1>
          <p className="mt-8 text-xl leading-8 text-black/60 max-w-2xl mx-auto font-light tracking-tight">
            Stuck on Your Backend Build? We Pick Up Where AI Coding Platforms Leave Off — From Frustration to Full Functionality. 
          </p>
          <div className="mt-12 flex items-center justify-center gap-x-6">
            <a href="#services"
              className="minimal-button group"
            >
              View Capabilities
              <ArrowRight className="ml-2 w-4 h-4 inline transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </a>
            <a
              href="https://cal.com/backendhelp/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="minimal-button group"
            >
              Book a Call
              <ArrowRight className="ml-2 w-4 h-4 inline transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="mt-24 flex justify-center items-center">
          <div className="relative w-[40rem] aspect-[2/1] border border-black/10">
            {/* Main Container */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              {/* Left Puzzle Piece */}
              <div className="relative group transform transition-transform duration-700 hover:translate-x-6">
                <div className="w-48 h-48 border-2 border-black">
                  {/* Puzzle Connector Right */}
                  <div className="absolute -right-8 top-1/2 w-16 h-16 -mt-8 bg-white border-2 border-black rounded-full" />
                  
                  {/* Content */}
                  <div className="absolute inset-4 flex flex-col items-center justify-center">
                    <Puzzle className="w-16 h-16 mb-4" strokeWidth={1} />
                    <span className="text-xs uppercase tracking-widest">Backend</span>
                  </div>

                  {/* Code Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="text-[8px] font-mono ml-2 mt-2">
                        const api = createAPI()<br />
                        api.configure()
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Puzzle Piece */}
              <div className="relative group transform transition-transform duration-700 hover:-translate-x-6 ml-16">
                <div className="w-48 h-48 border-2 border-black">
                  {/* Puzzle Connector Left */}
                  <div className="absolute -left-8 top-1/2 w-16 h-16 -mt-8 bg-white border-2 border-black rounded-full" />
                  
                  {/* Content */}
                  <div className="absolute inset-4 flex flex-col items-center justify-center">
                    <Puzzle className="w-16 h-16 mb-4" strokeWidth={1} />
                    <span className="text-xs uppercase tracking-widest">Frontend</span>
                  </div>

                  {/* Code Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="text-[8px] font-mono ml-2 mt-2">
                        service.connect()<br />
                        service.deploy()
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connection Animation */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full animate-ping opacity-20" />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm uppercase tracking-wider text-black/60 font-medium">
            Effortlessly Mix and Match Backend Services to Complete Your AI Projects
          </p>
        </div>
      </div>
    </div>
  );
}