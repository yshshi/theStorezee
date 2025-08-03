import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const submitContact = useMutation({
    mutationFn: (data: InsertContact) => apiRequest("/api/contact", "POST", data),
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours."
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: InsertContact) => {
    submitContact.mutate(data);
  };

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-blue-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We’d Love to Hear From You
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you’re a traveler, partner, or just curious—reach out. We're always happy to help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-xl rounded-3xl">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                    <p className="text-gray-600">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Enter your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />



                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us more about your inquiry..."
                                rows={6}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full text-lg py-6 rounded-2xl"
                        disabled={submitContact.isPending}
                      >
                        {submitContact.isPending ? (
                          <div className="flex items-center space-x-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            <span>Sending...</span>
                          </div>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Contact Details */}
              <Card className="border-0 shadow-xl rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-600">support@storezee.com</p>
                        <p className="text-sm text-gray-500">We respond within 2 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-gray-900" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Phone</h4>
                        <p className="text-gray-600">+91 70915 17586</p>
                        <p className="text-sm text-gray-500">Available 24/7</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Office</h4>
                        <p className="text-gray-600">Dhanbad<br />Jharkhand, India 828109</p>
                        <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support Options */}
              <Card className="border-0 shadow-xl rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Other Ways to Reach Us</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                      <div className="flex items-center space-x-3">
                        <MessageCircle className="w-5 h-5 text-primary" />
                        <span className="font-medium">In-App Chat</span>
                      </div>
                      <span className="text-sm text-green-600 font-medium">Fastest</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-secondary" />
                        <span className="font-medium">WhatsApp Support</span>
                      </div>
                      <span className="text-sm text-blue-600 font-medium">Quick</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Link */}
              <Card className="border-0 shadow-xl rounded-3xl bg-gradient-to-br from-primary/10 to-blue-50">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Check Our FAQ First
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Many common questions are answered in our comprehensive FAQ section.
                  </p>
                  <a href="/faq">
                    <Button variant="outline" className="rounded-2xl">
                      Visit FAQ Section
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Business Inquiries */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Business Inquiries
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Looking to collaborate, invest, or join our mission to transform travel convenience? Let’s start the conversation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Become a Storage Partner</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Have space to offer? Join our network of verified storage locations.
                </p>
                <a href="mailto:partners@storezee.com">
                  <Button variant="outline" size="sm" className="rounded-xl">
                    partners@storezee.com
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Saathi Delivery Partner</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Join our delivery team and earn income with flexible hours.
                </p>
                <a href="mailto:saathi@storezee.com">
                  <Button variant="outline" size="sm" className="rounded-xl">
                    saathi@storezee.com
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}