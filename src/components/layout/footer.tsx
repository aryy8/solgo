
import { Link } from 'react-router-dom';
import { Car, Github, Twitter, Linkedin, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-solgo-black border-t border-solgo-teal/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-solgo-teal rounded-full p-1 shadow-[0_0_10px_rgba(0,255,194,0.7)]">
                <Car className="h-6 w-6 text-solgo-black" />
              </div>
              <span className="text-xl font-orbitron font-bold text-white tracking-wider">
                Sol<span className="text-solgo-teal">Go</span>
              </span>
            </Link>
            <p className="text-white/70 font-roboto mt-2">
              Decentralized ride-sharing platform built on Solana blockchain.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-white/70 hover:text-solgo-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-solgo-teal transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-solgo-teal transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-solgo-teal transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-orbitron text-white text-lg mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ride" className="text-white/70 font-roboto hover:text-solgo-teal transition-colors">
                  Book a Ride
                </Link>
              </li>
              <li>
                <Link to="/drive" className="text-white/70 font-roboto hover:text-solgo-teal transition-colors">
                  Become a Driver
                </Link>
              </li>
              <li>
                <Link to="/cities" className="text-white/70 font-roboto hover:text-solgo-teal transition-colors">
                  Cities
                </Link>
              </li>
              <li>
                <Link to="/fare-estimator" className="text-white/70 font-roboto hover:text-solgo-teal transition-colors">
                  Fare Estimator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron text-white text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/70 font-roboto hover:text-solgo-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-white/70 font-roboto hover:text-solgo-teal transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/70 font-roboto hover:text-solgo-teal transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-white/70 font-roboto hover:text-solgo-teal transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron text-white text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-white/70 font-roboto hover:text-solgo-teal transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/70 font-roboto hover:text-solgo-teal transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-white/70 font-roboto hover:text-solgo-teal transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 font-roboto text-sm">
            &copy; {new Date().getFullYear()} SolGo. All rights reserved.
          </p>
          <p className="text-white/50 font-roboto text-sm mt-2 md:mt-0">
            Built on <span className="text-solgo-teal">Solana</span> blockchain
          </p>
        </div>
      </div>
    </footer>
  );
}
