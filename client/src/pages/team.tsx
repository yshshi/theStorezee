import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Team() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Co-Founder & CEO",
      description: "Former product lead at major travel platform. Passionate about solving real traveler problems with innovative technology.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "alex@storezee.com"
    },
    {
      name: "Sarah Chen",
      role: "Co-Founder & CTO",
      description: "Tech veteran with 10+ years in mobile and IoT development. Leads our smart-lock technology and platform architecture.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1c1?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "sarah@storezee.com"
    },
    {
      name: "Raj Patel",
      role: "Head of Operations",
      description: "Logistics expert who built our Saathi partner network. Ensures seamless delivery operations across all locations.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "raj@storezee.com"
    },
    {
      name: "Maya Singh",
      role: "Head of Partnerships",
      description: "Business development leader who expands our storage location network and builds relationships with local communities.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "maya@storezee.com"
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're a passionate group of entrepreneurs, engineers, and operators 
            dedicated to revolutionizing the travel experience for everyone.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-xl rounded-3xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="aspect-w-16 aspect-h-12">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-6 text-white">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-blue-200">{member.role}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {member.description}
                    </p>
                    
                    <div className="flex items-center space-x-4">
                      <a 
                        href={member.linkedin} 
                        className="p-2 bg-blue-100 rounded-xl hover:bg-blue-200 transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="w-5 h-5 text-blue-600" />
                      </a>
                      <a 
                        href={member.twitter} 
                        className="p-2 bg-sky-100 rounded-xl hover:bg-sky-200 transition-colors"
                        aria-label={`${member.name} Twitter`}
                      >
                        <Twitter className="w-5 h-5 text-sky-600" />
                      </a>
                      <a 
                        href={`mailto:${member.email}`} 
                        className="p-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-5 h-5 text-gray-600" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Role Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Makes Us Tick
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse backgrounds and shared passion for travel innovation 
              drive us to build the best possible experience for our users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg rounded-2xl text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We constantly push boundaries with new technology and creative 
                  solutions to make travel more convenient.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
                <p className="text-gray-600">
                  We work closely with local communities and partners to create 
                  mutually beneficial relationships.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💚</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Impact</h3>
                <p className="text-gray-600">
                  Every day we focus on creating positive impact for travelers, 
                  partners, and local communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're always looking for passionate individuals who want to help 
            shape the future of travel. Interested in working with us?
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6 rounded-2xl">
                Get in Touch
              </Button>
            </Link>
            <a href="mailto:careers@storezee.com">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-2xl">
                careers@storezee.com
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}