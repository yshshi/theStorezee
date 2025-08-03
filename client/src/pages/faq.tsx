import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import type { Faq } from "@shared/schema";

export default function FAQ() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const { data: faqs = [], isLoading } = useQuery<Faq[]>({
    queryKey: ["/api/faqs"],
    select: (data) => selectedCategory === "all" ? data : data.filter(faq => faq.category === selectedCategory)
  });

  const categories = [
    { id: "all", name: "All Questions", count: faqs.length },
    { id: "booking", name: "Booking", count: faqs.filter(f => f.category === "booking").length },
    { id: "safety", name: "Safety & Security", count: faqs.filter(f => f.category === "safety").length },
    { id: "pricing", name: "Pricing", count: faqs.filter(f => f.category === "pricing").length },
    { id: "pickup", name: "Pickup & Delivery", count: faqs.filter(f => f.category === "pickup").length || faqs.filter(f => f.category === "delivery").length }
  ];

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  if (isLoading) {
    return (
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading FAQs...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-blue-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Got questions? We’ve got answers. Here’s everything you need to know about how Storezee works. Still curious? Reach out to our support team — we’re here to help!
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-lg rounded-2xl sticky top-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-colors ${
                          selectedCategory === category.id
                            ? "bg-primary text-white"
                            : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{category.name}</span>
                          <span className={`text-sm px-2 py-1 rounded-full ${
                            selectedCategory === category.id
                              ? "bg-white/20 text-white"
                              : "bg-white text-gray-600"
                          }`}>
                            {category.count}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Items */}
            <div className="lg:col-span-3">
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <Card key={faq.id} className="border-0 shadow-lg rounded-2xl overflow-hidden">
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleExpanded(faq.id)}
                        className="w-full px-6 py-6 text-left hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          {expandedItems.has(faq.id) ? (
                            <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      
                      {expandedItems.has(faq.id) && (
                        <div className="px-6 pb-6">
                          <div className="border-t pt-4">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {faqs.length === 0 && (
                <Card className="border-0 shadow-lg rounded-2xl">
                  <CardContent className="p-12 text-center">
                    <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      No FAQs Found
                    </h3>
                    <p className="text-gray-600">
                      No questions found for the selected category. Try selecting a different category or contact our support team.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our friendly support team is here to help you 24/7. Get in touch for personalized assistance.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6 rounded-2xl">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Support
              </Button>
            </Link>
            <a href="mailto:support@storezee.com">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-2xl">
                Email Us Directly
              </Button>
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            <p>Email: support@storezee.com | Phone: +91 7091517586</p>
            <p>Average response time: Under 2 hours</p>
          </div>
        </div>
      </section>
    </div>
  );
}