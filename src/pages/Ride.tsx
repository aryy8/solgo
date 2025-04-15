
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { RideBookingForm } from "@/components/ride/ride-booking-form";
import { MapPlaceholder } from "@/components/ui/map-placeholder";

const Ride = () => {
  return (
    <div className="min-h-screen bg-solgo-black text-white">
      <Header />
      
      <div className="pt-16">
        {/* Page content */}
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Booking form */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <RideBookingForm />
              </div>
              
              {/* Map */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                <div className="h-[600px] rounded-lg overflow-hidden border border-solgo-teal/20">
                  <MapPlaceholder />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Ride;
