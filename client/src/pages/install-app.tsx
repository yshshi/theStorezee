import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Download, QrCode, Apple, Zap, Shield } from "lucide-react";
import { SiAndroid, SiApple } from "react-icons/si";

export default function InstallApp() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Download the
                  <span className="block text-primary">Storezee App</span>
                </h1>
                <p className="text-lg text-gray-600">
                  Get instant access to secure luggage storage locations near you. 
                  Available on iOS and Android with real-time tracking and smart-lock technology.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://apps.apple.com/app/storezee" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 rounded-2xl bg-black hover:bg-gray-800">
                    <SiApple className="w-6 h-6 mr-3" />
                    App Store
                  </Button>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.storezee" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 rounded-2xl">
                    <SiAndroid className="w-6 h-6 mr-3" />
                    Google Play
                  </Button>
                </a>
              </div>
              
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Secure & Verified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>Quick Booking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Smartphone className="w-4 h-4" />
                  <span>Real-time Tracking</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Phone Mockup */}
              <div className="relative mx-auto w-64 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  <div className="bg-gradient-to-br from-primary to-blue-600 h-full flex flex-col">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-4 py-2 text-white text-xs">
                      <span>9:41</span>
                      <span>•••</span>
                      <span>100%</span>
                    </div>
                    
                    {/* App Content */}
                    <div className="flex-1 px-4 py-6 space-y-4">
                      <div className="text-white text-center">
                        <h3 className="text-lg font-bold mb-1">Storezee</h3>
                        <p className="text-blue-200 text-sm">Store. Track. Explore.</p>
                      </div>
                      
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-secondary rounded-xl"></div>
                          <div className="text-white">
                            <p className="text-sm font-medium">Central Station</p>
                            <p className="text-xs text-blue-200">0.2 km away</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-white/30 rounded-xl"></div>
                          <div className="text-white">
                            <p className="text-sm font-medium">Mall Entrance</p>
                            <p className="text-xs text-blue-200">0.5 km away</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-secondary rounded-2xl p-3 text-center">
                        <p className="text-gray-900 font-medium text-sm">Book Storage</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 border">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-left">
                <div className="flex items-center space-x-3 mb-4">
                  <QrCode className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-bold text-gray-900">Scan to Download</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Scan this QR code with your phone camera to instantly download 
                  the Storezee app from your device's app store.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>✓ Works with iPhone and Android</p>
                  <p>✓ Automatically detects your device</p>
                  <p>✓ Redirects to correct app store</p>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <div className="w-48 h-48 bg-gray-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <QrCode className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">QR Code</p>
                    <p className="text-gray-400 text-xs">Scan to download</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose the Storezee App?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our mobile app is designed to make luggage storage as simple as ordering food. 
              Here's what makes it special.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Easy Booking</h3>
                <p className="text-gray-600 text-sm">
                  Find and book storage locations in just 3 taps. Our intuitive interface makes it effortless.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Live Tracking</h3>
                <p className="text-gray-600 text-sm">
                  Track your luggage in real-time from pickup to secure storage with smart-lock notifications.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Quick Support</h3>
                <p className="text-gray-600 text-sm">
                  Get instant help through in-app chat. Our support team is always ready to assist you.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Offline Access</h3>
                <p className="text-gray-600 text-sm">
                  Access your booking details and tracking information even when you're offline.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Apple className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Push Notifications</h3>
                <p className="text-gray-600 text-sm">
                  Get updates on pickup status, storage confirmation, and delivery notifications instantly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <QrCode className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Digital Receipts</h3>
                <p className="text-gray-600 text-sm">
                  All your receipts and tracking codes are stored securely in the app for easy access.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of travelers who trust Storezee for secure, convenient luggage storage.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://apps.apple.com/app/storezee" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-6 rounded-2xl bg-black hover:bg-gray-800">
                <SiApple className="w-6 h-6 mr-3" />
                Download for iOS
              </Button>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.storezee" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-2xl">
                <SiAndroid className="w-6 h-6 mr-3" />
                Download for Android
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}