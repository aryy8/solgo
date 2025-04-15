
import { Car, Clock, Star, DollarSign, Navigation, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function DriverDashboard() {
  const upcomingRides = [
    {
      id: 1,
      pickup: '555 Market St',
      dropoff: 'SF International Airport',
      time: '2:30 PM Today',
      fare: '0.08 SOL',
      distance: '14 miles'
    },
    {
      id: 2,
      pickup: 'Golden Gate Park',
      dropoff: 'Fisherman\'s Wharf',
      time: '9:15 AM Tomorrow',
      fare: '0.05 SOL',
      distance: '4.2 miles'
    }
  ];

  const weeklyStats = [
    { label: 'Rides', value: '24', icon: <Car size={20} className="text-solgo-teal" /> },
    { label: 'Hours', value: '18.5', icon: <Clock size={20} className="text-solgo-teal" /> },
    { label: 'Rating', value: '4.92', icon: <Star size={20} className="text-solgo-teal" /> },
    { label: 'Earnings', value: '1.87 SOL', icon: <DollarSign size={20} className="text-solgo-teal" /> }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main content area */}
      <div className="lg:col-span-2 space-y-8">
        {/* Greeting section */}
        <div className="bg-solgo-black border border-solgo-teal/20 rounded-lg p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="font-orbitron text-2xl font-bold text-white">Welcome back, Driver</h2>
              <p className="text-white/70 font-roboto mt-1">Thursday, April 15, 2025</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button variant="glow">Go Online</Button>
            </div>
          </div>
        </div>
        
        {/* Stats cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {weeklyStats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-solgo-black border border-solgo-teal/20 rounded-lg p-4 flex flex-col items-center"
            >
              <div className="mb-2">{stat.icon}</div>
              <div className="font-orbitron text-xl font-bold text-white">{stat.value}</div>
              <div className="text-white/70 font-roboto text-sm">{stat.label} this week</div>
            </div>
          ))}
        </div>
        
        {/* Upcoming rides */}
        <div className="bg-solgo-black border border-solgo-teal/20 rounded-lg p-6">
          <h3 className="font-orbitron text-xl font-semibold text-white mb-4">Upcoming Rides</h3>
          
          {upcomingRides.length > 0 ? (
            <div className="space-y-4">
              {upcomingRides.map((ride) => (
                <div 
                  key={ride.id} 
                  className="border border-solgo-teal/20 bg-solgo-dark rounded-lg p-4 hover:border-solgo-teal/40 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Navigation size={16} className="text-solgo-teal" />
                        <span className="font-orbitron font-medium text-white">Ride #{ride.id}</span>
                      </div>
                      <div className="mt-2 pl-6 space-y-1">
                        <div className="text-white/80 font-roboto">
                          <span className="text-white/50">From:</span> {ride.pickup}
                        </div>
                        <div className="text-white/80 font-roboto">
                          <span className="text-white/50">To:</span> {ride.dropoff}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-orbitron font-medium text-solgo-teal">{ride.fare}</div>
                      <div className="text-sm text-white/60 font-roboto">{ride.distance}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-solgo-teal/10">
                    <div className="flex items-center">
                      <Clock size={14} className="text-white/70" />
                      <span className="ml-2 text-sm text-white/70 font-roboto">{ride.time}</span>
                    </div>
                    <Button variant="outline" size="sm" className="text-solgo-teal border-solgo-teal hover:bg-solgo-teal/10">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-white/50 font-roboto">
              No upcoming rides scheduled
            </div>
          )}
        </div>
      </div>
      
      {/* Sidebar */}
      <div className="space-y-8">
        {/* Driver profile summary */}
        <div className="bg-solgo-black border border-solgo-teal/20 rounded-lg p-6">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-solgo-teal/10 border-2 border-solgo-teal flex items-center justify-center">
              <Car size={32} className="text-solgo-teal" />
            </div>
            <h3 className="font-orbitron font-semibold text-white mt-4">John's Tesla Model 3</h3>
            <p className="text-white/70 font-roboto">GHX-2389</p>
            <div className="flex items-center mt-2">
              <Star size={16} className="text-solgo-teal" />
              <Star size={16} className="text-solgo-teal" />
              <Star size={16} className="text-solgo-teal" />
              <Star size={16} className="text-solgo-teal" />
              <Star size={16} className="text-solgo-teal/50" />
              <span className="ml-2 text-white font-semibold">4.8</span>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-solgo-teal/20">
            <h4 className="font-orbitron text-sm text-white/70 uppercase mb-3">Quick Actions</h4>
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Clock className="mr-2 h-4 w-4" /> Set Availability
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Navigation className="mr-2 h-4 w-4" /> Set Preferred Areas
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" /> View Schedule
              </Button>
            </div>
          </div>
        </div>
        
        {/* Earnings summary */}
        <div className="bg-solgo-black border border-solgo-teal/20 rounded-lg p-6">
          <h3 className="font-orbitron text-lg font-semibold text-white mb-4">Earnings Summary</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-white/70 font-roboto">Today</span>
              <span className="font-orbitron text-white">0.24 SOL</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70 font-roboto">This Week</span>
              <span className="font-orbitron text-white">1.87 SOL</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70 font-roboto">This Month</span>
              <span className="font-orbitron text-white">6.42 SOL</span>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-solgo-teal/20">
            <Button variant="purple" size="sm" className="w-full">
              Withdraw to Wallet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
