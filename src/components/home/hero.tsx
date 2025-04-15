
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-[95vh] flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-solgo-black to-solgo-dark" />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-30" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(0,255,194,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,255,194,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Glowing orb accents */}
      <div className="absolute top-1/4 left-1/6 w-64 h-64 rounded-full bg-solgo-teal/5 filter blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/6 w-80 h-80 rounded-full bg-solgo-purple/5 filter blur-[100px]" />

      {/* Hidden network paths */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
        <path 
          d="M0,100 Q150,50 300,200 T600,300" 
          stroke="#00FFC2" 
          fill="none" 
          strokeWidth="0.5"
          strokeDasharray="5,5"
          style={{ animation: 'dash 30s linear infinite' }}
        />
        <path 
          d="M100,400 Q250,150 400,250 T700,150" 
          stroke="#9D00FF" 
          fill="none" 
          strokeWidth="0.5"
          strokeDasharray="5,5"
          style={{ animation: 'dash 25s linear infinite reverse' }}
        />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 mb-6 bg-solgo-dark/80 backdrop-blur-sm border border-solgo-teal/20 rounded-full">
              <span className="text-sm font-orbitron text-solgo-teal">Decentralized Ride-Sharing</span>
            </div>
            
            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="text-solgo-teal">On Block</span>, <br />
              <span className="text-solgo-purple">On the Go</span>.
            </h1>
            
            <p className="font-roboto text-lg text-white/80 mb-8 max-w-lg">
              Experience the future of transportation with SolGo, a decentralized 
              ride-sharing platform built on Solana blockchain. Transparent, secure, 
              and community governed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/ride">
                <Button 
                  variant="glow" 
                  size="xl" 
                  className="group"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Book a Ride
                  <ArrowRight 
                    size={18} 
                    className={`ml-2 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
                  />
                </Button>
              </Link>
              <Link to="/drive">
                <Button variant="outline" size="xl" className="text-white border-white/30 hover:bg-white/5 hover:border-white/50">
                  Become a Driver
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 flex items-center text-white/60 text-sm">
              <Wallet size={16} className="mr-2" />
              <span>Built on Solana blockchain for speed and security</span>
            </div>
          </div>
          
          {/* Hero visualization */}
          <div className="relative">
            {/* Main circle */}
            <div className="w-full aspect-square relative">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-solgo-teal/30 animate-[spin_120s_linear_infinite]"></div>
              
              {/* Middle ring */}
              <div className="absolute inset-[12%] rounded-full border border-solgo-purple/30 animate-[spin_90s_linear_infinite_reverse]"></div>
              
              {/* Inner ring */}
              <div className="absolute inset-[25%] rounded-full border border-solgo-teal/20 animate-[spin_60s_linear_infinite]"></div>
              
              {/* Center */}
              <div className="absolute inset-[40%] rounded-full bg-solgo-teal/5 backdrop-blur-md border border-solgo-teal/30 flex items-center justify-center">
                <div className="font-orbitron text-solgo-teal text-xl font-semibold">SolGo</div>
              </div>
              
              {/* Orbiting elements */}
              {[...Array(8)].map((_, i) => {
                const angle = (i * 45) * Math.PI / 180;
                const radius = 42; // % of container
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                
                return (
                  <div 
                    key={i}
                    className="absolute w-4 h-4 bg-solgo-dark border border-solgo-teal/40 rounded-full flex items-center justify-center"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                      animationDelay: `${i * 0.2}s`
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-solgo-teal shadow-[0_0_8px_rgba(0,255,194,0.7)]"></div>
                  </div>
                );
              })}
              
              {/* Outer nodes */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30) * Math.PI / 180;
                const radius = 80; // % of container
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                
                return (
                  <div 
                    key={i}
                    className="absolute w-3 h-3 bg-solgo-dark border border-solgo-purple/40 rounded-full flex items-center justify-center"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                      animationDelay: `${i * 0.15}s`
                    }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-solgo-purple shadow-[0_0_8px_rgba(157,0,255,0.7)]"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
