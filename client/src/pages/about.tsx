import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Users, Lightbulb, Shield } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Storezee
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing travel by solving one of the most common problems travelers face: 
            what to do with luggage when exploring a new city.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Vision */}
            <Card className="border-0 shadow-xl rounded-3xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To create a world where travelers can explore any destination freely, 
                  without the burden of carrying luggage. We envision seamless travel 
                  experiences where convenience and security go hand in hand.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="border-0 shadow-xl rounded-3xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-gray-900" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To provide travelers with secure, convenient, and affordable luggage 
                  storage solutions through a network of verified local partners, 
                  powered by smart technology and exceptional service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We Built Storezee */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why We Built Storezee
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every traveler has experienced the frustration of carrying heavy luggage 
              while exploring a new city. We saw this universal problem and decided to solve it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Lightbulb className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">The Problem</h3>
                  <p className="text-gray-600">
                    Travelers often arrive early or depart late, leaving them with luggage 
                    and nowhere to store it. Hotel storage isn't always available, and 
                    traditional lockers are expensive and hard to find.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Solution</h3>
                  <p className="text-gray-600">
                    We created a network of verified local storage points with smart-lock 
                    technology, backed by trusted Saathi delivery partners for seamless 
                    pickup and drop-off service.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Real Impact</h3>
                  <p className="text-gray-600">
                    Since launch, we've helped thousands of travelers explore cities 
                    hands-free, while providing income opportunities for local partners 
                    and delivery providers.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Future Vision</h3>
                  <p className="text-gray-600">
                    We're expanding to more cities and adding new features like 
                    luggage cleaning, repairs, and personalized travel assistance 
                    to make every journey memorable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do, from product development 
              to customer service and partner relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg rounded-2xl text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Security First</h3>
                <p className="text-gray-600">
                  Your luggage's safety is our top priority. We use advanced technology 
                  and thorough partner verification to ensure complete security.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Community Driven</h3>
                <p className="text-gray-600">
                  We believe in empowering local communities by creating opportunities 
                  for residents to earn income while helping travelers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Customer Obsessed</h3>
                <p className="text-gray-600">
                  Every feature we build and every decision we make starts with 
                  understanding and solving real traveler problems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join Our Journey
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Be part of the travel revolution. Whether you're a traveler, potential partner, 
            or just curious about what we're building, we'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/team">
              <Button size="lg" className="text-lg px-8 py-6 rounded-2xl">
                Meet Our Team
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-2xl">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}