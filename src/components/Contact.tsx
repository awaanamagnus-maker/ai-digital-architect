import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "awaanam@gmail.com",
      href: "mailto:awaanam@gmail.com"
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+233 553979045",
      href: "tel:+233553979045"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next project? Whether you need AI-powered solutions, 
            a modern website, or a marketing strategy that delivers, I'd love to help.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((contact, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card border-0 shadow-sm"
              >
                <div className="text-4xl mb-4">{contact.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {contact.label}
                </h3>
                <a 
                  href={contact.href}
                  className="text-accent hover:text-accent/80 transition-colors font-medium"
                >
                  {contact.value}
                </a>
              </Card>
            ))}
          </div>
          
          <div className="text-center space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="px-8 py-4 text-lg font-semibold bg-gradient-accent hover:opacity-90 transition-all duration-300 hover:-translate-y-1 shadow-elegant"
              >
                Start a Conversation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
              >
                📄 Download My Resume
              </Button>
            </div>
            
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
                "I help startups and agencies unlock growth through AI-powered solutions, modern web development, 
                and data-driven marketing — turning complex challenges into measurable business results."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;