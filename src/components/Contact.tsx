import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: "📍",
      label: "Location",
      value: "Lawra, Upper West Region",
      href: "#location"
    },
    {
      icon: "📞",
      label: "Call",
      value: "0205953646",
      href: "tel:0205953646"
    },
    {
      icon: "💬",
      label: "WhatsApp",
      value: "+233 59 205 3745",
      href: "https://wa.me/233592053745"
    },
    {
      icon: "📧",
      label: "Email",
      value: "joycepuoviel@gmail.com",
      href: "mailto:joycepuoviel@gmail.com"
    },
    {
      icon: "📱",
      label: "Facebook",
      value: "Beeuty Empress Collection's and Fashion Hub",
      href: "https://facebook.com"
    }
  ];

  const services = [
    { icon: "🚚", title: "Nationwide Delivery", desc: "We deliver anywhere in Ghana" },
    { icon: "✂️", title: "Custom Tailoring", desc: "Bespoke clothing made to fit" },
    { icon: "👗", title: "Fashion Retail", desc: "Modern & traditional styles" },
    { icon: "💎", title: "Premium Quality", desc: "Authentic fabrics & materials" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Visit Our Fashion Hub
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your style? Visit us in Lawra or contact us for nationwide delivery. 
            From everyday fashion to special occasion wear, we've got you covered.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card border-0 shadow-sm"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.desc}
                </p>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((contact, index) => (
              <Card 
                key={index}
                className="p-8 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card border-0 shadow-sm"
              >
                <div className="text-4xl mb-4">{contact.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {contact.label}
                </h3>
                <p className="text-accent font-medium text-lg">
                  {contact.value}
                </p>
              </Card>
            ))}
          </div>
          
          <div className="text-center space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="px-8 py-4 text-lg font-semibold bg-gradient-accent hover:opacity-90 transition-all duration-300 hover:-translate-y-1 shadow-elegant"
              >
                🛍️ Shop Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
              >
                ✂️ Custom Tailoring
              </Button>
            </div>
            
            <div className="pt-8 border-t border-border">
              <h3 className="text-xl font-bold text-primary mb-4">Business Hours</h3>
              <div className="grid md:grid-cols-2 gap-4 max-w-md mx-auto text-sm">
                <div>
                  <p className="font-semibold text-foreground">Monday - Friday</p>
                  <p className="text-muted-foreground">8:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Saturday</p>
                  <p className="text-muted-foreground">9:00 AM - 5:00 PM</p>
                </div>
              </div>
              <p className="text-muted-foreground mt-4 italic">
                Sunday: Closed (Available for urgent custom orders by appointment)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;