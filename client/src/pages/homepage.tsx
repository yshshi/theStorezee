import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Smartphone, Shield, Clock, Users, ArrowRight, Download } from "lucide-react";
import { Link } from "wouter";

export default function Homepage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Store Your Bags,
                  <span className="block text-secondary">Explore Freely</span>
                </h1>
                <p className="text-lg md:text-xl text-blue-100 max-w-lg">
                  Secure luggage storage at verified local points with real-time tracking. 
                  Your personal luggage assistant for seamless travel.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/install-app">
                  <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-2xl">
                    <Download className="w-5 h-5 mr-2" />
                    Download App
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-2xl border-white text-black hover:bg-white hover:text-primary">
                    How It Works
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-secondary" />
                  <span>Secure Storage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-secondary" />
                  <span>Real-time Tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-secondary" />
                  <span>Verified Partners</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-white">
                    <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-gray-900" />
                    </div>
                    <div>
                      <p className="font-semibold">Find Nearby Storage</p>
                      <p className="text-blue-100 text-sm">15+ locations around you</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold">Book in Seconds</p>
                      <p className="text-blue-100 text-sm">Quick & easy mobile booking</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold">Saathi Pickup</p>
                      <p className="text-blue-100 text-sm">30-60 min delivery service</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is Storezee?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Storezee is your personal luggage assistant that connects travelers with verified local storage points. 
              Store your bags securely while you explore cities hands-free.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Nearby Lockers</h3>
                <p className="text-gray-600">
                  Find verified storage locations near you, hosted by trusted local partners and vendors.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Smart-Lock Tracking</h3>
                <p className="text-gray-600">
                  Advanced smart-lock technology ensures your luggage is tracked and secure at all times.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Saathi Partners</h3>
                <p className="text-gray-600">
                  Our trusted Saathi delivery partners ensure quick pickup and drop-off of your luggage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Travel Light?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Download the Storezee app and start exploring cities without the burden of luggage.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/install-app">
              <Button size="lg" className="text-lg px-8 py-6 rounded-2xl">
                <Download className="w-5 h-5 mr-2" />
                Get Started
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-2xl">
                Learn More
              </Button>
            </Link>
          </div>
          
          <div className="flex justify-center space-x-4">
            <img 
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
              alt="Download on App Store" 
              className="h-12 rounded-lg"
            />
            <img 
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
              alt="Get it on Google Play" 
              className="h-12 rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}