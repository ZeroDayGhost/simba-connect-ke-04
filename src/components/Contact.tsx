import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageSquare, Users } from "lucide-react";

const Contact = () => {
  return (
    <section id="support" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            <MessageSquare className="w-4 h-4" />
            Get in Touch
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our agents are ready to help you get your virtual number and eSIM service set up today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone Support</h4>
                    <p className="text-sm text-muted-foreground">+254 700 123 456</p>
                    <p className="text-sm text-muted-foreground">24/7 Available</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email Support</h4>
                    <p className="text-sm text-muted-foreground">support@virtualke.com</p>
                    <p className="text-sm text-muted-foreground">Response within 2 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium">Office Location</h4>
                    <p className="text-sm text-muted-foreground">Nairobi, Kenya</p>
                    <p className="text-sm text-muted-foreground">Licensed & Regulated</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-medium">Business Hours</h4>
                    <p className="text-sm text-muted-foreground">24/7 Agent Support</p>
                    <p className="text-sm text-muted-foreground">Always Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Why Choose VirtualKE?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Setup Time</span>
                  <span className="font-semibold text-primary">&lt; 15 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Success Rate</span>
                  <span className="font-semibold text-success">99.9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Customer Support</span>
                  <span className="font-semibold text-accent">24/7</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Compliance</span>
                  <span className="font-semibold text-secondary">Kenya Licensed</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-medium hover:shadow-strong transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Start Your Application</CardTitle>
                <CardDescription>
                  Fill out this form and our agents will contact you within 15 minutes to complete your setup.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" placeholder="+254 700 123 456" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Type *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the service you need" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="virtual-number">Virtual Number Only</SelectItem>
                      <SelectItem value="esim-only">eSIM Service Only</SelectItem>
                      <SelectItem value="both">Virtual Number + eSIM</SelectItem>
                      <SelectItem value="enterprise">Enterprise Solution</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="use-case">Use Case</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="How will you use this service?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="personal">Personal Use</SelectItem>
                      <SelectItem value="business">Business Communications</SelectItem>
                      <SelectItem value="verification">Account Verification</SelectItem>
                      <SelectItem value="international">International Connectivity</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Requirements</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about any specific requirements or questions you have..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-4">
                  <Button variant="hero" size="xl" className="w-full">
                    <Users className="w-5 h-5 mr-2" />
                    Submit Application
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our terms of service and privacy policy. 
                    Our agents will contact you within 15 minutes during business hours.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;