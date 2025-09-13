import { Card } from "@/components/ui/card";

const Skills = () => {
  const services = [
    {
      title: "Fashion Retail",
      description: "Footwear, clothing, handbags & accessories for all genders. Casual, formal, traditional, and modern styles.",
      icon: "👗"
    },
    {
      title: "Custom Tailoring",
      description: "Professional sewing services, custom tailoring, alterations, and fashion design for unique outfits.",
      icon: "✂️"
    },
    {
      title: "Traditional Fabrics",
      description: "Authentic weaving cloths, local fabrics, kente, smock cloths, and traditional Ghanaian textiles.",
      icon: "🧵"
    },
    {
      title: "Nationwide Delivery",
      description: "Convenient delivery service across Ghana, bringing fashion right to your doorstep.",
      icon: "🚚"
    },
    {
      title: "Event Styling",
      description: "Special orders for weddings, traditional ceremonies, corporate events with custom clothing & accessories.",
      icon: "💒"
    },
    {
      title: "Fashion Consultation",
      description: "Personal styling advice, wardrobe planning, and fashion guidance for every occasion.",
      icon: "💫"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Our Products & Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for your fashion journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-card border-0 shadow-sm"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;