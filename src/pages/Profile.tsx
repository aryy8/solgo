
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { UserProfile } from "@/components/user/user-profile";

const Profile = () => {
  return (
    <div className="min-h-screen bg-solgo-black text-white">
      <Header />
      
      <div className="pt-16">
        {/* Page content */}
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h1 className="font-orbitron text-3xl md:text-4xl font-bold text-white">Your Profile</h1>
              <p className="font-roboto text-white/70 mt-2">Manage your account and preferences</p>
            </div>
            
            <UserProfile />
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Profile;
