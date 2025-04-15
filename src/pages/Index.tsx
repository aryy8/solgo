
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { Button } from "@/components/ui/button";
import { MapPlaceholder } from "@/components/ui/map-placeholder";
import { Car, Shield, Network, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-solgo-black text-white">
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <Features />
      
      {/* How It Works Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background grid */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, rgba(0,255,194,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,255,194,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        />
        
        {/* Glowing orb accents */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-solgo-teal/10 filter blur-[100px]" />
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-solgo-purple/5 filter blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-6">
              How <span className="text-solgo-teal">SolGo</span> Works
            </h2>
            <p className="font-roboto text-white/70 text-lg">
              SolGo connects riders and drivers directly through blockchain technology, 
              eliminating middlemen and reducing costs while maintaining security and transparency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-solgo-teal/10 flex items-center justify-center mb-6">
                <Car className="h-8 w-8 text-solgo-teal" />
              </div>
              <h3 className="font-orbitron text-xl font-semibold text-white mb-3">Request a Ride</h3>
              <p className="font-roboto text-white/70">
                Enter your destination, choose your ride type, and confirm. 
                Your request is broadcast to the Solana blockchain.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-solgo-teal/10 flex items-center justify-center mb-6">
                <Network className="h-8 w-8 text-solgo-teal" />
              </div>
              <h3 className="font-orbitron text-xl font-semibold text-white mb-3">Smart Matching</h3>
              <p className="font-roboto text-white/70">
                Our decentralized algorithm matches you with nearby drivers
                based on location, ratings, and vehicle type.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-solgo-teal/10 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-solgo-teal" />
              </div>
              <h3 className="font-orbitron text-xl font-semibold text-white mb-3">Secure Payment</h3>
              <p className="font-roboto text-white/70">
                Pay securely with Solana Pay. Funds are held in escrow and 
                released to drivers upon trip completion.
              </p>
            </div>
          </div>
          
          <div className="bg-solgo-dark border border-solgo-teal/20 rounded-lg p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-orbitron text-2xl font-semibold text-white mb-4">
                  Explore SolGo's Network
                </h3>
                <p className="font-roboto text-white/70 mb-6">
                  SolGo's decentralized network spans multiple cities, connecting thousands of 
                  riders and drivers through secure blockchain technology. Discover popular routes, 
                  active drivers, and real-time platform activity.
                </p>
                <Link to="/community">
                  <Button variant="glow" className="group">
                    Join Our Network
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                  </Button>
                </Link>
              </div>
              
              <div className="h-[400px]">
                <MapPlaceholder />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-solgo-dark to-solgo-black relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-solgo-teal/50 to-transparent" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute w-full" style={{ top: '-80%', opacity: 0.1 }}>
            <circle cx="50%" cy="50%" r="40%" stroke="url(#gradient-circle)" strokeWidth="0.5" fill="none" />
            <circle cx="50%" cy="50%" r="35%" stroke="url(#gradient-circle)" strokeWidth="0.5" fill="none" />
            <circle cx="50%" cy="50%" r="30%" stroke="url(#gradient-circle)" strokeWidth="0.5" fill="none" />
            <defs>
              <linearGradient id="gradient-circle" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00FFC2" />
                <stop offset="100%" stopColor="#9D00FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience the <span className="text-solgo-teal">Future</span> of Ride-Sharing?
            </h2>
            <p className="font-roboto text-white/70 text-lg mb-8">
              Join thousands of riders and drivers on SolGo's decentralized platform. 
              Enjoy lower fees, transparent transactions, and community governance.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/ride">
                <Button variant="glow" size="xl">
                  Book a Ride
                </Button>
              </Link>
              <Link to="/drive">
                <Button variant="outline" size="xl" className="text-white border-white/30 hover:bg-white/5 hover:border-white/50">
                  Become a Driver
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
