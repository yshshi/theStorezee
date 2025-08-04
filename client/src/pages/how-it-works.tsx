import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Truck, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function HowItWorks() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-blue-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Storezee: Drop the Bag, Not the Moment
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Skip the hassle of carrying bags. Here's how Storezee makes your journey effortless and secure in 5 easy steps.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                    1
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Choose a Nearby Locker Point
                  </h2>
                </div>
                <p className="text-lg text-gray-600">
                  Open the Storezee app and based on your location, browse the verified storage locations near you. 
                  View photos, prices, and availability in real-time. Choose the most convenient spot.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>GPS-enabled locations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Verified partners</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-primary to-blue-600 h-64 flex items-center justify-center">
                      <div className="text-white text-center">
                        <MapPin className="w-16 h-16 mx-auto mb-4" />
                        <p className="text-lg font-medium">Interactive Map View</p>
                        <p className="text-blue-100">Select the nearest verified storage unit near you.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-gray-900 font-bold text-lg">
                    2
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Book Pickup at Your Time and Location
                  </h2>
                </div>
                <p className="text-lg text-gray-600">
                  Pick a convenient pickup time and share your location. Add any instructions for our Saathi - your personal luggage assistant.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Flexible scheduling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Instant confirmation</span>
                  </div>
                </div>
              </div>
              <div className="lg:order-1 relative">
                <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-secondary to-yellow-400 h-64 flex items-center justify-center">
                      <div className="text-gray-900 text-center">
                        <Clock className="w-16 h-16 mx-auto mb-4" />
                        <p className="text-lg font-medium">Book Pickup Time and Location</p>
                        <p className="text-yellow-800">Choose your convenient storage unit booking time and pickup location.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                    3
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Saathi Arrives to Collect
                  </h2>
                </div>
                <p className="text-lg text-gray-600">
                  Our trusted Saathi partner arrives at your location within 15-30 minutes. 
                  They'll verify your Booking-Id, collect your luggage , verify the luggage locks and real time luggage weight and images.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Truck className="w-4 h-4" />
                    <span>Professional service</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Identity verification</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 h-64 flex items-center justify-center">
                      <div className="text-white text-center">
                        <Truck className="w-16 h-16 mx-auto mb-4" />
                        <p className="text-lg font-medium">Background-Checked Saathi's</p>
                        <p className="text-green-100">Secure pickup service with full user satisfaction.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                    4
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Track Your Bag in Real-Time
                  </h2>
                </div>
                <p className="text-lg text-gray-600">
                  Follow your luggage on the map from pickup to storage. Get notified once it’s safely stored in a camera-monitored, cleaned and secure units.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Real-time GPS tracking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Maximum Luggage Security</span>
                  </div>
                </div>
              </div>
              <div className="lg:order-1 relative">
                <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-purple-500 to-indigo-600 h-64 flex items-center justify-center">
                      <div className="text-white text-center">
                        <Shield className="w-16 h-16 mx-auto mb-4" />
                        <p className="text-lg font-medium">Live Tracking</p>
                        <p className="text-purple-100">Monitor luggage status</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                    5
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Get It Back Anytime
                  </h2>
                </div>
                <p className="text-lg text-gray-600">
                  When you're ready to collect your luggage, Schedule a return via the app, and our Saathi will deliver it back to you, wherever you are.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Return When You Need</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck className="w-4 h-4" />
                    <span>Door-to-door delivery</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 h-64 flex items-center justify-center">
                      <div className="text-white text-center">
                        <CheckCircle className="w-16 h-16 mx-auto mb-4" />
                        <p className="text-lg font-medium">Easy Retrieval of Luggage</p>
                        <p className="text-orange-100">Get luggage back , any time , any place - we got your back.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience Storezee?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether it’s travel, errands, or emergencies - your bags are safe with Storezee
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/install-app">
              <Button size="lg" className="text-lg px-8 py-6 rounded-2xl">
                Download App Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/faq">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-2xl">
                View FAQs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}