import React from 'react';
import { Database, Server, Cloud, Lock, Code, Blocks } from 'lucide-react';

export default function TechShowcase() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold tracking-tight text-black">
            A Decade of Backend Excellence
          </h2>
          <p className="mt-4 text-lg text-black/60">
            Powering modern applications with battle-tested technologies
          </p>
        </div>

        {/* Tech Grid - Jack Butcher Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-24">
          {[
            { icon: Database, label: 'Databases', subtext: 'SQL & NoSQL' },
            { icon: Server, label: 'APIs', subtext: 'REST & GraphQL' },
            { icon: Cloud, label: 'Cloud', subtext: 'AWS & GCP' },
            { icon: Lock, label: 'Security', subtext: 'Auth & Encryption' },
            { icon: Code, label: 'Languages', subtext: 'Node & Python' },
            { icon: Blocks, label: 'Web3', subtext: 'Smart Contracts' }
          ].map(({ icon: Icon, label, subtext }) => (
            <div key={label} className="group border-2 border-black aspect-square p-6 flex flex-col items-center justify-center transition-all hover:bg-black hover:text-white">
              <Icon className="w-12 h-12 mb-4" strokeWidth={1} />
              <div className="text-center">
                <div className="font-mono text-sm tracking-wider">{label}</div>
                <div className="text-xs opacity-60 mt-1">{subtext}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Counter */}
        <div className="flex justify-center mb-24">
          <div className="border-2 border-black p-12 relative group hover:bg-black hover:text-white transition-all">
            <div className="text-center">
              <div className="text-6xl font-bold tracking-tighter mb-2">10+</div>
              <div className="text-sm uppercase tracking-widest opacity-60">Years Experience</div>
            </div>
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-black -translate-x-2 -translate-y-2 group-hover:border-white" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-black translate-x-2 -translate-y-2 group-hover:border-white" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-black -translate-x-2 translate-y-2 group-hover:border-white" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-black translate-x-2 translate-y-2 group-hover:border-white" />
          </div>
        </div>

        {/* Featured Project */}
        <div className="max-w-3xl mx-auto">
          <div className="border-2 border-black p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="text-sm uppercase tracking-widest opacity-60 mb-2">Featured Project</div>
              <h3 className="text-2xl font-bold tracking-tight">SmartWaves DApp</h3>
            </div>
            
            {/* Project Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Project Visual */}
              <div className="aspect-square border-2 border-black p-8 flex items-center justify-center group hover:bg-black">
                <div className="relative">
                  <Blocks className="w-24 h-24 group-hover:text-white" strokeWidth={1} />
                  {/* Animated Connection Lines */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-12 h-0.5 bg-black group-hover:bg-white origin-center"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${i * 45}deg) translateX(2rem)`,
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Project Stats */}
              <div className="space-y-6">
                <a 
                  href="https://v0-smartwaves-szbepol3249.vercel.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="border-2 border-black p-6 hover:bg-black hover:text-white transition-all">
                    <div className="text-sm uppercase tracking-widest mb-2 opacity-60">Live Demo</div>
                    <div className="font-mono text-sm">smartwaves.app →</div>
                  </div>
                </a>
                
                <div className="border-2 border-black p-6">
                  <div className="text-sm uppercase tracking-widest mb-4 opacity-60">Technologies</div>
                  <div className="flex flex-wrap gap-2">
                    {['Solidity', 'Web3.js', 'React', 'Node.js'].map((tech) => (
                      <span key={tech} className="px-3 py-1 border border-black text-xs uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}