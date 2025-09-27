import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Zap, Users } from "lucide-react";

const Pricing = () => {
const plans = [
    {
      name: "Basic",
      description: "Perfect for personal use and small businesses",
      price: "KES 2,500",
      period: "/month",
      icon: Zap,
      popular: false,
      features: [
        "1 Virtual number",
        "500 SMS messages", 
        "2GB data bundle",
        "Unlimited incoming calls",
        "Basic eSIM profile",
        "Email support",
        "24/7 agent assistance"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses and professionals",
      price: "KES 5,000",
      period: "/month", 
      icon: Crown,
      popular: true,
      features: [
        "3 Virtual numbers",
        "2,000 SMS messages",
        "10GB data bundle",
        "Unlimited incoming calls",
        "Advanced eSIM profiles",
        "Priority support",
        "Dedicated agent",
        "Call recording",
        "SMS history & analytics"
      ],
      buttonText: "Most Popular",
      buttonVariant: "hero" as const
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      price: "KES 12,000",
      period: "/month",
      icon: Users,
      popular: false,
      features: [
        "10+ Virtual numbers",
        "Unlimited SMS messages",
        "50GB data bundle",
        "Unlimited incoming calls",
        "Premium eSIM profiles",
        "24/7 phone support",
        "Account manager", 
        "Advanced analytics",
        "Custom integrations",
        "SLA guarantee"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const
    }
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            <Crown className="w-4 h-4" />
            Pricing Plans
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold">Choose Your Perfect Plan</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. All plans include agent support and instant activation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={index} 
                className={`relative group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular ? 'border-primary shadow-medium scale-105' : 'border-border/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1 shadow-medium">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center space-y-4 pt-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto ${
                    plan.popular 
                      ? 'bg-gradient-primary text-primary-foreground shadow-medium' 
                      : 'bg-muted text-foreground'
                  }`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <div>
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {plan.description}
                    </CardDescription>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Billed monthly, cancel anytime</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${
                          plan.popular ? 'bg-primary/10' : 'bg-muted'
                        }`}>
                          <Check className={`w-3 h-3 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                        </div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.buttonVariant} 
                    className="w-full"
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center space-y-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="space-y-2">
              <h4 className="font-semibold">Flexible Billing</h4>
              <p className="text-sm text-muted-foreground">Monthly or annual plans available</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">No Setup Fees</h4>
              <p className="text-sm text-muted-foreground">Get started immediately</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">24/7 Support</h4>
              <p className="text-sm text-muted-foreground">Always here to help</p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            All plans include our agent-assisted setup and Kenya telecommunications compliance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;