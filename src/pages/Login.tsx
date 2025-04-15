
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LoginForm } from "@/components/auth/login-form";

const Login = () => {
  return (
    <div className="min-h-screen bg-solgo-black text-white">
      <Header />
      
      <div className="pt-16">
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 max-w-md">
            <div className="mb-8 text-center">
              <h1 className="font-orbitron text-3xl md:text-4xl font-bold text-white">Welcome Back</h1>
              <p className="font-roboto text-white/70 mt-2">Connect your wallet to continue</p>
            </div>
            
            <LoginForm />
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;
