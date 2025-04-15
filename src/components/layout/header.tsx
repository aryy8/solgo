
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Car, Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-solgo-black/90 backdrop-blur-lg border-b border-solgo-teal/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-solgo-teal rounded-full p-1 shadow-[0_0_10px_rgba(0,255,194,0.7)]">
              <Car className="h-6 w-6 text-solgo-black" />
            </div>
            <span className="text-xl font-orbitron font-bold text-white tracking-wider">
              Sol<span className="text-solgo-teal">Go</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/ride" className="font-roboto text-white/80 hover:text-solgo-teal transition-colors">
            Book a Ride
          </Link>
          <Link to="/community" className="font-roboto text-white/80 hover:text-solgo-teal transition-colors">
            Community
          </Link>
          <Link to="/about" className="font-roboto text-white/80 hover:text-solgo-teal transition-colors">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" asChild className="text-solgo-teal border-solgo-teal hover:text-solgo-teal">
            <Link to="/login">Log in</Link>
          </Button>
          <Button variant="glow" asChild>
            <Link to="/driver-login">Become a Driver</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white hover:text-solgo-teal"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-solgo-dark border-b border-solgo-teal/20 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/ride" 
              className="font-roboto py-3 px-4 text-white/80 hover:bg-solgo-teal/10 hover:text-solgo-teal rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Ride
            </Link>
            <Link 
              to="/community" 
              className="font-roboto py-3 px-4 text-white/80 hover:bg-solgo-teal/10 hover:text-solgo-teal rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </Link>
            <Link 
              to="/about" 
              className="font-roboto py-3 px-4 text-white/80 hover:bg-solgo-teal/10 hover:text-solgo-teal rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex flex-col gap-2 mt-2">
              <Button variant="outline" asChild className="text-solgo-teal border-solgo-teal hover:text-solgo-teal w-full">
                <Link to="/login">Log in</Link>
              </Button>
              <Button variant="glow" asChild className="w-full">
                <Link to="/driver-login">Become a Driver</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
