import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Globe, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-virtual-numbers.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4" />
                Instant Virtual Numbers for Kenya
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Get Virtual Numbers & 
                <span className="bg-gradient-hero bg-clip-text text-transparent"> eSIM Service</span> 
                in Kenya
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Complete KYC verification through our secure system. Submit your details, 
                verify with government databases, receive email confirmation, then purchase 
                data bundles and calling credits for instant connectivity.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Virtual Numbers</h3>
                  <p className="text-sm text-muted-foreground">Instant allocation</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-secondary/10 rounded-lg">
                  <Globe className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold">eSIM Ready</h3>
                  <p className="text-sm text-muted-foreground">Global connectivity</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">Secure & Private</h3>
                  <p className="text-sm text-muted-foreground">Protected data</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-success/10 rounded-lg">
                  <Zap className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold">Instant Setup</h3>
                  <p className="text-sm text-muted-foreground">Quick onboarding</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="shadow-strong">
                Start Your Application
              </Button>
              <Button variant="outline" size="xl">
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Licensed in Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Instant Activation</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-strong hover:shadow-[0_20px_50px_-10px_hsl(214_84%_56%/0.3)] transition-shadow duration-500">
              <img 
                src={heroImage} 
                alt="Virtual phone numbers and eSIM service platform interface showing multiple virtual numbers and connectivity features"
                className="w-full h-auto object-cover"
              />
            </Card>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg shadow-medium font-semibold animate-bounce">
              Instant Setup
            </div>
            <div className="absolute -bottom-4 -left-4 bg-success text-success-foreground px-4 py-2 rounded-lg shadow-medium font-semibold">
              Kenya Licensed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;