
import { useEffect, useState } from 'react';
import { MapPin, ChevronDown, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MapPlaceholder() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] bg-solgo-dark rounded-lg overflow-hidden">
      {/* Map background with grid pattern */}
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(0,255,194,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,255,194,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-solgo-teal/5 via-transparent to-transparent" />

      {/* Network nodes visualization */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 rounded-full bg-solgo-teal shadow-[0_0_8px_rgba(0,255,194,0.7)]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              animation: `pulse ${Math.random() * 3 + 2}s ease-in-out infinite`
            }}
          />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-solgo-purple shadow-[0_0_8px_rgba(157,0,255,0.7)]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              animation: `pulse ${Math.random() * 4 + 2}s ease-in-out infinite`
            }}
          />
        ))}
      </div>

      {/* Map center pin */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-solgo-teal animate-bounce">
        <MapPin size={32} strokeWidth={2.5} />
      </div>

      {/* Connection lines animation */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 }}>
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00FFC2" />
            <stop offset="100%" stopColor="#9D00FF" />
          </linearGradient>
        </defs>
        {Array.from({ length: 15 }).map((_, i) => {
          const x1 = Math.random() * 100;
          const y1 = Math.random() * 100;
          const x2 = Math.random() * 100;
          const y2 = Math.random() * 100;
          
          return (
            <line 
              key={i}
              x1={`${x1}%`} 
              y1={`${y1}%`} 
              x2={`${x2}%`} 
              y2={`${y2}%`} 
              stroke="url(#line-gradient)"
              strokeWidth="0.5"
              strokeDasharray="5,5"
              style={{
                animation: `dash ${Math.random() * 10 + 10}s linear infinite`
              }}
            />
          );
        })}
      </svg>

      {/* City markers */}
      <div className="absolute top-[20%] left-[25%] transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-3 h-3 rounded-full bg-solgo-teal shadow-[0_0_10px_rgba(0,255,194,0.7)]" />
        <div className="text-xs font-orbitron text-white mt-1">San Francisco</div>
      </div>
      <div className="absolute top-[35%] left-[65%] transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-3 h-3 rounded-full bg-solgo-purple shadow-[0_0_10px_rgba(157,0,255,0.7)]" />
        <div className="text-xs font-orbitron text-white mt-1">New York</div>
      </div>
      <div className="absolute top-[65%] left-[45%] transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-3 h-3 rounded-full bg-solgo-teal shadow-[0_0_10px_rgba(0,255,194,0.7)]" />
        <div className="text-xs font-orbitron text-white mt-1">Miami</div>
      </div>

      {/* Message overlay */}
      {showMessage && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-solgo-black/80 border border-solgo-teal/30 rounded-lg p-3 backdrop-blur-sm max-w-md animate-fade-in">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-solgo-teal shrink-0 mt-0.5" size={20} />
            <div>
              <p className="text-white text-sm font-roboto">
                This is a placeholder map. In a real implementation, this would be an interactive map powered by Solana blockchain for decentralized ride-sharing.
              </p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-xs text-solgo-teal mt-2 p-0 h-auto flex items-center"
                onClick={() => setShowMessage(false)}
              >
                Dismiss <ChevronDown size={14} className="ml-1" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Map attribution */}
      <div className="absolute bottom-2 right-2 text-xs text-white/40 font-roboto">
        SolGo Blockchain Map
      </div>
    </div>
  );
}
