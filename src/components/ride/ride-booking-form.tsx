
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, Clock, CreditCard, Car, ChevronDown } from 'lucide-react';

export function RideBookingForm() {
  const [expanded, setExpanded] = useState(false);
  const [selectedRide, setSelectedRide] = useState('standard');

  const rideOptions = [
    { 
      id: 'economy', 
      name: 'SolGo Economy', 
      price: '0.05 SOL', 
      eta: '8 min', 
      description: 'Affordable rides for everyday trips'
    },
    { 
      id: 'standard', 
      name: 'SolGo Standard', 
      price: '0.08 SOL', 
      eta: '5 min', 
      description: 'Our most popular option'
    },
    { 
      id: 'premium', 
      name: 'SolGo Premium', 
      price: '0.12 SOL', 
      eta: '3 min', 
      description: 'Luxury vehicles for special occasions'
    }
  ];

  return (
    <div className="bg-solgo-black border border-solgo-teal/20 rounded-lg p-6 shadow-lg w-full max-w-md">
      <h2 className="font-orbitron text-xl font-semibold text-white mb-6">Book a Ride</h2>
      
      <div className="space-y-4">
        {/* Pickup Location */}
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-solgo-teal">
            <MapPin size={18} />
          </div>
          <input
            type="text"
            placeholder="Pickup Location"
            className="w-full pl-10 pr-4 py-3 bg-solgo-dark border border-solgo-teal/30 rounded-md text-white placeholder-white/50 font-roboto focus:outline-none focus:border-solgo-teal"
          />
        </div>
        
        {/* Destination */}
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-solgo-teal">
            <Navigation size={18} />
          </div>
          <input
            type="text"
            placeholder="Destination"
            className="w-full pl-10 pr-4 py-3 bg-solgo-dark border border-solgo-teal/30 rounded-md text-white placeholder-white/50 font-roboto focus:outline-none focus:border-solgo-teal"
          />
        </div>
        
        {/* Schedule */}
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-solgo-teal">
            <Clock size={18} />
          </div>
          <select
            className="w-full pl-10 pr-4 py-3 bg-solgo-dark border border-solgo-teal/30 rounded-md text-white font-roboto focus:outline-none focus:border-solgo-teal appearance-none"
          >
            <option value="now">Ride now</option>
            <option value="schedule">Schedule for later</option>
          </select>
          <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50" />
        </div>
        
        {/* Ride Options */}
        <div className="mt-6 space-y-3">
          {rideOptions.map((option) => (
            <div 
              key={option.id}
              className={`flex items-center justify-between p-4 rounded-md cursor-pointer transition-all duration-200 ${
                selectedRide === option.id 
                  ? 'bg-solgo-teal/10 border border-solgo-teal'
                  : 'bg-solgo-dark border border-transparent hover:bg-solgo-dark/80'
              }`}
              onClick={() => setSelectedRide(option.id)}
            >
              <div className="flex items-center">
                <Car className={`${selectedRide === option.id ? 'text-solgo-teal' : 'text-white/70'}`} />
                <div className="ml-3">
                  <div className="font-orbitron font-medium text-white">{option.name}</div>
                  <div className="text-xs text-white/50 font-roboto">{option.description}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-orbitron font-medium text-white">{option.price}</div>
                <div className="text-xs text-white/50 font-roboto">ETA: {option.eta}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Payment Method */}
        <div className="mt-6">
          <div className="flex items-center justify-between p-4 bg-solgo-dark rounded-md">
            <div className="flex items-center">
              <CreditCard className="text-white/70" />
              <span className="ml-3 font-roboto text-white">Wallet</span>
            </div>
            <span className="text-xs bg-solgo-purple/20 text-solgo-purple px-2 py-1 rounded-full font-orbitron">
              Solana Pay
            </span>
          </div>
        </div>
        
        {/* Additional Options */}
        <div className="mt-4">
          <button 
            className="flex items-center text-white/70 hover:text-white text-sm font-roboto"
            onClick={() => setExpanded(!expanded)}
          >
            <ChevronDown 
              size={16} 
              className={`mr-1 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} 
            />
            {expanded ? 'Hide' : 'Show'} additional options
          </button>
          
          {expanded && (
            <div className="mt-3 space-y-3 pl-6 border-l border-solgo-teal/30">
              <label className="flex items-center font-roboto text-white/80">
                <input type="checkbox" className="mr-2" />
                Share ride for lower fare
              </label>
              <label className="flex items-center font-roboto text-white/80">
                <input type="checkbox" className="mr-2" />
                Pet friendly driver
              </label>
              <label className="flex items-center font-roboto text-white/80">
                <input type="checkbox" className="mr-2" />
                Extra luggage space
              </label>
            </div>
          )}
        </div>
        
        {/* Book Button */}
        <Button variant="glow" size="lg" className="w-full mt-6">
          Confirm Ride
        </Button>
        
        <p className="text-center text-xs text-white/50 font-roboto mt-4">
          By confirming, you agree to our Terms of Service and acknowledge our Privacy Policy
        </p>
      </div>
    </div>
  );
}
