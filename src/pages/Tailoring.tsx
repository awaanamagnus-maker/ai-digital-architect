import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scissors, Ruler, Sparkles, Clock, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import seamstressImage from "@/assets/seamstress-working.jpg";
import tailoringToolsImage from "@/assets/tailoring-tools.jpg";
import customTailoringImage from "@/assets/custom-tailoring.jpg";

const Tailoring = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Scissors,
      title: "Custom Tailoring",
      description: "Bespoke outfits designed and tailored to your exact measurements and style preferences.",
      features: ["Traditional wear", "Corporate suits", "Casual outfits", "Special occasion wear"]
    },
    {
      icon: Ruler,
      title: "Alterations & Repairs",
      description: "Professional alterations to ensure perfect fit for your existing garments.",
      features: ["Hemming", "Taking in/letting out", "Zipper replacement", "Button & patches"]
    },
    {
      icon: Sparkles,
      title: "Fashion Design",
      description: "Unique fashion pieces created from your vision with expert craftsmanship.",
      features: ["Wedding attire", "Ceremonial clothing", "Kente designs", "Modern African wear"]
    },
    {
      icon: Clock,
      title: "Express Service",
      description: "Rush orders available for urgent fashion needs with premium service.",
      features: ["24-48 hour turnaround", "Priority scheduling", "Same-day consultations", "Emergency repairs"]
    }
  ];

  const process = [
    { step: "1", title: "Consultation", description: "Discuss your vision and requirements" },
    { step: "2", title: "Measurements", description: "Precise measurements for perfect fit" },
    { step: "3", title: "Fabric Selection", description: "Choose from our quality materials" },
    { step: "4", title: "Creation", description: "Expert tailoring & craftsmanship" },
    { step: "5", title: "Fitting", description: "Try-on and final adjustments" },
    { step: "6", title: "Delivery", description: "Receive your perfect outfit" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Button
            variant="ghost"
            className="mb-6 hover:bg-primary/10"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
                Expert Tailoring
                <span className="block text-accent mt-2">& Sewing Services</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Where tradition meets precision. Our skilled seamstresses bring your fashion dreams to life with meticulous attention to detail and years of expertise.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-accent hover:opacity-90 transition-all"
                  onClick={() => navigate('/#contact')}
                >
                  Book a Consultation
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2"
                  onClick={() => {
                    const servicesSection = document.getElementById('services');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  View Services
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={seamstressImage}
                  alt="Professional seamstress at work"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-semibold">Crafted with Passion & Precision</p>
                  <p className="text-sm opacity-90">Every stitch tells a story</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Our Tailoring Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive fashion solutions from concept to completion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border">
                  <div className="bg-gradient-primary p-3 rounded-lg w-fit mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-foreground/80">
                        <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Our Tailoring Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From consultation to final fitting, we ensure perfection at every step
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-accent text-white font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-soft">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Craftsmanship Gallery
            </h2>
            <p className="text-xl text-muted-foreground">
              A glimpse into our tailoring excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-soft group">
              <img 
                src={tailoringToolsImage}
                alt="Professional tailoring tools"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Professional Equipment</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-soft group">
              <img 
                src={customTailoringImage}
                alt="Custom tailoring service"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Expert Craftsmanship</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-primary p-12 rounded-2xl shadow-elegant text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Your Perfect Outfit?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Book a consultation today and let our expert seamstresses bring your vision to life
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => navigate('/#contact')}
              >
                Contact Us Now
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary"
                onClick={() => navigate('/')}
              >
                Explore More Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            © 2024 Beauty Empress Collections & Fashion Hub. All rights reserved. 
          </p>
          <p className="text-xs opacity-70 mt-2">
            Expert tailoring services in Lawra, Upper West Region | Nationwide delivery available
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Tailoring;
