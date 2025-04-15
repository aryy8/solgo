
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Wallet } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function LoginForm() {
  const [isConnecting, setIsConnecting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleConnect = async () => {
    setIsConnecting(true);
    // Here you would implement the actual Solana wallet connection
    // For now, we'll just show a toast
    toast({
      title: "Wallet Connection Required",
      description: "Please implement Solana wallet connection integration",
    });
    setIsConnecting(false);
  };

  return (
    <div className="space-y-6">
      <Button 
        variant="glow" 
        size="xl"
        className="w-full"
        onClick={handleConnect}
        disabled={isConnecting}
      >
        <Wallet className="mr-2" />
        {isConnecting ? "Connecting..." : "Connect Wallet"}
      </Button>

      <div className="text-center">
        <p className="text-sm text-white/60">
          New to SolGo? Connect your wallet to get started
        </p>
      </div>
    </div>
  );
}
