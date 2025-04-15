
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Car, Wallet } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function DriverLoginForm() {
  const [isConnecting, setIsConnecting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleConnect = async () => {
    setIsConnecting(true);
    // Here you would implement the actual Solana wallet connection
    // For now, we'll just show a toast
    toast({
      title: "Driver Wallet Connection Required",
      description: "Please implement Solana wallet connection integration",
    });
    setIsConnecting(false);
  };

  return (
    <div className="space-y-6">
      <div className="p-6 border border-solgo-teal/20 rounded-lg bg-solgo-black/50 backdrop-blur">
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-solgo-teal/10">
          <Car className="w-8 h-8 text-solgo-teal" />
        </div>
        <h2 className="text-xl font-orbitron text-center mb-4">Become a Driver</h2>
        <p className="text-sm text-white/70 text-center mb-6">
          Connect your wallet to start earning with SolGo
        </p>
        
        <Button 
          variant="glow" 
          size="xl"
          className="w-full"
          onClick={handleConnect}
          disabled={isConnecting}
        >
          <Wallet className="mr-2" />
          {isConnecting ? "Connecting..." : "Connect Driver Wallet"}
        </Button>
      </div>

      <div className="text-center">
        <p className="text-sm text-white/60">
          Already a driver? Connect your wallet to continue
        </p>
      </div>
    </div>
  );
}
