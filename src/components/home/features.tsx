
import { Wallet, Shield, Users, LineChart } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Wallet className="h-12 w-12 text-solgo-teal" />,
      title: 'Transparent Payments',
      description: 'Pay for rides using Solana blockchain for instant, low-fee transactions with complete transparency.'
    },
    {
      icon: <Shield className="h-12 w-12 text-solgo-teal" />,
      title: 'User Verification',
      description: 'Decentralized identity solutions ensure safety and trust between drivers and riders.'
    },
    {
      icon: <Users className="h-12 w-12 text-solgo-teal" />,
      title: 'Community Governance',
      description: 'SolGo is governed by its users through a DAO structure, ensuring fair policies and practices.'
    },
    {
      icon: <LineChart className="h-12 w-12 text-solgo-teal" />,
      title: 'Incentive Mechanisms',
      description: 'Earn rewards through our token system for participating in the SolGo ecosystem.'
    }
  ];

  return (
    <section className="py-24 bg-solgo-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-6">
            Built on <span className="text-solgo-teal">Blockchain</span>, Designed for <span className="text-solgo-purple">People</span>
          </h2>
          <p className="font-roboto text-white/70 text-lg">
            SolGo leverages Solana's high-speed, low-cost blockchain to create a decentralized
            ride-sharing platform that benefits both drivers and riders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-solgo-black border border-solgo-teal/20 rounded-lg p-6 hover:border-solgo-teal/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,194,0.1)]"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="font-orbitron text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="font-roboto text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
