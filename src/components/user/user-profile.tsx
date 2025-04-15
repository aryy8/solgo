
import { useState } from 'react';
import { User, Star, Clock, Car, Settings, Shield, Trophy, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function UserProfile() {
  const [activeTab, setActiveTab] = useState('rides');
  
  const tabs = [
    { id: 'rides', label: 'Ride History' },
    { id: 'rewards', label: 'Rewards' },
    { id: 'settings', label: 'Settings' },
  ];
  
  const rideHistory = [
    {
      id: 'R-7829',
      date: 'Apr 14, 2025',
      from: 'Castro District',
      to: 'Fisherman\'s Wharf',
      driver: 'Alex M.',
      rating: 5,
      price: '0.06 SOL'
    },
    {
      id: 'R-7801',
      date: 'Apr 10, 2025',
      from: 'SFO Airport',
      to: 'Mission District',
      driver: 'Sarah K.',
      rating: 4,
      price: '0.09 SOL'
    },
    {
      id: 'R-7756',
      date: 'Apr 7, 2025',
      from: 'Golden Gate Park',
      to: 'Union Square',
      driver: 'Michael R.',
      rating: 5,
      price: '0.05 SOL'
    }
  ];
  
  const rewards = [
    {
      title: 'Frequent Rider',
      description: 'Complete 10 rides in a week',
      progress: '7/10',
      reward: '0.02 SOL',
      icon: <Car size={20} className="text-solgo-teal" />
    },
    {
      title: 'Referral Bonus',
      description: 'Invite 5 friends to join SolGo',
      progress: '3/5',
      reward: '0.05 SOL',
      icon: <User size={20} className="text-solgo-teal" />
    },
    {
      title: 'Community Voter',
      description: 'Vote on 3 governance proposals',
      progress: '1/3',
      reward: 'Governance Token',
      icon: <Trophy size={20} className="text-solgo-teal" />
    }
  ];
  
  const settings = [
    {
      title: 'Personal Information',
      icon: <User size={20} className="text-solgo-teal" />
    },
    {
      title: 'Payment Methods',
      icon: <Shield size={20} className="text-solgo-teal" />
    },
    {
      title: 'Preferences',
      icon: <Settings size={20} className="text-solgo-teal" />
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Profile sidebar */}
      <div className="lg:col-span-1">
        <div className="bg-solgo-black border border-solgo-teal/20 rounded-lg p-6">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-solgo-purple/10 border-2 border-solgo-purple flex items-center justify-center">
              <User size={40} className="text-solgo-purple" />
            </div>
            <h2 className="font-orbitron text-xl font-bold text-white mt-4">John Doe</h2>
            <p className="text-white/70 font-roboto">Member since March 2025</p>
            
            <div className="flex items-center mt-2 mb-4">
              <Star size={16} className="text-solgo-teal" />
              <Star size={16} className="text-solgo-teal" />
              <Star size={16} className="text-solgo-teal" />
              <Star size={16} className="text-solgo-teal" />
              <Star size={16} className="text-solgo-teal" />
              <span className="ml-2 text-white font-semibold">5.0</span>
            </div>
            
            <Button variant="outline" size="sm" className="text-solgo-teal border-solgo-teal">
              Edit Profile
            </Button>
          </div>
          
          <div className="mt-8 space-y-2">
            <div className="flex justify-between items-center p-3 rounded-md bg-solgo-dark border border-solgo-teal/20">
              <div className="flex items-center">
                <Shield className="text-solgo-teal mr-3" size={18} />
                <span className="font-roboto text-white">Wallet Connected</span>
              </div>
              <span className="text-xs bg-solgo-teal/20 text-solgo-teal px-2 py-1 rounded-full font-orbitron">
                Verified
              </span>
            </div>
            
            <div className="flex justify-between items-center p-3 rounded-md hover:bg-solgo-dark/50 transition-colors cursor-pointer">
              <div className="flex items-center">
                <Clock className="text-solgo-teal mr-3" size={18} />
                <span className="font-roboto text-white">23 Total Rides</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-3 rounded-md hover:bg-solgo-dark/50 transition-colors cursor-pointer">
              <div className="flex items-center">
                <Trophy className="text-solgo-teal mr-3" size={18} />
                <span className="font-roboto text-white">SolGo Token Balance</span>
              </div>
              <span className="font-orbitron text-white">1.25 SGT</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="lg:col-span-3">
        <div className="bg-solgo-black border border-solgo-teal/20 rounded-lg p-6">
          {/* Tabs */}
          <div className="flex border-b border-solgo-teal/20 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`py-3 px-6 font-orbitron text-sm font-medium transition-colors ${
                  activeTab === tab.id 
                    ? 'text-solgo-teal border-b-2 border-solgo-teal' 
                    : 'text-white/70 hover:text-white'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* Tab content */}
          <div>
            {/* Ride History Tab */}
            {activeTab === 'rides' && (
              <div>
                <h3 className="font-orbitron text-xl font-semibold text-white mb-4">Recent Rides</h3>
                
                {rideHistory.length > 0 ? (
                  <div className="space-y-4">
                    {rideHistory.map((ride) => (
                      <div 
                        key={ride.id} 
                        className="border border-solgo-teal/20 bg-solgo-dark rounded-lg p-4 hover:border-solgo-teal/40 transition-all"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <Car size={16} className="text-solgo-teal" />
                              <span className="font-orbitron font-medium text-white">{ride.id}</span>
                              <span className="text-xs text-white/50 font-roboto">{ride.date}</span>
                            </div>
                            <div className="mt-2 space-y-1">
                              <div className="text-white/80 font-roboto">
                                <span className="text-white/50">From:</span> {ride.from}
                              </div>
                              <div className="text-white/80 font-roboto">
                                <span className="text-white/50">To:</span> {ride.to}
                              </div>
                              <div className="text-white/80 font-roboto">
                                <span className="text-white/50">Driver:</span> {ride.driver}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-orbitron font-medium text-solgo-teal">{ride.price}</div>
                            <div className="flex mt-1 justify-end">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  size={12} 
                                  className={i < ride.rating ? "text-solgo-teal" : "text-solgo-teal/30"} 
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="mt-2 text-solgo-teal hover:text-solgo-teal hover:bg-solgo-teal/10"
                        >
                          View Receipt
                        </Button>
                      </div>
                    ))}
                    
                    <div className="text-center">
                      <Button variant="ghost" className="text-solgo-teal hover:text-solgo-teal hover:bg-solgo-teal/10">
                        View All Rides
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-white/50 font-roboto">
                    No ride history yet
                  </div>
                )}
              </div>
            )}
            
            {/* Rewards Tab */}
            {activeTab === 'rewards' && (
              <div>
                <h3 className="font-orbitron text-xl font-semibold text-white mb-4">Your Rewards</h3>
                
                <div className="space-y-4">
                  {rewards.map((reward, idx) => (
                    <div 
                      key={idx} 
                      className="border border-solgo-teal/20 bg-solgo-dark rounded-lg p-4 hover:border-solgo-teal/40 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-1">{reward.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-orbitron font-medium text-white">{reward.title}</h4>
                            <span className="text-solgo-teal font-orbitron">{reward.reward}</span>
                          </div>
                          <p className="text-white/70 font-roboto text-sm mt-1">{reward.description}</p>
                          
                          <div className="mt-3">
                            <div className="h-1.5 w-full bg-solgo-dark rounded-full overflow-hidden border border-solgo-teal/20">
                              <div 
                                className="h-full bg-solgo-teal" 
                                style={{ 
                                  width: `${parseInt(reward.progress.split('/')[0]) / parseInt(reward.progress.split('/')[1]) * 100}%` 
                                }}
                              />
                            </div>
                            <div className="text-xs text-white/50 font-roboto text-right mt-1">
                              {reward.progress} completed
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 border border-solgo-purple/30 bg-solgo-purple/5 rounded-lg">
                  <div className="flex items-center">
                    <Trophy size={24} className="text-solgo-purple mr-3" />
                    <div>
                      <h4 className="font-orbitron font-medium text-white">Join Governance</h4>
                      <p className="text-white/70 font-roboto text-sm">
                        Earn special rewards by participating in SolGo's community governance
                      </p>
                    </div>
                  </div>
                  <Button variant="purple" size="sm" className="w-full mt-3">
                    Explore Governance
                  </Button>
                </div>
              </div>
            )}
            
            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div>
                <h3 className="font-orbitron text-xl font-semibold text-white mb-4">Account Settings</h3>
                
                <div className="space-y-2">
                  {settings.map((setting, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center justify-between p-4 border border-solgo-teal/20 rounded-lg hover:bg-solgo-dark/80 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        {setting.icon}
                        <span className="font-roboto text-white">{setting.title}</span>
                      </div>
                      <ChevronRight size={18} className="text-white/50" />
                    </div>
                  ))}
                  
                  <div className="flex items-center justify-between p-4 border border-solgo-teal/20 rounded-lg hover:bg-solgo-dark/80 transition-all cursor-pointer mt-6">
                    <div className="flex items-center gap-3">
                      <Shield size={20} className="text-solgo-teal" />
                      <span className="font-roboto text-white">Privacy & Security</span>
                    </div>
                    <ChevronRight size={18} className="text-white/50" />
                  </div>
                </div>
                
                <div className="mt-10 pt-6 border-t border-solgo-teal/20 flex justify-end">
                  <Button variant="outline" size="sm" className="text-white/70 border-white/20 hover:border-white/50">
                    Log Out
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
