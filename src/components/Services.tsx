import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Smartphone, MessageSquare, Shield, Clock, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Phone,
      title: "Virtual Phone Numbers",
      description: "Get instant access to Kenyan virtual numbers for business or personal use",
      features: ["Local Kenya numbers", "Instant allocation", "Call forwarding", "SMS support"],
      color: "primary"
    },
    {
      icon: Smartphone,
      title: "eSIM Services", 
      description: "Modern eSIM technology for seamless connectivity across devices",
      features: ["Global connectivity", "Multiple profiles", "Easy activation", "Device flexibility"],
      color: "secondary"
    },
    {
      icon: MessageSquare,
      title: "SMS & Voice",
      description: "Complete communication suite with SMS and voice call capabilities",
      features: ["Receive SMS", "Voice calls", "Call recording", "Message history"],
      color: "accent"
    },
    {
      icon: Shield,
      title: "Agent Support",
      description: "Professional agent assistance for setup and ongoing support",
      features: ["KYC assistance", "Setup guidance", "Technical support", "Account management"],
      color: "success"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "bg-primary/10 text-primary border-primary/20",
      secondary: "bg-secondary/10 text-secondary border-secondary/20", 
      accent: "bg-accent/10 text-accent border-accent/20",
      success: "bg-success/10 text-success border-success/20"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            <Users className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold">Complete Virtual Communication Solution</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From virtual numbers to eSIM services, we provide everything you need to stay connected in Kenya and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border/50">
                <CardHeader className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(service.color)}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* How it Works Process */}
        <div className="mt-16 space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">How It Works</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple 4-step process to get your virtual number and eSIM activated
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold text-lg">
                1
              </div>
              <h4 className="font-semibold">Submit KYC Details</h4>
              <p className="text-sm text-muted-foreground">
                Provide names, email, nationality, ID/passport, date of birth, use case, signature, and photo
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold text-lg">
                2
              </div>
              <h4 className="font-semibold">Government Verification</h4>
              <p className="text-sm text-muted-foreground">
                Your documents are matched with government databases and face recognition is performed
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold text-lg">
                3
              </div>
              <h4 className="font-semibold">Email Verification</h4>
              <p className="text-sm text-muted-foreground">
                Receive verification code via email to confirm your virtual number assignment
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold text-lg">
                4
              </div>
              <h4 className="font-semibold">Purchase & Activate</h4>
              <p className="text-sm text-muted-foreground">
                Buy data bundles or calling credits and start using your virtual number immediately
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;